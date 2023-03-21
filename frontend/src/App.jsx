import { useState } from "react";

import "./App.css";

import AuthPage from "./AuthPage";
import ChatsPage from "./ChatsPage";

/*
This file will render the Authentication Page until a user logs in or signs up.
Then, the onAuth() callback will set the user state, and render the Chats Page (and pass the user state in as a prop)
*/
function App() {
  const [user, setUser] = useState(undefined);

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }
}

export default App;