import MailCard from "../components/MailCard";
import { useMails } from "../context/mail-context";

const Spam = () =>{
    const {state} = useMails();
    return(
        <>
            {
                state.spam.length === 0
                    ? <h2>Spam is empty!</h2> 
                        : state.spam.map((mail)=>(
                            <MailCard mail={mail} spamAdded/>
                        ))
            }
        </>
    )
}

export default Spam;