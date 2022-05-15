import React, { useState } from 'react'
import { Container, Icon, Wrapper } from './style'

export const Input = ({
    children, 
    onChange,
    placeholder,
    height,
    width,
    type,
    mr,
    ml,
    mb,
    mt,
    pr,
    pl,
    pt,
    pb,
}) => {
  return (
    <Wrapper mr={mr} ml={ml} mb={mb} mt={mt}>
        <Icon>{children}</Icon>
        <Container 
            onChange={onChange}
            placeholder={placeholder}
            type={type} 
            width={width}
            height={height}
            pl={pl}
        />    
    </Wrapper>
  )
}

export default Input
