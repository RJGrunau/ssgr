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
const Inputs = styled.input`
  border-radius: 5px;
  width: 60%;
  margin: 10px;
  padding: 5px;

  &:focus {
    border: solid 2px blue;
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
				<Inputs
          type = "text"
          placeholder = "your name here"
        />
				<Inputs/>
				<textarea/>
        
      </FormShell>
    )
  }
}
