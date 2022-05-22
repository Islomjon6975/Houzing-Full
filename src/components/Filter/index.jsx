import React from 'react'
import { Button, Input } from '../Generic';
import { Container, Wrapper, Icon, Advanced } from './style'
import { Popover} from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import useSearch from '../../hooks/useSearch';
import UseReplace from '../../hooks/useReplace';

export const Settings = () => {
  const navigate = useNavigate();
  const {pathname} = useLocation();
  const query = useSearch();

  const onChange = e => {
    const { value, name } = e.target;
    // navigate(`${pathname}?${name}=${value}`);
    navigate(`${UseReplace(name, value)}`);
  };

  const content = (
    <Advanced>
      <Advanced.Title>Address</Advanced.Title>
      <Advanced.Section>
        <Input placeholder={'Country'} defaultValue={query.get('country')} onChange={onChange} name='country' />
        <Input placeholder={'Region'} defaultValue={query.get('region')} onChange={onChange} name='region' />
        <Input placeholder={'City'} defaultValue={query.get('city')} onChange={onChange} name='city'  />
        <Input placeholder={'Zip Code'} defaultValue={query.get('zip_code')} onChange={onChange} name='zip_code' />
      </Advanced.Section>
      <Advanced.Title>Address</Advanced.Title>
      <Advanced.Section>
        <Input placeholder={'Room'} defaultValue={query.get('room')} onChange={onChange} name='room' />
        <Input placeholder={'Size'} defaultValue={query.get('size')} onChange={onChange} name='size' />
        <Input placeholder={'Sort'} defaultValue={query.get('size')} onChange={onChange} name='size' />
      </Advanced.Section>
      <Advanced.Title>Address</Advanced.Title>
      <Advanced.Section>
        <Input placeholder={'Min price'} defaultValue={query.get('min_price')} onChange={onChange} name='min_price' />
        <Input placeholder={'Max price'} defaultValue={query.get('max_price')} onChange={onChange} name='max_price' />
      </Advanced.Section>
      <Advanced.Section>
        <Button  width={'128px'} type={'secondary'} >Cancel</Button>
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
        <Popover placement="bottomRight"  content={content} trigger="click" >
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