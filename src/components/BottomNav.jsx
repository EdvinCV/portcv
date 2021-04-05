import React from 'react'
import { AiOutlineHome, AiOutlineIdcard, AiOutlineDatabase } from "react-icons/ai";
import {Link} from 'react-router-dom';

import styled from 'styled-components';

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    transition: color 0.30s;

    &:link, &:visited, &focus &:active {
        text-decoration: none;
    }

    &:hover {
        color: green;
    }

`;

const BottomNav = () => {
    return (
        <div className="bottom-nav">
            <div>
                <StyledLink to="/">
                    <AiOutlineHome size="2em" />
                </StyledLink>
            </div>
            <div>
                <StyledLink to="/about">
                    <AiOutlineIdcard size="2em" />
                </StyledLink>
            </div>
            <div>
                <StyledLink to="/projects">
                    <AiOutlineDatabase size="2em" />
                </StyledLink>
            </div>

        </div>
    );
}
 
export default BottomNav;