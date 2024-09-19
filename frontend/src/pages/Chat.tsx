import { useEffect, useState } from "react";
import { Avatar, IconButton } from "@mui/material";
import { useAuth } from "../context/AuthContext";
import { IoMdSend } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import ChatMessages from "../components/chat/ChatMessages";
import { analyze } from "../utils/chat";
import toast from "react-hot-toast";

interface Message {
  message: string;
  user?: boolean;
}

const Chat = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const initialMessages: Message[] = [
    {
      message: `Hi, ${auth?.user?.name}`,
    },
    {
      message: "How can I help you?",
    },
  ];

  const [messages, setMessages] = useState<Message[]>(initialMessages);

  const [text, setText] = useState<string>("");
  const [isInputEmpty, setIsInputEmpty] = useState(false);

  const handleSend = async () => {
    if (!text.trim()) {
      setIsInputEmpty(true);
      return;
    }
    setIsInputEmpty(false);
    const loadingToast = toast.loading("Thinking...");

    const userMessage: Message = { message: text, user: true };
    let updatedMessages: Message[] = [...messages, userMessage];

    if (updatedMessages.length > 2) {
      setTimeout(async () => {
        const reply = await analyze(text);
        updatedMessages = [...updatedMessages, { message: reply }];
        setMessages(updatedMessages);
        toast.dismiss(loadingToast);
      }, 1000);
    } else {
      setMessages(updatedMessages);
      toast.dismiss(loadingToast);
    }
    setText("");
  };


  const clearConversation = () => {
    setMessages(initialMessages);
  };

  useEffect(() => {
    if (!auth?.user) {
      return navigate("/login");
    }
  }, [auth, navigate]);

  return (
    <div className="container-fluid my-5">
      <div className="row">
        <div className="col-md-4">
          <div className="border rounded">
            <div className="text-center">
              <Avatar
                sx={{
                  mx: "auto",
                  my: 2,
                  fontWeight: 700,
                }}
              >
                {auth?.user?.name[0]}
                {auth?.user?.name.split(" ")[1][0]}
              </Avatar>
              <p>
                You are talking to a ChatBOT
              </p>
              <p>
                You can ask some questions related to course, offering, prerequisites, schedules and facility.
              </p>
              <button className="btn btn-danger mb-4" onClick={clearConversation}>Clear Conversation</button>
            </div>
          </div>
        </div>
        <div className="col-md-8 ">
          <div className="border p-1 rounded">
            <h3 className="text-center my-2 text-decoration-underline fw-bold">
              MWU Chatbot
            </h3>
            <div className="border my-2">
              <div className="chat-message">
                {messages.length > 0 &&
                  messages.map((data: Message, index: number) => (
                    <ChatMessages
                      key={index}
                      user={data.user}
                      message={data.message}
                    />
                  ))}
              </div>
            </div>
            <div className="main-color d-flex p-2 rounded">
              {" "}
              <input
                type="search"
                id="inputBox"
                className={`form-control ${isInputEmpty ? "is-invalid" : ""}`}
                placeholder="Type here to chat with MWU Chatbot"
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                  setIsInputEmpty(false);
                }}
                required
              />
              <IconButton sx={{ color: "white", mx: 1 }} onClick={handleSend}>
                <IoMdSend />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
