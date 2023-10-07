import logo from './logo.svg';
import './App.css';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <nav className='nav_Bar'>
        <ul>
          <li> <a href='#'> <FontAwesomeIcon icon={faUtensils} size='1x'/> 쿠크부크 <br/>Cook Book</a> </li>
          <li> <a href='#'>레시피</a> </li>
          <li> <a href='#'>커뮤니티</a> </li>
          <li> <a href='#'>Search Bar</a> </li>
          <li> <a href='#'>공지사항</a> </li>
          <li className='search_Bar'>
            <input type='text' size='1'></input> 
            <FontAwesomeIcon icon={faMagnifyingGlass} size='1x' className='fa-search'/>
          </li>
        </ul>
      </nav>
      <div className='container'>
        <div className='main-content'>
          <div className='main-today_recipe recipe'>
            <p>오늘의 새 레시피</p>
          </div>
          <div className='main-recommend_recipe recipe'>
            <p>오늘의 추천 레시피</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
