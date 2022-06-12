import React from 'react'
import {AntCheckbox} from './style'

export const Checkbox = ({
    children,
    height,
    width,
    mr,
    ml,
    mb,
    mt,
    pl,
    onChange,
    placeholder,
    defaultValue,
    value,
    name, 
    size,
}) => {
  return (
    <AntCheckbox
        mr={mr}
        ml={ml}
        mb={mb}
        mt={mt}
        size={'small'}
        onChange={onChange}
    >{children}</AntCheckbox>
  )
}

export default Checkbox