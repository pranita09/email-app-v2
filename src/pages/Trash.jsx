import { useMails } from "../context/mail-context";
import MailCard from "../components/MailCard";

const Trash = () =>{
    const {dispatch, filteredTrashMails} = useMails();
    return(
        <div className="all-mails">
            {
                filteredTrashMails.length === 0
                    ? <h2>Trash is empty!</h2> 
                        : <>
                            <fieldset>
                                <legend>Filters</legend>
                                <label>
                                    <input type='checkbox' onChange={()=> dispatch({type: 'FILTER', payload: 'unread'})}/> Show unread emails
                                </label>
                                <label>
                                    <input type='checkbox' onChange={()=> dispatch({type: 'FILTER', payload: 'isStarred'})}/> Show starred emails
                                </label>
                            </fieldset>
                            {
                                filteredTrashMails.map((mail)=>(
                                    <MailCard mail={mail} trashAdded/>
                                ))
                            }
                        </>
            }
        </div>
    )
}
export default Trash;