import MailCard from "../components/MailCard";
import { useMails } from "../context/mail-context";

const Spam = () =>{
    const {state, dispatch, filteredSpamMails} = useMails();
    return(
        <div className="all-mails">
            {
                state.spam.length === 0
                    ? <h2>Spam is empty!</h2> 
                        : <>
                            <fieldset>
                                <legend>Filters</legend>
                                <label>
                                    <input type='checkbox' onChange={()=> dispatch({type: 'FILTER', payload: 'unread'})} /> Show unread emails
                                </label>
                                <label>
                                    <input type='checkbox' onChange={()=> dispatch({type: 'FILTER', payload: 'isStarred'})} /> Show starred emails
                                </label>
                            </fieldset>
                            {filteredSpamMails.map((mail)=>(
                                <MailCard mail={mail} spamAdded/>
                            ))}
                        </>
            }
        </div>
    )
}

export default Spam;