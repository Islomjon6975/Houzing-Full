import React, { useRef, useState } from 'react'
import { Button, Input } from '../Generic';
import { Container, Wrapper, Icon, Advanced } from './style'
import { Popover} from 'antd';

export const Settings = () => {
  const cancelRef = useRef();
  // const [state, setState] = useState({
  //   address: ''
  // });

  // const onChange = (e) => {
  //   const { value, name } = e.target;
  //   setState({...state,[name]: value})
  // }


  const content = (
    <Advanced>
      <Advanced.Title>Address</Advanced.Title>
      <Advanced.Section>
        <Input placeholder={'Country'} />
        <Input placeholder={'Region'} />
        <Input placeholder={'City'} />
        <Input placeholder={'Zip Code'} />
      </Advanced.Section>
      <Advanced.Title>Address</Advanced.Title>
      <Advanced.Section>
        <Input placeholder={'Rooms'} />
        <Input placeholder={'Size'} />
        <Input placeholder={'Sort'} />
      </Advanced.Section>
      <Advanced.Title>Address</Advanced.Title>
      <Advanced.Section>
        <Input placeholder={'Min price'} />
        <Input placeholder={'Max price'} />
      </Advanced.Section>
      <Advanced.Section>
        <Button ref={cancelRef}  width={'128px'} type={'secondary'} >Cancel</Button>
        <Button  width={'128px'} type={'primary'} >Submit</Button>
      </Advanced.Section>
    </Advanced>
  );
  return (
    <Container>
      <Wrapper>
        {/* Input */}
        <Input 
          pl={'44px'} 
          type='text' 
          placeholder={'Enter an address, neighborhood, city, or ZIP code'}  
        >
          {<Icon.Home />}
        </Input>
        {/* Settings button */}
        <Popover placement="bottomRight"  content={content} trigger="click" ref={cancelRef}>
          <Button 
            width={'131px'}
            type='secondary'
          >
            <Icon.Settings />Advanced
          </Button> 
        </Popover>
        {/* Search button */}
        <Button 
          width={'180px'}
          type='primary'
        >
          <Icon.Search />Search
        </Button>

      </Wrapper>
    </Container>
  )
}

export default Settings;