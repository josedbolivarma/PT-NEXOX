import React from 'react'
import { ListCard } from '../containers/ListCard'
import { useData } from '../hooks/useData'

export const HomePage = () => {
  const { cards } = useData(5);

  return (
    <section className='container my-4'>
      <h2 className='mb-4'>List Cards | User N°5</h2>
      <ListCard cards={ cards } />
    </section>
  )
}
