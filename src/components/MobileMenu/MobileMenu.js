/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { QUERIES } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    // <DialogOverlay isOpen={isOpen} onDismiss={onDismiss}>
    //   <DialogContent>
    <Wrapper>
      <UnstyledButton onClick={onDismiss}><Icon id="close" /></UnstyledButton>
      <Nav>
        <a href="/sale">Sale</a>
        <a href="/new">New&nbsp;Releases</a>
        <a href="/men">Men</a>
        <a href="/women">Women</a>
        <a href="/kids">Kids</a>
        <a href="/collections">Collections</a>
      </Nav>
      <Footer>
        <a href="/terms">Terms and Conditions</a>
        <a href="/privacy">Privacy Policy</a>
        <a href="/contact">Contact Us</a>
      </Footer>
    </Wrapper>
    // </DialogContent>
    // </DialogOverlay>

  );
};

const Wrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  position: absolute;
  right: 0;
  z-index: 100;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
`;

export default MobileMenu;
