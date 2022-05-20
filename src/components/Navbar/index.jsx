import React, { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { navbar } from '../../utils/navbar';
import { Button } from '../Generic';
import { Body, Container, Hamburger, Link, Links, Logo, Menu, NavbarBody, NavbarWrapper, Space, Span, User, Wrapper } from './style';

export const Navbar = () => {
    const navigate = useNavigate();
    

    const [visible, setVisible] = useState(false);
    const [placement, setPlacement] = useState('left');

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };
  return (
    <Wrapper>
        <Container>
            <NavbarWrapper>
                <Hamburger onClick={showDrawer} />
                <Menu
                    title=""
                    placement={placement}
                    width={350}
                    onClose={onClose}
                    visible={visible}
                    // extra={
                    //     <Space>
                    //         <Button onClick={onClose}>Cancel</Button>
                    //     </Space>
                    // }
                >
                    {
                        navbar.map((item) => (
                            <Links to={item.path} key={item.id} >{item.title}</Links>
                        ))
                    }
                </Menu>


                <Logo onClick={() => navigate('/')}>
                    <Logo.Icon />
                    <Logo.Title>Houzing</Logo.Title>
                </Logo>
                <NavbarBody>
                    {navbar.map(({title, id, path, hidden}) => {
                            return !hidden && (
                                <Link key={id} to={path}>
                                    {title}
                                </Link>
                            )
                        })
                    }
                </NavbarBody>
                <Span>
                    <Button class='loginn' onClick={() => navigate('/signin')} width={'120px'}>Login</Button>
                </Span>
                <User />
            </NavbarWrapper>
        </Container>
        <Body>
            <Outlet />
        </Body>
    </Wrapper>
  )
}

export default Navbar;