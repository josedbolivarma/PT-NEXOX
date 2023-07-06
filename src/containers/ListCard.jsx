import React from 'react'
import { Card } from '../components/Card'

export const ListCard = ({ cards }) => {

  const renderCards = () => {
    return (
      cards.map(({userId, title, id, body}) => (
        <Card 
          key={id}
          userId={userId}
          title={title}
          id={id}
          body={body}
        />
      ))
    );
  }

  return (
    <div>
      {
        (!cards) 
        ? <h2>No Cards</h2>
        : renderCards()
      }
    </div>
  )
}
