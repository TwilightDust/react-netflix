import React, { useEffect, useState } from 'react';

import "./Nav.css";
import { useNavigate } from 'react-router-dom';

export const Nav = () => {

  const[show,setShow] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  
  const navigate = useNavigate();

  const handleChange = function(e){
    setSearchValue(e.target.value);
    if(e.target.value === ""){
      navigate("/");
      
    }else{
      navigate(`/search?q=${e.target.value}`);

    }
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 50){
        setShow(true);
      }else{
        setShow(false);
      }

      console.log(window.scrollY);

    });

    return () => {
      window.removeEventListener("scroll",() =>{});
    }
  });

  return (
    <nav className={`${show ? "nav_black" : ""} nav`}>
        <img alt='Netflix logo' 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png" 
        className="nav_logo" 
        onClick={()=> window.location.reload()}/>

        <input value={searchValue} 
        onChange={handleChange} 
        className='nav__input' 
        placeholder='영화 검색'></input>

        <img alt='User logged' 
        src="https://occ-0-988-395.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY5cwIbM7shRfcXmfQg98cqMqiZZ8sReZnj4y_keCAHeXmG_SoqLD8SXYistPtesdqIjcsGE-tHO8RR92n7NyxZpqcFS80YfbRFz.png?r=229" 
        className="nav_avator" />
    </nav>
  )
}
