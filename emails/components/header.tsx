import {
  Row,
  Column,
  Img,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

export const Header = () => (
  <Section style={header}>
    <Row>
      <Column>
        <Img
          src="/static/bquk_logo.jpeg"
          alt="BQUK Logo"
          width={48}
          height={48}
        />
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
  backgroundColor: "#323c41",
  padding: "1rem 2rem",
  color: "#ffffff",
};

const paragraph = {
  margin: "0",
  lineHeight: "1.5",
  fontSize: "16px",
};

const bold = {
  ...paragraph,
  fontWeight: "600",
};
