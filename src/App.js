import Header from "./components/Header";
import Inbox from "./pages/Inbox";
import IndividualMail from "./pages/IndividualMail";
import Spam from "./pages/Spam";
import Trash from "./pages/Trash";
import "./styles.css";
import {Routes, Route} from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <h1>pranita's mail box</h1>
      <div className="email-body">
        <Header />
        <Routes>
          <Route path='/' element={<Inbox />}/>
          <Route path='/spam' element={<Spam />}/>
          <Route path='/trash' element={<Trash />}/>
          <Route path='/mail/:mailId' element={<IndividualMail />} />
        </Routes>
      </div>
    
    </div>
  );
}
