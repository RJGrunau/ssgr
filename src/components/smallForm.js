import React, { Component } from 'react'
import styled from 'styled-components'

const FormShell = styled.form`
  width: 40%;
  max-height: 450px;
	background: rgba(128,128,128,.5);
  padding: 15px;
  border-radius: 5px;
  display: flex;
  flex-flow: wrap column;

  @media(max-width: 800px){
    width: 100%;
    height: 450px;
  }
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
  height: 30%;
  margin: 10px; 
  border-radius: 5px;
  padding: 5px;
  resize: none;

  &:focus{
    border: solid 2px blue;
  }

  @media(max-width: 800px) {
    width: 90%;         
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
  color: #f3f3f3;
  &:hover{

  }

  @media(max-width: 800px) {
    width: 40%;
  }
`

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

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
    
    handleSubmit = e => {
      //use fetch api to make a post request
      fetch("/", {
        method: "POST",
        //set the heades to this line below
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
        //pass the form name and state in the body
        body: encode({ "form-name": "contact", ...this.state })
      })
      .then(() => alert("Success!"))
      .catch(error => alert(error))

      e.preventDefault();
    }
    //Handle form changes 
    handleChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    const {name, email, message} = this.state
    return (
      <FormShell 
        onSubmit={this.handleSubmit}
        data-netlify="true"
        name="contact"
        method="post"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact"/>
        <Labels htmlFor="name">name:</Labels>
				<Inputs
          name = "name"
          id = "name"
          type = "text"
          placeholder = "your name here"
          value = {name}
          onChange={this.handleChange}
        />
        <Labels htmlFor="email">email:</Labels>
				<Inputs
          name = "email"
          id = "email"
          type = "email"
          placeholder = "you@youremail.com"
          value = {email}
          onChange={this.handleChange}

        />
        <Labels htmlFor="message">message:</Labels>
				<TextField
          // row ="10"
          // cols = "60"
          name = "message"
          id = "message"
          type = "text"
          placeholder = "your message here"
          value = {message}
          onChange={this.handleChange}
        />
        <ButtonHolder>
          <SubmitButton
            type = "submit"
          >
            Send
          </SubmitButton>
        </ButtonHolder>
      </FormShell>
    )
  }
}
