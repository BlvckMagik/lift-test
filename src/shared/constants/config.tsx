import {
  GenreConfigType,
  ProgressValuesConfigType,
} from "@/shared/types/configs";

export const genreConfig: GenreConfigType = [
  {
    id: "drama",
    name: "Drama",
    icon: "🎭",
  },
  {
    id: "comedy",
    name: "Comedy",
    icon: "🤹",
  },
  {
    id: "action",
    name: "Action",
    icon: "🥷",
  },
  {
    id: "thriller",
    name: "Thriller",
    icon: "🧟",
  },
  {
    id: "science_fiction",
    name: "Science fiction",
    icon: "👨‍🔬",
  },
];

export const progressValuesConfig: ProgressValuesConfigType = {
  0: "0%",
  1: "30%",
  2: "60%",
  3: "100%",
};
