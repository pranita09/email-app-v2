import { createContext, useContext, useReducer } from "react";
import { mails } from "../data/data";

export const MailContext = createContext();

const reducerFunction = (state, action) =>{
    switch(action.type){
        case 'FILTER':
            return{
                ...state,
                checkboxInput: state.checkboxInput.includes(action.payload) 
                    ? state.checkboxInput.filter(checkType=> checkType!==action.payload) 
                        : [...state.checkboxInput, action.payload]
            }
        case "STAR_TOGGLE": 
            return {
                ...state,
                mails: state.mails.map((mail)=> mail.mId===action.payload.mId ? {...mail, isStarred: !mail.isStarred} : mail)
            }
        default:
            return state
    }
}

export const MailProvider = ({children}) =>{

    const initialState = {
        mails: mails,
        spam: [],
        trash: [],
        checkboxInput: []
    }

    const [state, dispatch] = useReducer(reducerFunction, initialState);

    const filteredMails = state.checkboxInput.length > 0 
        ? state.mails.filter(mail => state.checkboxInput.every(checkType => mail[checkType])) 
            : state.mails

    return(
        <MailContext.Provider value={{state, dispatch, filteredMails}}>
            {children}
        </MailContext.Provider>
    )
}

export const useMails = () => useContext(MailContext);