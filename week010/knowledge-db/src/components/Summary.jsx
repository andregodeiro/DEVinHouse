import React from "react";
import { SummaryCard } from "./SummaryCard";

export const Summary = ({}) => {
  return (
    <>
      <SummaryCard title="Back-End" count={18} />;
      <SummaryCard title="Front-End" count={18} />;
      <SummaryCard title="Total " count={18} />
    </>
  );
};
