import Form from '../../components/forms'
import './App.css'
import { Button } from 'react-bootstrap'

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Cadastre-se de Leads</p>
        <Form />
        <a
          className="App-link"
          href={localStorage.getItem('token') === null ? 'login' : 'dashboard'}
          rel="noopener noreferrer"
        >
          Visualizar Cadastros
        </a>
        <div className="d-flex">
          <Button variant="primary" type="submit">
            Salvar
          </Button>
        </div>
      </header>
    </div>
  )
}

export default Home
