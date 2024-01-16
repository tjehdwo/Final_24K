import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import EventImg from './img/EventImg1.jpg';
import FormImg from './img/파란집.png';
import React, { useState } from 'react';
import CartImg from './img/장바구니.png';
import Pagination from 'react-js-pagination';
import {
  Button,
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Nav,
} from 'react-bootstrap';
import PenPickLogo from './img/펜픽로고.png';

function Header() {
  return (
    <div>
      <div id='HeaderBannerImg'>
        <div id='HeaderLogin_SignUp_Menu'>
          <a id='HeaderCartListLink' href='/CartList'>
            <img id='HeaderCartImg' src={CartImg} alt='장바구니'></img>
          </a>
          <a id='HeaderLogin' href='/Login'>
            로그인
          </a>
          <a id='HeaderSignUp' href='/SignUp'>
            회원가입
          </a>
        </div>
        {/* 메인페이지 카테고리 */}
        <div id='HeaderBannerLink'>
          <a href='/' id='HeaderMainLink'>
            <img id='HeaderPenPickImg' src={PenPickLogo} alt='펜픽로고'></img>
          </a>
          <a id='HeaderMypageLink' href='/Mypage'>
            마이페이지
          </a>
          <a id='HeaderQnALink' href='/QnA'>
            고객센터
          </a>
          <a id='HeaderEventLink' href='/EventPage'>
            이벤트
          </a>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}

export default Header;
