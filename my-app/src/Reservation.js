import { Container } from 'react-bootstrap';
import './css/Reservation.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CoverImage from './img/펜션1.jpg';
import KakaoImage from './img/kakao.png';
import backSpaceImage from './img/뒤로가기.jpg';

function Reservation () {
    const [reservations, setReservations] = useState([]);
   

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8282/reservation/list');
                setReservations(response.data);
            } catch (error) {
                console.log('데이터를 불러오지 못했습니다.', error)
            }
        };
        fetchData();
    }, []);

    // 결제 페이지 이동
    function payFunction(){
        window.location.href="/payment";
    }

    // 펜션 목록으로 돌아가기
    function comebackFunction(){
        window.location.href="/";
    }

    // 고객 센터로 가기
    function serviceCenterFunction(){
        window.location.href="/"
    }

    // 카카오톡 상담
    function kakaoQuestionFuction(){
        window.location.href="/"
    }


    return(
        <div className='reservationDiv'>
            <button className='comebackButton' onClick={comebackFunction}><img src={backSpaceImage} className="backSpaceImage" alt='돌아가기'></img>돌아가기</button>
            <br />
            <h1>예약 및 결제</h1>
                <section className='reservationSection1'>
                    <form>
                    <label>예약자 이름</label><tr />
                    <input type="text" placeholder="홍길동"></input> <br />
                    <label>전화번호</label><tr />
                    <input type="text" placeholder="010-1234-5678"></input>
                    <button type="submit" id="checkButton">예약 확인</button>
                    </form>
                </section>
                <section className='reservationSection2'>
                    <div className="reservationCoverImage">
                        <img src={CoverImage} className='CoverImage' alt="커버이미지"></img>
                    </div>
                    <br />
                    
                    <ul>
                    {reservations.map((reservation) => (
                        <li key={reservation.id}>
                            <p>예약 금액 : {reservation.pay}원</p>
                        </li>
                    ))}
                </ul>
             
                
                </section>
                 
                     
                <section className='reservationSection3'>
                <h1>결제 수단</h1>
                    <br />
                    <br />
                        <div className='buttonBox'>
                            <button id="payButton" onClick={payFunction}>신용카드</button>
                            <button id="payButton" onClick={payFunction}>카카오 페이</button>
                            <button id="payButton" onClick={payFunction}>네이버 페이</button> <tr /> <br />
                            <button id="payButton" onClick={payFunction}>KB 페이</button>
                            <button id="payButton" onClick={payFunction}>페이코</button>
                            <button id="payButton" onClick={payFunction}>휴대폰 결제</button> <br /><br />
                        </div>
                        <div className='checkBox'>
                            <input type="checkbox"></input> <span>이 결제수단을 다음에도 사용</span><br /> <button type="submit" id="reservationButton">예약하기</button>
                        </div>
                </section>
                <section className='reservationSection4'>
                    <button id="serviceCenterButton" onClick={serviceCenterFunction}>고객센터</button>
                    <br />
                    <button id="kakaoQuestionButton" onClick={kakaoQuestionFuction}><img src={KakaoImage} id="kakao" alt='카카오 상담'></img>카카오톡 상담</button>
                </section>
        </div>
    )
}

export default Reservation;