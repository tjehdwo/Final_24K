import Header from './Header';
import './css/Question.css';

function Question () {
    return(
        <div className="question">
            <Header />
            <h1>문의하기</h1>
            <div className='questionContent'>
                <form method="post">
                <label>제목 : </label>
                <input type="text" placeholder="제목을 입력하세요." className="inputTitle"></input> <br />
                <label>내용 : </label>
                <input type="text" className="inputContent"></input> 
                </form>
                <button type="submit" id="createButton">작성하기</button>
                <a href='/'><button id="combackButton">돌아가기</button></a>
            </div>
        </div>
    )
}
export default Question;