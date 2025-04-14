import { useState } from "react";
import Header from "./components/Header";
import CourseGoalList from "./components/CourseGoalList";

// image for the header
import goalsImg from "./assets/goals.jpg";
import NewGoal from "./components/NewGoal";

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

function App() {
  // useState is a generic function that can take a type argument
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  const handleAddGoal = (title: string, description: string) => {
    const newGoal: CourseGoal = {
      id: Math.random(),
      title: title,
      description: description,
    };
    setGoals((prevGoals) => [...prevGoals, newGoal]);
  };

  const handleDeleteGoal = (id: number) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  };

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal addGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onDelete={handleDeleteGoal} />
    </main>
  );
}

export default App;
