import { useMails } from "../context/mail-context";
import MailCard from "../components/MailCard";

const Trash = () =>{
    const {state} = useMails();
    return(
        <>
            {
                state.trash.length === 0
                    ? <h2>Trash is empty!</h2> 
                        : state.trash.map((mail)=>(
                            <MailCard mail={mail} trashAdded/>
                        ))
            }
        </>
    )
}
export default Trash;