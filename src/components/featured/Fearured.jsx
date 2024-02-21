import "./featured.scss"
import { MdMoreVert } from "react-icons/md";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { MdKeyboardArrowDown } from "react-icons/md";
export default function Fearured() {
  return (
    <div className="fearured">
        <div className="top">
           
            <MdMoreVert fontSize="small"/>
        </div>
        <div className="bottom">
            <div className="featuredChart">
                <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
            </div>
            <p className="title"></p>
            <p className="amount">$420</p>
            <p className="desc">
       Previous  transaction procesing. Last payments my not be included.
            </p>
            <div className="summary">
            <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
                   <MdKeyboardArrowDown fontSize="small"/>
                <div className="resultAmount">$12.4k</div>
            </div>
            </div>
            <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult">
                   <MdKeyboardArrowDown fontSize="small"/>
                <div className="resultAmount">$12.4k</div>
            </div>
            </div>
            <div className="item">
            <div className="itemTitle">Last Mounth</div>
            <div className="itemResult positive">
                   <MdKeyboardArrowDown fontSize="small"/>
                <div className="resultAmount">$12.4k</div>
            </div>
            </div>
            </div>
            
        </div>
    </div>
  )
}