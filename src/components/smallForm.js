import React, { Component } from 'react'
import styled from 'styled-components'

const FormShell = styled.form`
	width: 50%;
	background: rgba(128,128,128,0.3);
	padding: 15px;

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
				<input/>
				<input/>
				<textarea/>
        
      </FormShell>
    )
  }
}
