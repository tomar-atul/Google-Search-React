import './main.css';
import { TbSearch } from 'react-icons/tb';
import { FiCamera } from 'react-icons/fi';
import { IoMdMic } from 'react-icons/io';
import { useState } from 'react';

const Main = () => {
const [value,setValue] = useState("")
  const handleInput = (event)=>{
    setValue(event.target.value)
    console.log(event.target.value)
  }
  const handleSearch = (e) => {
    if (e.key === 'Enter'){
      window.location.href=`${'https://www.google.com/search?q='} + ${value}`
    }
  }
  const btnSearch = (e) => {
      window.location.href=`${'https://www.google.com/search?q='} + ${value}`
  }
  return (
    <div className='main'>
      <div>
        <img
          src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
          alt='logo'
        />
      </div>
      <div className='input-div'>
        <TbSearch />
        <input value={value} onChange={handleInput} onKeyDown={handleSearch} type='text' />
        <IoMdMic />
        <FiCamera />
      </div>
      <div className='search-btn'>
        <button onClick={(event)=>{
          console.log(event);
          btnSearch();
          }}>Google search</button>
        <button>I'm Feeling Lucky</button>
      </div>
      <div className='middle'>
        <p>Google offered in:</p>{' '}
        <ul>
          <li className='lang'>हिंदी</li>
          <li className='lang'> বাংলা</li>
          <li className='lang'>తెలుగు</li>
          <li className='lang'> मराठी</li>
          <li className='lang'>தமிழ்</li>
          <li className='lang'>ગુજરાતી</li>
          <li className='lang'> ಕನ್ನಡ</li>
          <li className='lang'>മലയാളം</li>
          <li className='lang'>ਪੰਜਾਬੀ</li>
        </ul>
      </div>
    </div>
  );
};

export default Main;
