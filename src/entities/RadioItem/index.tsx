"use client";
import { Radio } from "@mui/material";

import * as Styled from "./index.styled";

type RadioItemProps = {
  value: string;
  name: string;
  icon: any;
  checked: boolean;
  onClick: (value: string) => void;
};

const RadioItem: React.FC<RadioItemProps> = ({
  value,
  name,
  icon,
  checked,
  onClick,
}) => {
  return (
    <Styled.FormControlLabel
      checked={checked}
      value={value}
      control={<Radio checkedIcon={<Styled.CheckedIcon />} size="medium" />}
      labelPlacement="start"
      label={
        <Styled.LabelContainer>
          <span>{icon}</span>
          <span>{name}</span>
        </Styled.LabelContainer>
      }
      onClick={() => onClick(value)}
    />
  );
};

export default RadioItem;
