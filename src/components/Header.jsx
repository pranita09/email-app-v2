import { NavLink } from "react-router-dom"

const Header = () =>{
    return(
        <>
            <h1>pranita's mail box</h1>
            <NavLink to='/'>Inbox</NavLink> || 
            <NavLink to='/spam'> Spam</NavLink> || 
            <NavLink to='/trash'> Trash</NavLink> 
        </>
    )
}

export default Header;