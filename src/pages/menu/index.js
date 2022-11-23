import Form from '../../components/forms'
import './App.css'
import { Button } from 'react-bootstrap'
import Card from './components/card'

function Menu() {
  return (
    <div className="App">
      <header className="App-header">
        <Card nome="Cadastro" link="/cadastro" />
        <Card nome="Fazer Login" link="/login" />
      </header>
    </div>
  )
}

export default Menu
