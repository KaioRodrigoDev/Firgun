import React, { useState } from 'react'
import { Row, Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function LoginForm() {
  const navigation = useNavigate()
  const [login, setLogin] = useState('')
  const [senha, setSenha] = useState('')

  async function handleSubmit(event) {
    try {
      event.preventDefault()
      const { data } = await axios.post('http://localhost:3001/login', {
        login: login?.target?.value,
        senha: senha?.target?.value
      })
      localStorage.setItem('token', JSON.stringify(data))
      navigation('/dashboard')
      console.log(data)
    } catch (err) {
      console.log('error', err)
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Form.Group xs={12} md={5} className="mb-3" controlId="login">
          <Form.Label>Login</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Login"
            onChange={setLogin}
            name="login"
            value={login.value}
          />
        </Form.Group>

        <Form.Group xs={12} md={5} className="mb-3" controlId="senha">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Sobrenome"
            onChange={setSenha}
            name="senha"
            value={senha.value}
          />
        </Form.Group>
      </Row>
      <div className="w-full">
        <Button variant="primary" type="submit">
          Salvar
        </Button>
      </div>
    </Form>
  )
}

export default LoginForm
