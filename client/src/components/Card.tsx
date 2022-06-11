import React, { useEffect, useState } from "react";

import { BsX, BsFillFileEarmarkExcelFill } from "react-icons/bs";

import "./Card.css";
import { getPublicAPI, PublicAPIData } from "../data";

export type CardProps = {
  id: number;
  handleDeleteCard: (id: number) => void;
};

const Card = (props: CardProps) => {
  const { id, handleDeleteCard } = props;

  const [publicAPIData, setPublicAPIData] = useState<
    PublicAPIData | undefined
  >();
  const [errorMessage, setErrorMessage] = useState<string>("");

  const getData = () =>
    getPublicAPI()
      .then((data: PublicAPIData) => {
        setPublicAPIData(data);
        setErrorMessage("");
      })
      .catch((error: any) => {
        const message = error as string;
        setErrorMessage(message);
      });

  useEffect(() => {
    getData();
  }, []);

  return (
    <div
      className="card"
      onClick={(e: React.MouseEvent<HTMLElement>) => getData()}
    >
      <button
        className="card-delete-button"
        onClick={(e: React.MouseEvent<HTMLElement>) => handleDeleteCard(id)}
      >
        <BsX color="#ee5522" size={20} />
      </button>
      <div className="card-body">
        {errorMessage.length > 0 && (
          <div className="card-error">
            <BsFillFileEarmarkExcelFill color="#ee5522" size={50} />
            <p>{errorMessage}</p>
          </div>
        )}
        <h1 className="card-data-title">
          <a href={publicAPIData?.url}>{publicAPIData?.name}</a>
        </h1>
        <div className="card-data-content">{publicAPIData?.description}</div>
      </div>
    </div>
  );
};

export default Card;
