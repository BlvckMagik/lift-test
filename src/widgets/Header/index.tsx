"use client";
import { Tooltip } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";

import { progressValuesConfig } from "@/shared/constants/config";
import { setPageIndex, setProgress } from "@/shared/store/slice";
import { RootState } from "@/shared/store";

import * as Styled from "./index.styled";

const Header: React.FC = () => {
  const pageIndex = useSelector((state: RootState) => state.slice.pageIndex);
  const progress = useSelector((state: RootState) => state.slice.progress);
  const dispatch = useDispatch();

  const handlePrevPage = (): void => {
    if (pageIndex !== 0) {
      dispatch(setPageIndex(pageIndex - 1));
      dispatch(setProgress(progress - 1));
    }
  };

  return (
    <Styled.HeaderContainer>
      <Styled.Nav>
        <Styled.IconContainer>
          <NavigateBeforeIcon
            sx={{
              height: "20px",
              cursor: pageIndex === 0 ? "auto" : "pointer",
              opacity: pageIndex === 0 ? "0.3" : "1",
            }}
            onClick={handlePrevPage}
          />
        </Styled.IconContainer>

        <Styled.Progress>{progressValuesConfig[progress]}</Styled.Progress>
        <Tooltip title="Nothing to see here :(">
          <MenuIcon />
        </Tooltip>
      </Styled.Nav>

      <Styled.LinearProgress
        variant="buffer"
        valueBuffer={100}
        value={Math.round((100 / 3) * progress)}
      />
    </Styled.HeaderContainer>
  );
};

export default Header;
