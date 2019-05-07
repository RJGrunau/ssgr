import React, { Component } from 'react'
import styled from 'styled-components'

const FormShell = styled.form`
	width: 40%;
	background: rgba(128,128,128,.5);
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

//TODO: lighten border on focus and use rgba code!
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
  width: 70%;
  margin: 10px; 
  border-radius: 5px;
  padding: 5px;
  resize: none;

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
  border: solid 2px rgba(50,205,50,1);
  background: rgba(50,205,50,0.8);
  font-family: 'Open Sans';
  font-weigth: 100;

  &:hover{

  }
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
          row ="10"
          cols = "60"
          name = "message"
          id = "message"
          type = "text"
          placeholder = "your message here"
        />
        <ButtonHolder>
          <SubmitButton
            
          >
            Submit
          </SubmitButton>
        </ButtonHolder>
      </FormShell>
    )
  }
}
