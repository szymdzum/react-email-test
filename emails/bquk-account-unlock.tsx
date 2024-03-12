import * as React from "react";
import { config } from "./components/config";
import {
  Section,
  Text as DefaultText,
  Heading,
  Link,
  Container,
  Html,
  Head,
  Body,
  Preview,
} from "@react-email/components";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

import TestComp from "./_test/TestComp";

const Text = (props) => {
  const globalStyles = {
    fontSize: "16px",
  };

  return <DefaultText style={{ ...globalStyles, ...props.style }}>{props.children}</DefaultText>
};

const AccountUnlock = () => (
  <Html>
    <Head>
      <title>Account Unlocked</title>
    </Head>
    <Preview>Your account is now unlocked.</Preview>
    
    <Body style={canvas}>
      <Container style={container}>
        <Header />
        <Section style={main}>
          <Heading>Your account is now unlocked</Heading>
          <Text>
            Hello,
          </Text>
          <Text>
            This is confirmation that your B&Q account is now unlocked.
          </Text>
          <Text>
            If you didn't request for it to be unlocked and believe this email is in error,
            please contact our customer services team on 0333 014 3098 666
            or by using our
            <Link href={config.url.contactForm}>{' '}online contact form</Link>.
          </Text>
          <Text>Best regards,</Text>
          <Text>BQUK Customer Services</Text>

          <TestComp />
        </Section>
        <Footer />
        </Container>
      </Body>
  </Html>
);

export default AccountUnlock;

const canvas = {
  backgroundColor: "#E7E5E5",
  fontFamily: config.fonts.primary,
};

const container = {
  backgroundColor: config.colours.light,
  marginInline: "auto",
};

const main = {
  padding: "32px"
};



