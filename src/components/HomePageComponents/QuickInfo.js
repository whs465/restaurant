import React, { Component } from 'react'
import { Section, Title, SectionButton } from '../../utils'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { styles } from '../../utils'
export default class QuickInfo extends Component {
  render() {
    return (
      <Section>
        <Title message="let us tell you" title="our mission" />
        <QuickInfoWrapper>
          <p className="text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
            nulla omnis quos ab minima quia cumque, ad dolores iure expedita
            accusamus reprehenderit ea libero similique consectetur itaque ut
            sit quam! Accusamus veniam fugiat accusantium! Saepe, ipsam
            pariatur! Quo laboriosam tempore assumenda et quod id tenetur eius,
            voluptate quos. Distinctio, odit?
          </p>
          <Link to="/about/" style={{ textDecoration: 'none' }}>
            <SectionButton style={{ margin: '2rem auto' }}>about</SectionButton>
          </Link>
        </QuickInfoWrapper>
      </Section>
    )
  }
}

const QuickInfoWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  .text {
    line-height: 2rem;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.2rem;
  }
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 60%;
  }
`
