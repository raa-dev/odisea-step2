import { FC } from "react";
import { ChatWrapper } from "../chat";

export const ChatLayout: FC = () => {

  return (
    <div className="flex flex-col h-fit">
      <div className="flex-1 overflow-y-auto">
        <ChatWrapper />
      </div>
    </div>
  );
};
