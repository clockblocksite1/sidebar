import React from 'react';
import './widget.scss';
import { MdKeyboardArrowUp, MdAccountBalanceWallet, MdMonetizationOn } from 'react-icons/md';
import { IoPersonOutline } from 'react-icons/io5';
import { FaShoppingCart } from 'react-icons/fa';

export const Widget = ({ type }) => {
    let data = {
        title: "",
        isMoney: false,
        link: "",
        icon: null
    };
    
    const amount = 100;
    const diff = 20;

    switch (type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all users",
                icon: <IoPersonOutline className='icon' style={{color:"crimson", backgroundColor:"rgba(255, 0, 0, 0.2)",}}/>
            };
            break;
        case "order":
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "View all orders",
                icon: <FaShoppingCart className='icon' style={{backgroundColor:"rgba(218, 165, 32, 0.2) ", color:"goldenrod"}} />
            };
            break;
        case "earning":
            data = {
                title: "EARNING",
                isMoney: false,
                link: "View all earning",
                icon: <MdMonetizationOn className='icon'  style={{backgroundColor:"rgba(0, 128, 0, 0.2) ", color:"green"}} />
            };
            break;
        case "balance":
            data = {
                title: "BALANCE",
                isMoney: false,
                link: "See details",
                icon: <MdAccountBalanceWallet className='icon'  style={{backgroundColor:"rgba(128, 0, 128, 0.2) ", color:"purple"}}/>
            };
            break;
        default:
            break;
    }

    return (
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="conter">{data.isMoney && "$"} {amount}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <MdKeyboardArrowUp />
                    {diff}%
                </div>
                {data.icon}
            </div>
        </div>
    );
};