import React, { SetStateAction, Dispatch } from "react";

import { BsX } from "react-icons/bs";

import "./Card.css";

export type CardProps = {
  id: number;
  handleDeleteCard: (id: number) => void;
};

const Card = (props: CardProps) => {
  const { id, handleDeleteCard } = props;

  return (
    <div className="card">
      <button
        className="card-delete-button"
        onClick={(e: React.MouseEvent<HTMLElement>) => handleDeleteCard(id)}
      >
        <BsX color="#ee5522" size={20} />
      </button>
      {id}
    </div>
  );
};

export default Card;
