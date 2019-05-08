import React from 'react';
import styled from 'styled-components'

const TextHolder = styled.div`
    width: 55%;
    padding: 15px;
    margin: 15px;
    margin-top: 5px;
    margin-left: 30px;
    text-align: left;

    @media(max-width: 800px){
        width: 100%;
        margin: 5px;
        padding: 3px;
    }
`

const TextDiv = ({childern}) => (
    <TextHolder>
        {childern}
    </TextHolder>
)
 
export default TextDiv;