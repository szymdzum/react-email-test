import React from "react";
import { config } from "./config";
import { Row, Column, Img, Section, Text, Link } from "@react-email/components";

export const Header = () => (
  <Section className="header" style={header}>
    <Row>
      <Column>
      <Link href={config.logo.href} target="_blank">
        <Img src={config.logo.url} alt="B&Q" height={48} width={48} />
      </Link>
      </Column>
      <Column align="right">
        <Text style={paragraph}>Customer services</Text>
        <Text style={bold}>0333 014 3098</Text>
      </Column>
    </Row>
  </Section>
);

export default Header;

const header = {
  backgroundColor: config.colours.dark,
  color: config.colours.light,
  padding: "16px 32px",
};

const paragraph = {
  margin: "0",
  lineHeight: "1.5",
  fontSize: "1rem",
};

const bold = {
  ...paragraph,
  fontWeight: "600",
};
