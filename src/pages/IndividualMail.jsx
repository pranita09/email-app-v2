import { useParams } from "react-router-dom";
import { useMails } from "../context/mail-context";
import MailCard from "../components/MailCard";

const IndividualMail = () =>{
    const {mailId} = useParams();
    const {state} = useMails();

    const findMail = state.mails?.find(mail=> mail.mId ===(mailId));

    return(
        <>
            <h2>Individual Mail</h2>
            <MailCard mail={findMail}/>
        </>
    )
}
export default IndividualMail;