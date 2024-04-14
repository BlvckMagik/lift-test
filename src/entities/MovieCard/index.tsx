"use client";

import { Movie } from "@/shared/types/movie";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";

import * as Styled from "./index.styled";

type MovieCardType = {
  poster: Movie["Poster"];
  title: Movie["Title"];
  year: Movie["Year"];
};

const MovieCard: React.FC<MovieCardType> = ({ poster, title, year }) => {
  return (
    <Styled.Container>
      {poster === "N/A" ? (
        <InsertPhotoIcon sx={{ width: "304px", height: "450px" }} />
      ) : (
        <Styled.MovieImage src={poster} alt="emodji" width={135} height={135} />
      )}
      <Styled.Info>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Year>{year}</Styled.Year>
      </Styled.Info>
    </Styled.Container>
  );
};

export default MovieCard;
