import React, { useEffect, useState } from "react";
import axios from "axios";

const ChatPage = () => {
  const [chats, setChats] = useState([]);
  const fetchAllChats = async () => {
    const { data } = await axios.get("http://localhost:5000/api/chat");
    console.log(data);
    setChats(data);
  };

  useEffect(() => {
    fetchAllChats();
  }, []);
  return <div>ChatPage</div>;
};

export default ChatPage;
