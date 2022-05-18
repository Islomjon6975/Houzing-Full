import React from 'react'
import { Container, Section, Wrapper, Icons } from './style';

export const Choose = () => {
return (
    <Container>
        <Wrapper>
            <div className="title">Why Choose Us?</div>
            <div className="description">Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</div>
            <Section>
                <Section.Item>
                    <Icons.Home />
                    <div className="subtitle">Trusted By Thousands</div>
                    <div className="description center">
                        With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.
                    </div>
                </Section.Item>
                <Section.Item>
                    <Icons.Location />
                    <div className="subtitle">Wide Renge Of Properties</div>
                    <div className="description center">
                        With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.
                    </div>
                </Section.Item>
                <Section.Item>
                    <Icons.Phone />
                    <div className="subtitle">Financing Made Easy</div>
                    <div className="description center">
                        With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.
                    </div>
                </Section.Item>
                <Section.Item>
                    <Icons.Message />
                    <div className="subtitle">See Neighborhoods</div>
                    <div className="description center">
                        With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.
                    </div>
                </Section.Item>
            </Section>
        </Wrapper>
    </Container>
)
};

export default Choose;
