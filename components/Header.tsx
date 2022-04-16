import React, { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import palette from '../styles/palette';
import useModal from '../hooks/useModal';
import SignUpModal from './auth/SignUpModal';

const Header: React.FC = () => {
  const [modalOpened, setModalOpened] = useState(false);
  const { openModal, ModalPortal } = useModal();
  return (
    <Container>
      <Link href="/">
        <a className="header-logo-wrapper">
          <span>로고1</span>
          <span>로고2</span>
        </a>
      </Link>
      <div className="header-auth-buttons">
        <button
          type="button"
          className="header-sign-up-button"
          onClick={openModal}
        >
          회원가입
        </button>
        <button type="button" className="header-login-button">
          로그인
        </button>
      </div>
      {modalOpened && (
        <ModalPortal>
          <SignUpModal />
        </ModalPortal>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 80px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 12px;
  z-index: 10;

  .header-logo-wrapper {
    display: flex;
    align-items: center;

    .header-logo {
      margin-left: 6px;
    }
  }

  /* 헤더 로그인 회원가입 버튼 */
  .header-auth-buttons {
    /* 회원가입 */
    .header-sign-up-button {
      height: 42px;
      margin-right: 8px;
      padding: 0 16px;
      border: 0;
      border-radius: 21px;
      background-color: white;
      cursor: pointer;
      outline: none;
      &:hover {
        background-color: ${palette.gray_f7};
      }
    }

    /* 로그인 */
    .header-login-button {
      height: 42px;
      padding: 0 16px;
      border: 0;
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18);
      border-radius: 21px;
      background-color: white;
      cursor: pointer;
      outline: none;
      &:hover {
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12);
      }
    }

    //modal
    .modal-wrapper {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: fixed;
      top: 0;
      left: 0;

      .modal-background {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.75);
        z-index: 10;
      }

      .modal-contents {
        width: 400px;
        height: 400px;
        background-color: white;
        z-index: 11;
      }
    }
  }
`;

export default Header;
