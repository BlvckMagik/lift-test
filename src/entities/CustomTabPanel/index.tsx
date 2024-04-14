"use client";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  curPageIndex: number;
}

const CustomTabPanel = (props: TabPanelProps) => {
  const { children, curPageIndex, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={curPageIndex !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {curPageIndex === index && children}
    </div>
  );
};

export default CustomTabPanel;
