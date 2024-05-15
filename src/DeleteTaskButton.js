import React from "react";

const DeleteTaskButton = ({ onClick }) => {
  return <button className="delete-button" onClick={onClick}>Delete</button>;
};

export default DeleteTaskButton;
