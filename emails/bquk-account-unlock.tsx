import * as React from "react";
import {
  Html,
  Body,
  Container,
  Head,
  Row,
  Column,
  Preview,
  Section,
  Text,
  Heading
} from "@react-email/components";
import { Header } from "./components/header";

export const Footer = () => (
  <Section style={footer}>
    <Container>
      <Row>
        <Column>
          <Text>
            This email was sent to you by BQUK. To ensure you receive our emails,
            please add us to your address book.
          </Text>
        </Column>
      </Row>
    </Container>
  </Section>
);

export const Layout = ({ children }) => (
  <Html>
    <Head />
    <Preview>Your account is now unlocked</Preview>
    <Body style={main}>
      <Container style={container}>
        <Header />
        {children}
        <Footer />
      </Container>
    </Body>
  </Html>
);

const AccountUnlock = () => (
  <Layout>
    <Section style={body}>
      <Heading>Your account is now unlocked</Heading>
      <Text>
        We’re happy to let you know that your account is now unlocked and you
        can access your account again.
      </Text>
      <Text>
        If you have any questions or need help, please don’t hesitate to
        contact us.
      </Text>
      <Text>Best regards,</Text>
      <Text>BQUK Customer Services</Text>
    </Section>
  </Layout>
);



export default AccountUnlock;

const main = {
  backgroundColor: "#E7E5E5",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
};

const body = {
  padding: "2rem",
};

const footer = {
  padding: "1rem 2rem",
  backgroundColor: "#323c41",
  color: "#ffffff",
  fontSize: "12px",
};