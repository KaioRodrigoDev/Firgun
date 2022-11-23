import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Row, Col, Form, Button, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Forms({ leads }) {
  const navigation = useNavigate()
  const [lead, setLead] = useState('')
  const { handleSubmit } = useForm()
  const [user, setUser] = useState([])

  const handleChangeValue = value => {
    setLead(prevValue => ({
      ...prevValue,
      [value.target.name]: value.target.value
    }))
  }

  async function onSubmit() {
    if (leads) {
      const { data } = await axios.post(
        `http://localhost:3001/update/${leads.id}`,
        lead
      )
      navigation('/dashboard')
    }
    const { data } = await axios.post(`http://localhost:3001/create`, lead)
    if (!user) {
      navigation('/')
    }
    navigation('/dashboard')
  }

  useEffect(() => {
    if (leads) {
      setLead(leads)
      setUser(localStorage.getItem('token'))
    }
  }, [leads])
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Row>
        <Form.Group xs={12} md={5} as={Col} className="mb-3" controlId="nome">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Nome"
            onChange={handleChangeValue}
            name="nome"
            value={lead?.nome}
          />
        </Form.Group>

        <Form.Group
          xs={12}
          md={7}
          as={Col}
          className="mb-3"
          controlId="sobrenome"
        >
          <Form.Label>Sobrenome</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Sobrenome"
            onChange={handleChangeValue}
            name="sobrenome"
            value={lead?.sobrenome}
          />
        </Form.Group>
      </Row>

      <Row>
        <Form.Group
          xs={12}
          md={4}
          as={Col}
          className="mb-3"
          controlId="celular"
        >
          <Form.Label>Celular</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="(00) 0000-0000"
            onChange={handleChangeValue}
            name="celular"
            value={lead?.celular}
          />
        </Form.Group>

        <Form.Group
          xs={12}
          md={4}
          as={Col}
          className="mb-3"
          controlId="telefone"
        >
          <Form.Label>Telefone</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            onChange={handleChangeValue}
            name="telefone"
            value={lead?.telefone}
          />
        </Form.Group>

        <Form.Group xs={12} md={4} as={Col} className="mb-3" controlId="email">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite o e-mail"
            onChange={handleChangeValue}
            name="email"
            value={lead?.email}
          />
        </Form.Group>
      </Row>

      <Row>
        <Form.Group
          xs={12}
          md={5}
          as={Col}
          className="mb-3"
          controlId="dataNascimento"
        >
          <Form.Label>Data de nascimento</Form.Label>
          <Form.Control
            required
            type="date"
            onChange={handleChangeValue}
            name="dataNascimento"
            value={lead?.dataNascimento}
          />
        </Form.Group>

        <Form.Group
          xs={12}
          md={7}
          as={Col}
          className="mb-3"
          controlId="cpfCnpj"
        >
          <Form.Label>CPF ou CNPJ</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="000.000.000-00"
            onChange={handleChangeValue}
            name="cpfCnpj"
            value={lead?.cpfCnpj}
          />
        </Form.Group>
      </Row>

      <Row>
        <Form.Group xs={12} md={7} as={Col} className="mb-3" controlId="rua">
          <Form.Label>Rua</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            onChange={handleChangeValue}
            name="rua"
            value={lead?.rua}
          />
        </Form.Group>

        <Form.Group xs={12} md={5} as={Col} className="mb-3" controlId="bairro">
          <Form.Label>Bairro</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder=""
            onChange={handleChangeValue}
            name="bairro"
            value={lead?.bairro}
          />
        </Form.Group>

        <Form.Group xs={12} md={4} as={Col} className="mb-3" controlId="estado">
          <Form.Label>Estado</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder=""
            onChange={handleChangeValue}
            name="estado"
            value={lead?.estado}
          />
        </Form.Group>

        <Form.Group xs={12} md={4} as={Col} className="mb-3" controlId="cidade">
          <Form.Label>Cidade</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder=""
            onChange={handleChangeValue}
            name="cidade"
            value={lead?.cidade}
          />
        </Form.Group>

        <Form.Group xs={12} md={4} as={Col} className="mb-3" controlId="cep">
          <Form.Label>Cep</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder=""
            onChange={handleChangeValue}
            name="cep"
            value={lead?.cep}
          />
        </Form.Group>
      </Row>

      <Row>
        <Form.Group xs={12} className="mb-3" controlId="conhecimentoFirgun">
          <Form.Label>Como soube da Firgun?</Form.Label>
          <Form.Control
            required
            as="textarea"
            placeholder="Como soube ?"
            onChange={handleChangeValue}
            name="conhecimentoFirgun"
            value={lead?.conhecimentoFirgun}
          />
        </Form.Group>
        <Form.Group as={Col} xs={12} className="mb-3" controlId="motivo">
          <Form.Label>Qual o motivo do Contato?</Form.Label>
          <Form.Control
            required
            as="textarea"
            placeholder="Motivo"
            onChange={handleChangeValue}
            name="motivo"
            value={lead?.motivo}
          />
        </Form.Group>
      </Row>

      <div className="d-flex">
        {leads ? (
          user.cargo == 1 && (
            <Button variant="primary" type="submit">
              Salvar
            </Button>
          )
        ) : (
          <Button variant="primary" type="submit">
            Salvar
          </Button>
        )}
      </div>
    </Form>
  )
}

export default Forms
