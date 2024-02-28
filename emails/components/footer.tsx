import React from 'react';
import { config } from './config';
import { Row, Column, Section, Text, Link } from '@react-email/components';
import useCurrentYear from '../hooks/useCurrentYear';

export const Footer = () => {
  const currentYear = useCurrentYear();

  return (
    <Section style={footer}>
      <Row>
        <Column>
          <Text>
            © B&Q {currentYear}
          </Text>
        </Column>
        <Column align='right'>
          <Text>
            <Link href={config.url.terms}>
              Terms & conditions
            </Link>
            {' '}|{' '}
            <Link href={config.url.faqs}>
              FAQs
            </Link>
          </Text>
        </Column>
      </Row>
      <Text style={center}>
        B&Q Limited, B&Q House, Chestnut Avenue, Chandler's Ford, Eastleigh, SO53 3LE Registered in England no. 973387. VAT number: 232555575
      </Text>
    </Section>
  );
}

export default Footer;

const footer = {
  fontSize: "12px",
  padding: "16px 32px",
  backgroundColor: config.colours.dark,
  color: config.colours.light,
};

const center = {
  textAlign: "center"
} as const;
