import { useRef, type FormEvent } from "react";

type NewGoalProps = {
  addGoal: (title: string, summary: string) => void;
};

const NewGoal = ({ addGoal }: NewGoalProps) => {
  // useRef is a hook that returns a mutable ref object whose .current property is initialized to the passed argument
  // basically => useRef<HTMLInputElement>(null) is a way to create a reference to an input element 
  // where HTMLInputElement is the related type to the useRef generic type
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const data = new FormData(e.currentTarget);
    // console.log(data.get("goal"), data.get("summary"));
    if (goal.current && summary.current) {
      const newGoal = goal.current.value.trim();
      const newSummary = summary.current.value.trim();
      if (newGoal.length === 0 || newSummary.length === 0) return;

      addGoal(newGoal, newSummary);
      goal.current.value = "";
      summary.current.value = "";
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your goal</label>
        <input id="goal" name="goal" type="text" ref={goal} />
      </p>
      <p>
        <label htmlFor="summary">Short summary</label>
        <input id="summary" name="summary" type="text" ref={summary} />
      </p>
      <p>
        <button type="submit">Add Goal</button>
      </p>
    </form>
  );
};

export default NewGoal;
