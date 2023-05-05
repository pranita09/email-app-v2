import { NavLink } from "react-router-dom"
import { useMails } from "../context/mail-context";

const Header = () =>{
    const {state} = useMails();

    const activeStyles = ({isActive}) => ({
        backgroundColor: isActive ? '#95dfed' : '',
        boxShadow: isActive ? '0 0 5px' : 'none',
    })
    
    return(
        <div className="navlinks">
            <NavLink className='navlink' style={activeStyles} to='/'>Inbox</NavLink> 
            <NavLink className='navlink' style={activeStyles} to='/spam'> Spam({state.spam.length})</NavLink>
            <NavLink className='navlink' style={activeStyles} to='/trash'> Trash({state.trash.length})</NavLink> 
        </div>
    )
}

export default Header;