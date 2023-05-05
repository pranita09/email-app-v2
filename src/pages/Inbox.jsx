import MailCard from "../components/MailCard";
import { useMails } from "../context/mail-context";

const Inbox = () => {
  const { state, dispatch, filteredInboxMails } = useMails();

  return (
    <>
      <h1>Inbox</h1>
      <fieldset>
        <legend>Filters</legend>
        <label>
            <input type="checkbox" onChange={()=> dispatch({type: 'FILTER', payload: 'unread'})}/>Show unread emails
        </label>
        <label>
            <input type="checkbox" onChange={()=> dispatch({type: 'FILTER', payload: 'isStarred'})}/>Show starred emails
        </label>
      </fieldset>
      {filteredInboxMails?.map((mail) => (
        <div key={mail.mId}>
          <MailCard mail={mail} />
        </div>
      ))}
    </>
  );
};

export default Inbox;
