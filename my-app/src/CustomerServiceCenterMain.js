import Header from "./Header";
import './CustomerServiceCenterMain.css';
import {Link} from 'react-router-dom'

function CustomerServiceCenterMain () {
    return (
        <div>
             <Header />
             <h1 className="title">고객센터</h1> 
             <div className="search">
                <section className="section0">
                    <div>
                        <label>검색 :  </label>
                        <input type='text' placeholder="검색어를 입력하세요."></input>
                        <button>검색하기</button>
                    </div>
                </section>
             </div>
             <div>
             <section className="section1">
                    <ul className="no-bullet">
                        <li><a href="/">F&Q</a></li><br/>
                        <li><a href="./Question">문의 하기</a></li><br/>
                        <li><a href="/">문의 내역 확인</a></li><br/>
                        <li><a href="/">공지사항</a></li>
                    </ul>
                </section>
             </div>
             <div>
                <section className="section2">
                    <div>
                        <p>Q1.<a href=''> 비밀번호를 까먹었어요.</a></p>
                        <p>Q2.<a href=''> 예약 취소하면 위약금이 있나요?</a></p>
                        <p>Q3.<a href=''> 포인트를 사용하고 싶어요.</a></p>
                        <p>Q4.<a href=''> 할인을 받을수 없나요?</a></p>
                        <p>Q5.<a href=''> 회원탈퇴를 하고 싶습니다.</a></p>
                        <p>Q6.<a href=''> 펜션 사장님과 직접 대화하고 싶어요.</a></p>
                        <p>Q7.<a href=''> 펜션이 현재 운영중인지 알고싶어요.</a></p>
                    </div>
                </section>
              
             </div>
            
        </div>
    )
}
export default CustomerServiceCenterMain;