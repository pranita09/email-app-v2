import { NavLink } from "react-router-dom";
import { useMails } from "../context/mail-context";

const MailCard = ({mail, trashAdded, spamAdded}) =>{
    const {dispatch} = useMails();
    const {mId, unread, isStarred, subject, content} = mail;
    return(
        <div>
            <div>
                <h3>Subject: {subject}</h3>
                <button onClick={()=> dispatch({type: 'STAR_TOGGLE', payload: mail})}>{isStarred ? 'Unstar' : 'Star' }</button>
            </div>
            <p>{content}</p>
            {
                mail && 
                <div>
                <NavLink to={`/mail/${mId}`}>View Details</NavLink>
                <div>
                    { !trashAdded && <button onClick={()=> dispatch({type: 'DELETE', payload: mail})}>Delete</button>}
                    { trashAdded && <button onClick={()=> dispatch({type: 'RESTORE_FROM_TRASH', payload: mail})} >Restore</button> }
                    <button onClick={()=> dispatch({type: 'UNREAD_TOGGLE', payload: mail})}>Mark as {unread ? 'Read' : 'Unread'}</button>
                    { !spamAdded && <button onClick={()=> dispatch({type: 'REPORT_SPAM', payload: mail})}>Report Spam</button> }
                    { spamAdded && <button onClick={()=>dispatch({type: 'RESTORE_FROM_SPAM', payload: mail})}>Restore</button> }            
                </div>
            </div>
            }
            
        </div>
    )
}
export default MailCard;