import { useState } from "react";

export const useChatHook = () => {
  const useChatContent = () => {
    const [messages, setMessages] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setInputValue(e.target.value);
    };

    const handleSendMessage = () => {
      if (inputValue) {
        setMessages(prevMessages => [...prevMessages, inputValue]);
        setInputValue("");
      }
    };

    return {
      messages,
      inputValue,
      handleInputChange,
      handleSendMessage,
    };
  };

  return {
    useChatContent,
  };
};
