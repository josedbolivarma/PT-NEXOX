import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Card } from '../components/Card';
import { useData } from '../hooks/useData';
import { data } from '../data/data';

export const DetailPage = () => {
  const { id } = useParams();
  const { cards, getCards } = useData(5);

  useEffect(() => {
    getCards(id);
  }, [id]);

  const renderCard = () => {
    return (
<>
          <h2 className='mb-4'>Details Card N° { cards.id }</h2>

          <Card 
            userId={cards.userId}
            id={cards.id}
            title={cards.title}
            body={cards.body}
            isDetail={true}
          />
          </>
    );
  }
  
  return (
    <section className='container my-4'>
      {
        (!cards)
        ? <h2>No Cards!</h2>
        : renderCard()
      }
    </section>
  )
}
