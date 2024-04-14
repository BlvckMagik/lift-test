"use client";

import Image from "next/image";

import * as Styled from "./index.styled";

const NoMovies: React.FC = () => {
  return (
    <Styled.Container>
      <Image src="/assets/emodji.png" alt="emodji" width={135} height={135} />
      <div>Oops, no movie found</div>
    </Styled.Container>
  );
};

export default NoMovies;
