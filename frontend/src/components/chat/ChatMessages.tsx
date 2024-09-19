import React from "react";
import { Avatar } from "@mui/material";
import { useAuth } from "../../context/AuthContext";

interface ChatMessagesProps {
  message: string;
  user?: boolean;
}

const ChatMessages: React.FC<ChatMessagesProps> = ({ message, user }) => {
  const auth = useAuth();

  const hasHtmlTags = /<\/?[a-z][\s\S]*>/i.test(message);

  const renderMessage = () => {
    if (hasHtmlTags) {
      return (
        <div className="message-text d-flex gap-2 align-items-center">
          <Avatar sx={{ ml: "0" }}>
            <img
              src="http://www.mwu.edu.np/wp-content/themes/muniversity/images/mu%20logo.png"
              alt="bot"
              width={"30px"}
            />
          </Avatar>
          <span dangerouslySetInnerHTML={{ __html: message }} />
        </div>
      );
    } else {
      return (
        <span className="message-text d-flex gap-2 align-items-center">
          {user ? (
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
          ) : (
            <Avatar sx={{ ml: "0" }}>
              <img
                src="http://www.mwu.edu.np/wp-content/themes/muniversity/images/mu%20logo.png"
                alt="bot"
                width={"30px"}
              />
            </Avatar>
          )}
          {message}
        </span>
      );
    }
  };

  return (
    <div className={`d-flex ${user ? "justify-content-end" : ""}`}>
      {user ? (
        <span className="message-right">{renderMessage()}</span>
      ) : (
        <span className="message-left border">{renderMessage()}</span>
      )}
    </div>
  );
};

export default ChatMessages;
