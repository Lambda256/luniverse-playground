import React from 'react'
import { Container } from './styled'

const MainContainer: React.FC<{children: JSX.Element}> = ({children}) => {
  return (
    <Container>
      {/* Children components will be loacted here */}
      {children}
    </Container>
  )
}

export default MainContainer