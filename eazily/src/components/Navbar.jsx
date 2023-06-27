import React from 'react'
import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'

const Navbar = () => {
    return (
        <Wrapper>
            <div className="nav-item">
                <ul className='nav-item-list'>
                    <li>
                        <NavLink to={'/about'}>About Us</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/contact'}>Contact Us</NavLink>
                    </li>
                    <li>
                        <NavLink to={'policies'}>Policies</NavLink>
                    </li>
                    <li>
                        <NavLink to={'blogs'}>Blogs</NavLink>
                    </li>
                </ul>
            </div>
        </Wrapper>
    )
}

export default Navbar
const Wrapper = styled.section`
border: .3px solid black;
.nav-item-list{
    color: rgb(29, 30, 32);
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 5.5rem;
    display: inline-flex;
    flex-flow: row wrap;
    /* row-gap: 16px; */
    align-items: center;
    height: 110%;
    text-align: center;
    /* text-align: var(--navigation-text-align); */
    list-style: none;
    font-size: 1.8rem;
    line-height: 2.2rem;
    font-weight: 500;
}
.nav-item-list li{
list-style: none;
text-decoration: none;
}
.nav-item-list a{
text-decoration: none;
font-family: "Noto Serif TC", serif;
color: black;
}
`;