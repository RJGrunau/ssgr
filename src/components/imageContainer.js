import React, { Children } from 'react';
import styled from 'styled-components'

const ImageHolder = styled.div`
  width: 100%;
  height: 400px;
`

export default ({children}) => (
    <ImageHolder>
        {children}
    </ImageHolder>
)
