import React from 'react';
import './navbar.scss';
import { IoIosSearch } from 'react-icons/io';
import { GrLanguage } from 'react-icons/gr';
import { FaListUl } from 'react-icons/fa';
import { MdDarkMode } from 'react-icons/md';
import { MdChatBubbleOutline } from 'react-icons/md';
import { IoIosNotifications } from 'react-icons/io';
import { MdFullscreenExit } from 'react-icons/md';
import mafiaImg from "./../../../src/mysterious-mafia-man-smoking-a-cigarette_52683-34828.avif"
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="wrapper">
           
                <input className="search" type="text" placeholder="Поиск..." />
                <IoIosSearch />
                <div className="items">
                    <div className="item">
                        <GrLanguage className='icon'/>
                        English
                    </div>
                    <div className="item">
                        <MdFullscreenExit className='icon'/>
                    </div>
                    <div className="item">
                        <IoIosNotifications className='icon'/>
                        <div className='counter'>1</div>
                    </div>
                    <div className="item">
                        <MdChatBubbleOutline className='icon'/>
                        <div className='counter'>2</div>
                    </div>
                    <div className="item">
                        <FaListUl className='icon'/>
                    </div>
                    <div className="item">
                        <MdDarkMode className='icon'/>
                    </div>
                    <div className="item">
                   <img className='avatar' src={mafiaImg} alt=''/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;