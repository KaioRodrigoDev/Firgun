import React from 'react'

function Card({ nome, link }) {
  return (
    <div className="card mw-4 m-4" style={{ width: 400 }}>
      <a href={`${link}`} className="btn btn-primary">
        {nome}
      </a>
    </div>
  )
}

export default Card
