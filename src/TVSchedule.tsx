import React from "react";

type Props = {
  title?: string;
  children: React.ReactNode;
};

const TVSchedule: React.FC<Props> = ({ title, children }) => {
  return (
    <>
      <h1 id="js-title">{title}</h1>
      <div id="js-schedule">
        <ul className="list-group list-group-flush">{children}</ul>
      </div>
    </>
  );
};

export default TVSchedule;
