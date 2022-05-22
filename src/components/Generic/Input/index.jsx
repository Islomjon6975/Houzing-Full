import React, { useState } from 'react'
import { Container, Icon, Wrapper } from './style'

export const Input = ({
    children, 
    onChange,
    placeholder,
    height,
    width,
    type,
    value,
    mr,
    ml,
    mb,
    mt,
    pr,
    pl,
    pt,
    pb,
    name,
    defaultValue,
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
            value={value}
            name={name}
            defaultValue={defaultValue}
        />    
    </Wrapper>
  )
}

export default Input
