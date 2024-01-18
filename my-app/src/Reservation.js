import { Container } from 'react-bootstrap';
import './css/Reservation.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

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

    function payFunction(){
        window.location.href="/payment";
    }

    function comebackFunction(){
        window.location.href="/Reservation";
    }


    return(
        <div>
            <a href="/"><button className='comebackButton' onClick={comebackFunction}>돌아가기</button></a>
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
                    <container>
                        <img src="./img/파란집.png" className='image'></img>
                    </container>
                    <br />
                    
                    <ul>
                    {reservations.map((reservation) => (
                        <li key={reservation.id}>
                            <p>예약 금액 : {reservation.pay}원</p>
                            <p>예약 날짜 : {reservation.res_date}일</p>
                        </li>
                    ))}
                    <li>
                        
                    </li>
                </ul>
             
                
                </section>
                 
                     <h1>결제 수단</h1>
                <section className='reservationSection3'>
                    <br />
                    <br />
                        <button id="payButton" onClick={payFunction}>신용카드</button>
                        <button id="payButton" onClick={payFunction}>카카오 페이</button>
                        <button id="payButton" onClick={payFunction}>네이버 페이</button> <tr /> <br />
                        <button id="payButton" onClick={payFunction}>KB 페이</button>
                        <button id="payButton" onClick={payFunction}>페이코</button>
                        <button id="payButton" onClick={payFunction}>휴대폰 결제</button> <br /><br />
                        <input type="checkbox"></input> <p>이 결제수단을 다음에도 사용</p> 
                </section>
        </div>
    )
}

export default Reservation;