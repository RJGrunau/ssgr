import React from 'react';
import styled from 'styled-components'

const TextHolder = styled.div`
    width: 55%;
    padding: 15px;
    margin: 15px;
    margin-top: 5px;
    margin-left: 30px;
    text-align: left;
    line-height: 1.45em;

    @media(max-width: 800px){
        width: 100%;
        margin: 5px;
        padding: 3px;
    }
`

const TextDiv = ({children}) => (
    <TextHolder>
        {children}
    </TextHolder>
)
 
export default TextDiv;