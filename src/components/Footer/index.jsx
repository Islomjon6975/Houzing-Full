import React from 'react'
import { Bottom, BottomDesctiption, Container, Description, Icons, Logo, LogoTitle, Section, Socials, Title, Top, Wrapper } from './style';


export const Footer = () => {
  return (
    <Container>
        <Wrapper>
            <Wrapper.Column>
                <Title>Contact Us</Title>
                <Section>
                    <Icons.Location />
                    <Description>329 Queensberry Street, North Melbourne VIC 3051, Australia.</Description>
                </Section>
                <Section>
                    <Icons.Call />
                    <Description>123 456 7890.</Description>
                </Section>
                <Section>
                    <Icons.Email />
                    <Description>support@houzing.com.</Description>
                </Section>
                <Socials>
                    <Icons.Wrapper>
                        < Icons.Facebook />
                    </Icons.Wrapper>
                    <Icons.Wrapper>
                        < Icons.Twitter />
                    </Icons.Wrapper>
                    <Icons.Wrapper>
                        < Icons.Instagram />
                    </Icons.Wrapper>
                    <Icons.Wrapper>
                        < Icons.Linkedin />
                    </Icons.Wrapper>
                </Socials>
            </Wrapper.Column>
            <Wrapper.Column>
                <Title>Discover</Title>
                <Section>
                    <Description>Chicago</Description>
                </Section>
                
                <Section>
                    <Description>Los Angeles</Description>
                </Section>
                
                <Section>
                    <Description>Miami</Description>
                </Section>
                
                <Section>
                    <Description>New York</Description>
                </Section>
            </Wrapper.Column>
            <Wrapper.Column>
                <Title>Lists by Category</Title>
                <Section>
                    <Description>Apartments</Description>
                </Section>
                <Section>
                    <Description>Condos</Description>
                </Section>
                <Section>
                    <Description>Houses</Description>
                </Section>
                <Section>
                    <Description>Offices</Description>
                </Section>
                <Section>
                    <Description>Retail</Description>
                </Section>
                <Section>
                    <Description>Villas</Description>
                </Section>
            </Wrapper.Column>
            <Wrapper.Column>
                <Title>Lists by Category</Title>
                <Section>
                    <Description>About Us</Description>
                </Section>
                <Section>
                    <Description>Terms & Conditions</Description>
                </Section>
                <Section>
                    <Description>Support Center</Description>
                </Section>
                <Section>
                    <Description>Contact Us</Description>
                </Section>
            </Wrapper.Column>
        </Wrapper>
        <Bottom>
            <Bottom.Container>
                <Bottom.Wrapper>
                    <Logo />
                    <LogoTitle>Houzing</LogoTitle>
                </Bottom.Wrapper>
                <BottomDesctiption>Copyright © {new Date().getFullYear()} CreativeLayers. All Right Reserved.</BottomDesctiption>
                <Top ><Top.Icon /></Top>
            </Bottom.Container>
        </Bottom>
    </Container>
  )
}

export default Footer;