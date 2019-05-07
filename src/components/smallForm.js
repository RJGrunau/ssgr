import React, { Component } from 'react'
import styled from 'styled-components'

const FormShell = styled.form`
	width: 50%;
	background: rgba(128,128,128,0.3);
  padding: 15px;
  border-radius: 5px;
  display: flex;
  flex-flow: wrap column;
`
const Labels = styled.label`
  margin: 5px;
  margin-left: 10px;
  font-family: Roboto;
  color: rgba(27,27,27,0.9);
`

const Inputs = styled.input`
  border-radius: 5px;
  width: 60%;
  margin: 10px;
  padding: 5px;

  &:focus {
    border: solid 2px blue;
  }
`

const TextField = styled.textarea`
  margin: 10px; 
  border-radius: 5px;
  padding: 5px;

  &:focus{
    border: solid 2px blue;
  }
`
const ButtonHolder = styled.div`
  width: 100%;
  margin: 10px;
`
const SubmitButton = styled.button`
  width: 20%;
  padding: 2px 4px;
  border-radius: 5px;
  background: rgba(50,205,50,0.9);
  font-family: 'Open Sans';
  font-weigth: 100;

`


export default class SmallContact extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        isValid: false,
        name: '',
        email: '',
        message: ''
      }
    }
    
  render() {
    return (
      <FormShell>
        <Labels htmlFor="name">name:</Labels>
				<Inputs
          name = "name"
          id = "name"
          type = "text"
          placeholder = "your name here"
        />
        <Labels htmlFor="email">email:</Labels>
				<Inputs
          name = "email"
          id = "email"
          type = "email"
          placeholder = "you@youremail.com"
        />
        <Labels htmlFor="message">message:</Labels>
				<TextField
          name = "message"
          id = "message"
          type = "text"
          placeholder = "your message here"
        />
        <ButtonHolder>
          <SubmitButton>
            Submit
          </SubmitButton>
        </ButtonHolder>
      </FormShell>
    )
  }
}
