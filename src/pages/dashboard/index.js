import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/card'
function Dashboard() {
  const [data, setData] = useState([])
  useEffect(() => {
    async function getLeads() {
      const { data } = await axios.get('http://localhost:3001/read')
      setData(data)
    }

    getLeads()
  }, [])
  return (
    <div className="d-flex flex-column align-items-center">
      {data && data.map(item => <Card item={item} key={item.id} />)}
    </div>
  )
}

export default Dashboard
