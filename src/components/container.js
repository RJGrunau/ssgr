import React from 'react';
import styled from 'styled-components'


const Containers = styled.div`
  width: 100%;
  height: 700px;
  background: linear-gradient(rgba(21,21,21,1),
  rgba(21,21,21,0.3));
  color: white;
`
export default ({children}) => {
    
    <Containers>
        {children}
    </Containers>
}