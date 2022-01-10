
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import logo from './images/logo.svg';
import me from './images/me.png';
import instagram from './images/Instagram.svg';
import mobile from './images/mobile.svg';
import email from './images/email.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header-top">
        <h1><img src={ logo } alt="로고" /></h1>
        <h2 className="yongjin">YONGJIN's GALLERY</h2>
        <div className="menuButton"><a href="#"><FontAwesomeIcon icon={faBars}></FontAwesomeIcon></a></div>
      </header>

      <div className="main">
        <div className="left">
          <div className="thum"></div>
          <div className="profile">
            <p>주용진</p><br />
            <p>1996.12.25</p>
            <p>경기도 화성시</p>
            <p>순천향대학교 경영학과 학사 졸업</p>
            <p>웹디자인/웹퍼블리셔 UIUX 양성과정 수료</p>
          </div>
          <div className="sns">
            <ul>
              <li><a href="#"><img src={ instagram } alt="인스타그램" /></a></li>
              <li><a href="#"><img src={ mobile } alt="연락처" /></a></li>
              <li><a href="#"><img src={ email } alt="이메일" /></a></li>
            </ul>
          </div>
        </div>
        
        <div className="right">
          <div className="search">
            <div className="searchBox">
              <input type="text" placeholder="검색할 내용을 입력하세요" />
            </div>
            <div className="searchButton"><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></div>
          </div>
          <div className="contents">

            <div className="contentBox">
              <a href="#"><div className="imgBox"></div></a>
            </div>
            <div className="contentBox">
              <a href="#"><div className="imgBox"></div></a>
            </div>
            <div className="contentBox">
              <a href="#"><div className="imgBox"></div></a>
            </div>
            <div className="contentBox">
              <a href="#"><div className="imgBox"></div></a>
            </div>
            <div className="contentBox">
              <a href="#"><div className="imgBox"></div></a>
            </div>
            <div className="contentBox">
              <a href="#"><div className="imgBox"></div></a>
            </div>
            <div className="contentBox">
              <a href="#"><div className="imgBox"></div></a>
            </div>
            <div className="contentBox">
              <a href="#"><div className="imgBox"></div></a>
            </div>
            <div className="contentBox">
              <a href="#"><div className="imgBox"></div></a>
            </div>
            
            
          </div>
          <footer>
            <p>COPYRIGHT &copy; YONGJIN JU 2022. All Right Reserved.</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
