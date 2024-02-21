import Chart from "../../components/chart/Chart";
import Fearured from "../../components/featured/Fearured";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import List from "../../components/table/Table";
import { Widget } from "../../components/widget/Widget";
import "./home.scss"
import React from "react";
const Home=()=>{
    return(
        <div className="home">
         <Sidebar/>
         <div className="homeContainer">
            <Navbar/>
           <div className="widgets">
            <Widget type="user"/>
            <Widget type="order"/>
            <Widget type="erarning"/>
            <Widget type="balance"/>
           </div>
           <div className="charts">
             <Fearured/>
             <Chart title="Last 6 Months (Revenue) "aspect={2 / 1}/>
           </div>
           <div className="listContainer">
            <div className="listTitle">Latest Transactions</div>
            <List/>
           </div>
         </div>
        </div>
    )
}
export default Home;