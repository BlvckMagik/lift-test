"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";

import { setItem } from "@/shared/utils";
import { reset, setSnackbarInfo } from "@/shared/store/slice";
import { RootState } from "@/shared/store";
import { instance } from "@/shared/gateway/instance";
import { Movie } from "@/shared/types/movie";
import NoMovies from "@/entities/NoMovies";
import MovieCard from "@/entities/MovieCard";

import * as Styled from "./index.styled";

const MovieViewer: React.FC = () => {
  const movieName = useSelector((state: RootState) => state.slice.movieName);
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [moviesList, setMoviesList] = useState<Movie[]>([]);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const res = await instance.get("", { params: { s: movieName } });
        if (res.data?.Search) setMoviesList(res.data.Search);

        setIsLoading(false);
      } catch {
        dispatch(
          setSnackbarInfo({
            open: true,
            severity: "error",
            message: "Something went wrong. Please, try again",
          })
        );
        setIsLoading(false);
      }
    })();
  }, []);

  if (isLoading) {
    return <CircularProgress />;
  }

  return moviesList.length === 0 ? (
    <NoMovies />
  ) : (
    <Styled.Container>
      {moviesList.map(({ Poster, Title, Year, imdbID }) => (
        <MovieCard key={imdbID} poster={Poster} title={Title} year={Year} />
      ))}
      <Styled.Button
        color="primary"
        variant="contained"
        onClick={() => {
          setItem("selectedGenre", "");
          dispatch(reset());
        }}
      >
        Complete
      </Styled.Button>
    </Styled.Container>
  );
};

export default MovieViewer;
