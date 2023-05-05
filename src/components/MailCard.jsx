import { NavLink } from "react-router-dom";
import { useMails } from "../context/mail-context";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import MarkunreadOutlinedIcon from '@mui/icons-material/MarkunreadOutlined';
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';
import { ErrorOutlineRounded } from "@mui/icons-material";

const MailCard = ({mail, trashAdded, spamAdded}) =>{
    const {dispatch} = useMails();
    const {mId, unread, isStarred, subject, content} = mail;
    return(
        <div className="mailcard" style={{backgroundColor: unread ? '#dae4f5' : 'white'}}>
            <div className="sub-btn">
                <h3>Subject: {subject}</h3>
                <div><span onClick={()=> dispatch({type: 'STAR_TOGGLE', payload: mail})}><StarBorderOutlinedIcon style={{color: isStarred ? 'yellow' : 'black'}}/> </span></div>
            </div>
            <p>{content}</p>
            {
                mail && 
                <div className='details-btns'>
                <NavLink className='detail-link' to={`/mail/${mId}`}>View Details</NavLink>
                <div className="btns">
                    { !trashAdded && <span style={{color: 'red'}} onClick={()=> dispatch({type: 'DELETE', payload: mail})}><DeleteOutlinedIcon/></span>}
                    { trashAdded && <span  style={{color: 'red'}} onClick={()=> dispatch({type: 'RESTORE_FROM_TRASH', payload: mail})} ><RestoreFromTrashIcon/></span> }
                    <span style={{color: 'orange'}} onClick={()=> dispatch({type: 'UNREAD_TOGGLE', payload: mail})}>{unread ? <MarkEmailReadOutlinedIcon /> : <MarkunreadOutlinedIcon/>}</span>
                    { !spamAdded && <span style={{color: 'green'}} onClick={()=> dispatch({type: 'REPORT_SPAM', payload: mail})}><ErrorOutlineRounded/></span> }
                    { spamAdded && <span style={{color: 'green'}} onClick={()=>dispatch({type: 'RESTORE_FROM_SPAM', payload: mail})}><RestoreFromTrashIcon/></span> }            
                </div>
            </div>
            }
            
        </div>
    )
}
export default MailCard;