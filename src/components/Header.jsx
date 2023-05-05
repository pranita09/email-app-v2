import { NavLink } from "react-router-dom"
import { useMails } from "../context/mail-context";

const Header = () =>{
    const {state} = useMails();
    
    return(
        <>
            <h1>pranita's mail box</h1>
            <NavLink to='/'>Inbox</NavLink> || 
            <NavLink to='/spam'> Spam({state.spam.length})</NavLink> || 
            <NavLink to='/trash'> Trash({state.trash.length})</NavLink> 
        </>
    )
}

export default Header;