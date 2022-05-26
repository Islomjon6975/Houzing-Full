import React, { forwardRef } from 'react'
import { Container, Icon, Wrapper } from './style'

export const Input = forwardRef(
  ({
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
  }, ref)=>{
  return (
    <Wrapper mr={mr} ml={ml} mb={mb} mt={mt}>
        <Icon>{children}</Icon>
        <Container 
            ref={ref}
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
)

export default Input
