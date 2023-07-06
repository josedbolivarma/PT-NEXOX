import { useEffect, useState } from "react";
import { data } from "../data/data";

export const useData = (userId) => {
  const [cards, setCards] = useState([]);

  const getCards = (id) => {
      if (id) {
        const newCards = data.filter((item) => item.id == id);
        setCards(newCards[0]);
      } else {
        const newCards = data.filter((item) => item.userId === userId);
        setCards(newCards);
      }
  }

  useEffect(() => {
    getCards();
  }, []);

  return {
    // methods
    getCards,
    // properties
    cards
  }
}