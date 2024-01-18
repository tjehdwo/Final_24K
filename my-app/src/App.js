import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddReservation from './AddReservation';
import Header from './Header';

function App() {
  const [reservations, setReservations] = useState([]);
  const [newReservation, setNewReservation] = useState({
              res_num : '', 
              id : '',
              market : '',
              pay : '',
              pay_date : '',
              payment : '',
              people : '',
              pick : '',
              pick_time : '',
              res_date : '',
              room_type : '',
              unuser_num : '',
              user_num : ''
  });

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

  const handleInputChange = (e) => {
      const {res_num, value} = e.target;
      setNewReservation((prevReservation) => ({...prevReservation, [res_num] : value}));
  };

  const handleAddReservation = async () => {
      try {
          const response = await axios.post(
              'http://localgost:8282/reservation/add',
              newReservation,
              { withCredentials: true }
          );
          setReservations((prevReservations) => [...prevReservations, response.data]);
              setNewReservation({ 
              res_num : '', 
              id : '',
              market : '',
              pay : '',
              pay_date : '',
              payment : '',
              people : '',
              pick : '',
              pick_time : '',
              res_date : '',
              room_type : '',
              unuser_num : '',
              user_num : '' 
              });
      } catch (error) {
          console.log('error:', error);
      }
  };
  return (
   
      <Router>
          <div>
          <Header />
              <h1>예약 리스트</h1>
              <ul>
                  {reservations.map((reservation) => (
                      <li key={reservation.id}>
                          {reservation.res_num} - {reservation.pay}원
                      </li>
                  ))}
                  <li>
                      <Link to="/add">예약 추가</Link>
                  </li>
              </ul>

              <Routes>
                  <Route
                  path="/add"
                  element={<AddReservation onAddReservation={handleAddReservation} />}
                  />
                  <Route path="/list" element={<h2>예약 리스트</h2>} />
              </Routes>
          </div>
      </Router>
  );

}

export default App;