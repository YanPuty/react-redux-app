import React, { Component } from "react";
import PropTypes from "prop-types"
import styled from "styled-components";
import { Col } from "reactstrap";


const Wrapper = styled.div`
height: 100vh;
background-size: 100%;
background-position: center;
`;

const Footer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  margin-bottom: 0.5rem;
`;


class AuthenticationLayout extends Component {

    render() {
        const { children } = this.props;

        return (
            <Wrapper>
                <Col
                    xl="3"
                    lg="4"
                    md="6"
                    xs="12"
                    className="content-center-screen"
                >
                    {children}
                </Col>
                <Footer>
                    Copyright © 2020
            </Footer>
            </Wrapper>
        )
    }

}

AuthenticationLayout.propTypes = {
    children: PropTypes.any,

};

export default AuthenticationLayout;