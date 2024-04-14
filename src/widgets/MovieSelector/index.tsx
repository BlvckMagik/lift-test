"use client";
import { useDispatch, useSelector } from "react-redux";

import { validateString } from "@/shared/utils";
import { MOVIE_PATTERN } from "@/shared/constants";
import { RootState } from "@/shared/store";
import { setMovieName, setPageIndex, setProgress } from "@/shared/store/slice";

import * as Styled from "./index.styled";

const MovieSelector: React.FC = () => {
  const movieName = useSelector((state: RootState) => state.slice.movieName);
  const dispatch = useDispatch();

  return (
    <Styled.FormControl>
      <Styled.FormLabel id="radio-buttons-group-label">
        Enter movie title
      </Styled.FormLabel>
      <Styled.TextField
        value={movieName}
        error={validateString(MOVIE_PATTERN, movieName)}
        id="filled-error-helper-text"
        placeholder="Movie title here"
        helperText={
          validateString(MOVIE_PATTERN, movieName)
            ? "Type correct movie name."
            : ""
        }
        variant="outlined"
        onChange={(e) => dispatch(setMovieName(e.target.value))}
      />
      <Styled.Button
        color="primary"
        variant="contained"
        disabled={!(!validateString(MOVIE_PATTERN, movieName) && movieName)}
        onClick={() => {
          dispatch(setProgress(3));
          dispatch(setPageIndex(2));
        }}
      >
        Continue
      </Styled.Button>
    </Styled.FormControl>
  );
};

export default MovieSelector;
