import { NavLink } from "react-router-dom";
import { useMails } from "../context/mail-context";

const MailCard = ({mail}) =>{
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
                    <button>Delete</button>
                    <button>Mark as {unread ? 'Read' : 'Unread'}</button>
                    <button>Report Spam</button>
                </div>
            </div>
            }
            
        </div>
    )
}
export default MailCard;