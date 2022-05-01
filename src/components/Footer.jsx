import styled from 'styled-components';

export function Footer(){

    const Container=styled.div`
    width: 80%;
    text-align: center;
    margin:0 auto;
    height:auto;
`;
    const Paragraph=styled.p`
    background: rgb(110,0,252);
    background: linear-gradient(93deg, rgba(110,0,252,1) 0%, rgba(184,0,255,1) 50%, rgba(255,0,245,1) 100%);    
    color: transparent;
    -webkit-background-clip: text;  
`;

    return (
    <Container>
        <Paragraph>&copy; John Gualteros 2022</Paragraph>
    </Container>
    );
}