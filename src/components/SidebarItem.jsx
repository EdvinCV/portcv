import React from 'react'
import {Link} from 'react-router-dom';
import * as Ai from "react-icons/ai";

const SidebarItem = ({value, icon}) => {
    return (
        <li className="side-item">
            <Link to="/">
                {value}
            </Link>
        </li>
    );
}
 
export default SidebarItem;