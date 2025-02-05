import { FC } from "react";
import { useChatHook } from "../../hooks/fuzzBetting/useChatHook";

export const ChatWrapper: FC = () => {
  const { useChatContent } = useChatHook();
  const { messages, inputValue, handleInputChange, handleSendMessage } = useChatContent();

  return (
    <div className="flex flex-col h-fit w-[500px]">
      <div className="flex-1 overflow-y-auto max-w-[300px]">
        {messages.map((message, index) => (
          <Message key={index} content={message} />
        ))}
      </div>
      <div className="flex items-center">
        <textarea
          value={inputValue}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleInputChange(e)}
          contentEditable
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[40px] break-words"
        />
        <button onClick={handleSendMessage} className="bg-blue-500 text-white px-4 py-2 rounded-r">
          Send
        </button>
      </div>
    </div>
  );
};

interface MessageProps {
  content: string;
}

const Message: FC<MessageProps> = ({ content }) => {
  return (
    <div className="bg-gray-300 p-2 mb-2 rounded">
      <p>{content}</p>
    </div>
  );
};
