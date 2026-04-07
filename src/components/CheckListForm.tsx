import { useState } from "react";
import styled from "styled-components";

type Props = {
  onAdd: (task: string) => void;
};

export function CheckListForm({ onAdd }: Props) {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value.trim()) return;

    onAdd(value);
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h6>Liste bearbeiten</h6>

      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Neue Aufgabe"
      />

      <button type="submit">Speichern</button>
    </Form>
  );
}

const Form = styled.form`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;

  background: rgba(150, 150, 255, 0.95);
  padding: 10px;
  border-radius: 5px;
`;
