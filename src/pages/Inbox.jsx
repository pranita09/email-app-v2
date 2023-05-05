import MailCard from "../components/MailCard";
import { useMails } from "../context/mail-context";

const Inbox = () => {
  const {state, dispatch, filteredInboxMails } = useMails();
  const unreadCount = filteredInboxMails.reduce((acc, {unread})=> unread ? acc+1 : acc,0);
  return (
    <div className="all-mails">
      <fieldset>
        <legend>Filters</legend>
        <label>
            <input type="checkbox" onChange={()=> dispatch({type: 'FILTER', payload: 'unread'})}/>Show unread emails
        </label>
        <label>
            <input type="checkbox" onChange={()=> dispatch({type: 'FILTER', payload: 'isStarred'})}/>Show starred emails
        </label>
      </fieldset>
      <h2>Unread: {unreadCount}</h2>
      {filteredInboxMails?.map((mail) => (
        <div key={mail.mId}>
          <MailCard mail={mail} />
        </div>
      ))}
    </div>
  );
};

export default Inbox;
