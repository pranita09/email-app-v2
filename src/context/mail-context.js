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
                mails: state.mails.map((mail)=> mail.mId===action.payload.mId ? {...mail, isStarred: !mail.isStarred} : mail),
                spam: state.spam.map((mail)=> mail.mId===action.payload.mId ? {...mail, isStarred: !mail.isStarred} : mail),
                trash: state.trash.map((mail)=> mail.mId===action.payload.mId ? {...mail, isStarred: !mail.isStarred} : mail)
            }
        case 'UNREAD_TOGGLE':
            return{
                ...state,
                mails: state.mails.map((mail)=> mail.mId===action.payload.mId ? {...mail, unread: !mail.unread} : mail),
                spam: state.spam.map((mail)=> mail.mId===action.payload.mId ? {...mail, unread: !mail.unread} : mail),
                trash: state.trash.map((mail)=> mail.mId===action.payload.mId ? {...mail, unread: !mail.unread} : mail)
            }
        case 'DELETE':
            return{
                ...state,
                trash: [...state.trash, action.payload],
                mails: state.mails.filter((mail)=> mail.mId!==action.payload.mId)
            }
        case 'REPORT_SPAM':
            return{
                ...state,
                spam: [...state.spam, action.payload],
                mails: state.mails.filter((mail)=> mail.mId!==action.payload.mId)
            }
        case 'RESTORE_FROM_TRASH':
            return{
                ...state,
                mails: [action.payload, ...state.mails],
                trash: state.trash.filter((mail)=> mail.mId!==action.payload.mId)
            }
        case 'RESTORE_FROM_SPAM':
            return{
                ...state,
                mails: [action.payload, ...state.mails],
                spam: state.spam.filter((mail)=> mail.mId!==action.payload.mId)
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

    const filteredInboxMails = state.checkboxInput.length > 0 
        ? state.mails.filter(mail => state.checkboxInput.every(checkType => mail[checkType])) 
            : state.mails;
    
    const filteredSpamMails = state.checkboxInput.length > 0
        ? state.spam.filter((mail)=> state.checkboxInput.every(checkType => mail[checkType])) 
            : state.spam;

    const filteredTrashMails = state.checkboxInput.length > 0
        ? state.trash.filter((mail)=> state.checkboxInput.every(checkType => mail[checkType]))
            : state.trash;

    return(
        <MailContext.Provider value={{state, dispatch, filteredInboxMails, filteredSpamMails, filteredTrashMails}}>
            {children}
        </MailContext.Provider>
    )
}

export const useMails = () => useContext(MailContext);