import React from 'react';
import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from '@mui/icons-material';
import styled from 'styled-components';
import { mobile } from '../utils/responsive';
import Typography from '@mui/material/Typography';

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: 'column' })}
  background-color: #222325;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.img`
  width: 100px;
`;

const Desc = styled.p`
  margin: 20px 0px;
  color: #fff;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: 'none' })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
  color: #fff;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  color: #fff;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  color: #fff;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: '#fff8f8' })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  color: #fff;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: '#fff',
            textDecoration: 'none',
          }}
        >
          My Convo
        </Typography>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Services</ListItem>
          <ListItem>Photography</ListItem>
          <ListItem>Events</ListItem>
          <ListItem>Portals</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Contact</ListItem>
          <ListItem>About</ListItem>
          <ListItem>Terms</ListItem>
          <ListItem>Conditions</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: '10px', color: 'white' }} /> 71 Cherry Court SOUTHAMPTON SO53 5PD UK
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: '10px' }} /> +44 797 577 7666
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: '10px' }} /> info@myconvo.co.uk
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
