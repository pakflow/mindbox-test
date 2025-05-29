import { useState } from "react";

import s from "./TaskInput.module.scss";

type TaskInputProps = {
  onAdd: (text: string) => void;
};

export function TaskInput({ onAdd }: TaskInputProps) {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmed = text.trim();

    if (trimmed.length > 0) {
      onAdd(trimmed);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={s.input}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What needs to be done?"
        autoFocus
      />
    </form>
  );
}
