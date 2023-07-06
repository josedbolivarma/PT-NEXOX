import React from 'react';
import { Link } from 'react-router-dom';

export const Card = ({ userId, id, title, body, isDetail=false }) => {
  return (
    <div className="card">
  <div className="card-header">
    <h2 className='card-title'>{id}</h2>
  </div>
  <div className="card-body">
    <h3 className="card-title">User N°{ userId }</h3>
    <h5 className="card-title">{ title }</h5>
    <p className="card-text">{ body }</p>
    {
      !isDetail && (
        <Link to={`/${id}`} className="btn btn-primary">
          Go somewhere
        </Link>
      )
    }
  </div>
</div>
  )
}
