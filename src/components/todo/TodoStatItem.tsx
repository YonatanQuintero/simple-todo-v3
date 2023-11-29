import React from "react";

interface TodoStatItemProps {
  value: number;
  title: string;
}

const TodoStatItem: React.FC<TodoStatItemProps> = ({ value, title }) => {
  return (
    <>
      <h5 className="mb-0">{value}</h5>
      <p>
        <small className="text-muted">{title}</small>
      </p>
    </>
  )
}

export default TodoStatItem