"use client";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { genreConfig } from "@/shared/constants/config";
import RadioItem from "@/entities/RadioItem";
import { getItem, setItem } from "@/shared/utils";
import { setPageIndex, setProgress } from "@/shared/store/slice";

import * as Styled from "./index.styled";

const GenreSelector: React.FC = () => {
  const dispatch = useDispatch();

  const [selectedGenre, setSelectedGenre] = useState<null | string>(
    getItem("selectedGenre") || null
  );

  useEffect(() => {
    if (selectedGenre) dispatch(setProgress(1));
  }, [selectedGenre]);

  return (
    <Styled.FormControl>
      <Styled.FormLabel id="radio-buttons-group-label">
        Your favorite movie genre?
      </Styled.FormLabel>
      <Styled.RadioGroup
        aria-labelledby="radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        value={selectedGenre}
      >
        {genreConfig.map((genre, i) => (
          <RadioItem
            key={genre.id + i}
            name={genre.name}
            value={genre.id}
            icon={genre.icon}
            onClick={setSelectedGenre}
            checked={genre.id === selectedGenre}
          />
        ))}
      </Styled.RadioGroup>
      <Styled.Button
        color="primary"
        variant="contained"
        disabled={!selectedGenre}
        onClick={() => {
          setItem("selectedGenre", selectedGenre);
          dispatch(setPageIndex(1));
          dispatch(setProgress(2));
        }}
      >
        Continue
      </Styled.Button>
    </Styled.FormControl>
  );
};

export default GenreSelector;
