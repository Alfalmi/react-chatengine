import { ChatEngine } from "react-chat-engine";
import ChatFeed from './components/ChatFeed'
import LoginForm from "./components/LoginForm";
import './App.css';

const App = () => {

    if(!localStorage.getItem('username')) return <LoginForm />

  return <ChatEngine 
  height="100vh" projectID="e933186c-8bbf-4d43-83c3-9bb20df384aa" userName={localStorage.getItem('username')}
  userSecret={localStorage.getItem('password')}
  renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />} 
  />;
};
 export default App;