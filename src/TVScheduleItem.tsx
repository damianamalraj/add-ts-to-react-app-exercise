import React from "react";
import { TVProgram } from "./TVPage";

type Props = {
  program: TVProgram;
};

const TVScheduleItem: React.FC<Props> = ({ program }) => {
  return (
    <li className="list-group-item">
      <strong>{program.start}</strong>
      <div>{program.name}</div>
    </li>
  );
};

export default TVScheduleItem;
