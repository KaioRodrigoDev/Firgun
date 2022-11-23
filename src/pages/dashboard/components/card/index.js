import React from 'react'
import './style.css'
import axios from 'axios'

function Card({ item }) {
  async function handleDelete() {
    const { data } = await axios.post(
      `http://localhost:3001/delete/${item?.id}`
    )
    window.location.reload(false)
  }

  return (
    <div className="card mw-4 m-4" style={{ width: 400 }}>
      <div className="card-body">
        <h5 className="card-title">
          {item?.nome} {item?.sobrenome}
        </h5>
        <p className="card-text">Email: {item?.email}</p>
        <p className="card-text">CPF: {item?.cpfCnpj}</p>
        <a href={`/dashboard/${item?.id}`} className="btn btn-primary">
          Editar
        </a>
        <a onClick={handleDelete} className="m-2 btn btn-danger">
          Excluir
        </a>
      </div>
    </div>
  )
}

export default Card
