import { type CourseGoal as CGoal } from "../App";
import CourseGoal from "./CourseGoal";

type CourseGoalListProps = {
  goals: CGoal[];
  onDelete: (id: number) => void;
};

const CourseGoalList = ({ goals, onDelete }: CourseGoalListProps) => {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal key={goal.id} title={goal.title} onDelete={onDelete} id={goal.id}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
};

export default CourseGoalList;
