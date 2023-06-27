import React from 'react'
import styled from 'styled-components';
import Navbar from './Navbar';

const Header = () => {
  return (
    <Wrapper>
      <div className='container grid-two-column'>
          <div className="nav-logo">
            <img src="/img/Eazily-logo.png" alt="Eazily_logo" />
          </div>
        <Navbar />
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
  max-width: 20.2rem;
  cursor: pointer;  //need to edit this code
  
}
.grid-two-column{
  align-items: center;
  padding-top: 2.3rem ;
}
`;