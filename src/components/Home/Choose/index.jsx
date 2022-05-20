import React from 'react'
import { Container, Section, Wrapper, Icons } from './style';

export const Choose = () => {
return (
    <Container>
        <Wrapper>
            <div className="title nocopy">Why Choose Us?</div>
            <div className="description nocopy">Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</div>
            <Section>
                <Section.Item>
                    <Icons.Home />
                    <div className="subtitle nocopy">Trusted By Thousands</div>
                    <div className="description center nocopy">
                        With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.
                    </div>
                </Section.Item>
                <Section.Item>
                    <Icons.Location />
                    <div className="subtitle nocopy">Wide Renge Of Properties</div>
                    <div className="description center nocopy">
                        With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.
                    </div>
                </Section.Item>
                <Section.Item>
                    <Icons.Phone />
                    <div className="subtitle nocopy">Financing Made Easy</div>
                    <div className="description center nocopy">
                        With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.
                    </div>
                </Section.Item>
                <Section.Item>
                    <Icons.Message />
                    <div className="subtitle nocopy">See Neighborhoods</div>
                    <div className="description center nocopy">
                        With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.
                    </div>
                </Section.Item>
            </Section>
        </Wrapper>
    </Container>
)
};

export default Choose;
