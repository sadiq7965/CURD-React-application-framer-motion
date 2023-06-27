import React from 'react'
import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'

const Navbar = () => {
    return (
        <Wrapper>
            <div className="nav-item">
                <ul className='nav-item-list'>
                    <li>
                        <NavLink to={'/about'}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/contact'}>Contact</NavLink>
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
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.nav-item-list li{
list-style: none;
text-decoration: none;
}
.nav-item-list a{
text-decoration: none;
font-size: 1.6rem;
color: black;
}
`;