import { ReactNode } from "react";
import { type CourseGoal as CGoal } from "../App";
import CourseGoal from "./CourseGoal";
import InfoBox from "./InfoBox";

type CourseGoalListProps = {
  goals: CGoal[];
  onDelete: (id: number) => void;
};

const CourseGoalList = ({ goals, onDelete }: CourseGoalListProps) => {
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">
        <p>No goals found. Maybe add one?</p>
      </InfoBox>
    );
  }

  let warningBox: ReactNode;

  if (goals.length > 4) {
    warningBox = (
      <InfoBox mode="warning" severity="medium">
        <p>You're collecting a lot of goals. Don't put too much on your plate!</p>
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal
              key={goal.id}
              title={goal.title}
              onDelete={onDelete}
              id={goal.id}
            >
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CourseGoalList;
