import React, { useEffect, useState } from 'react'
import Form from '../../components/forms'
import './App.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
function Edit() {
  const LeadId = useParams().id
  const [leads, setLeads] = useState([])
  useEffect(() => {
    async function getLeads() {
      const { data } = await axios.get(`http://localhost:3001/read/${LeadId}`)
      setLeads(data)
      console.log(data)
    }

    getLeads()
  }, [LeadId])

  return (
    <div className="App">
      <header className="App-header">
        <p>Cadastre-se aqui</p>
        <Form leads={leads} />
      </header>
    </div>
  )
}

export default Edit
