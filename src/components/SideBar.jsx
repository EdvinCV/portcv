import React, {Fragment} from 'react';
// Icons
import { FaLaptopCode } from "react-icons/fa";
import { AiOutlineHome, AiOutlineIdcard, AiOutlineDatabase } from "react-icons/ai";
//
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #D1E8E2;
    border-bottom: 2px solid transparent;
    transition: color 0.30s;

    &:link, &:visited &:active {
        text-decoration: none;
    }

    &:hover {
        color: #3500D3;
        border-bottom: 2px solid #3500D3;
    }

`;

const SideBar = () => {

    return (
        <Fragment>
        <nav>
            <div className="head">
                <FaLaptopCode size="1.5em" />
                <h2>EdvinCV</h2>
            </div>
            <ul className="list-items">
                <li className="side-item">
                    <StyledLink to="/">
                        <AiOutlineHome size="1.2em" />
                        <span style={{marginLeft: "10px"}}>
                            Home
                        </span>
                    </StyledLink>
                </li>
                <li className="side-item">
                    <StyledLink to="/about">
                        <AiOutlineIdcard size="1.2em"/>
                        <span style={{marginLeft: "10px"}}>
                            About me
                        </span>
                    </StyledLink>
                </li>
                <li className="side-item">
                    <StyledLink to="/projects">
                        <AiOutlineDatabase size="1.2em"/>
                        <span style={{marginLeft: "10px"}}>
                            Projects
                        </span>
                    </StyledLink>
                </li>
            </ul>
            <div className="footer">
                <span> &copy; Edvin Calderón {new Date().getFullYear()}</span>
            </div>
        </nav>
        </Fragment>
    );
}

export default SideBar;