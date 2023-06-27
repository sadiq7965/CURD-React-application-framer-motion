import React from 'react'
import styled from 'styled-components';
import Navbar from './Navbar';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <Wrapper>
      <div className='container'>
        <div className=' grid-two-column'>
          <div className="nav-logo">
            <NavLink to={'/'}> <img src="\img\Eazily-logo1.1.jpg" alt="Eazily_logo" /></NavLink>

          </div>
          <Navbar />
        </div>
      </div>
    </Wrapper>
  )
}

export default Header
const Wrapper = styled.section`

/* .flex{
  display: flex;
  justify-content: space-between;
} */
.nav-logo img{
  display: inline-block;
  /* border: .5px solid black; */
  max-width: 18rem;
  cursor: pointer;  //need to edit this code
  
}
.grid-two-column{
  padding-left:1rem;
  align-items: center;
  padding-top: 3.3rem ;
}
`;