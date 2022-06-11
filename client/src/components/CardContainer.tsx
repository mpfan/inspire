import React, { useState } from "react";
import { BsPlusLg } from "react-icons/bs";

import Card from "./Card";

import "./CardContainer.css";

const CardContainer = () => {
  const [cards, setCards] = useState<number[]>([]);
  const [freeIds, setFreeIds] = useState<number[]>([1, 2, 3, 4, 5]);

  const handleDeleteCard = (id: number): void => {
    setCards(cards.filter((cardId: number) => cardId !== id));
    setFreeIds([...freeIds, id]);
  };

  return (
    <div className="card-container">
      {cards?.map((id: number) => (
        <Card key={id} id={id} handleDeleteCard={handleDeleteCard} />
      ))}
      {cards.length < 5 && (
        <button
          className="card-container-plus-button"
          onClick={(e: React.MouseEvent<HTMLElement>) => {
            e.currentTarget.blur();

            const id = freeIds[0];
            setFreeIds(freeIds.filter((_: number, i: number) => i !== 0));

            setCards([...cards, id]);
          }}
        >
          <BsPlusLg size={70} color="white" />
        </button>
      )}
    </div>
  );
};

export default CardContainer;
