import { useParams } from "react-router-dom";
import { useMails } from "../context/mail-context";

const IndividualMail = () =>{
    const {mailId} = useParams();
    const {state: {mails, spam, trash}} = useMails();

    const inboxMail = mails?.find(mail=> mail.mId ===mailId);
    const spamMail = spam?.find(mail => mail.mId === mailId);
    const trashMail = trash?.find(mail => mail.mId === mailId)

    const selectedMail = inboxMail ?? spamMail ?? trashMail

    return(
        <div className="all-mails">
            <div className="single-mail">
                <h3>Subject: {selectedMail.subject}</h3>
                <p>{selectedMail.content}</p>
            </div>
        </div>
    )
}
export default IndividualMail;