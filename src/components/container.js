import React from 'react';
import styled from 'styled-components'


const Containers = styled.div`
  width: 100%;
  height: 700px;
  margin-top: 100px;
  margin-bottom: 100px;
  background: linear-gradient(rgba(21,21,21,0.3),
  rgba(21,21,21,0.1));
  color: white;
  display: flex;
  flex-flow: wrap row;
`
export default ({children}) => (

    <Containers>
        {children}
    </Containers>
)
    
