"use client";

import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { ChatLayout } from "~~/components/layouts/ChatLayout";
import { useReadFuzzContractHook } from "~~/hooks";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  const { getCurrentGamePrompts, getTotalAcumulated, useGetPrompt, useGetGamePrompts } = useReadFuzzContractHook();

  console.log(getCurrentGamePrompts.data);
  console.log(getTotalAcumulated.data);
  console.log(useGetPrompt("1").data);
  console.log(useGetGamePrompts("1").data);

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">Step 2</span>
            <p>Address: {connectedAddress}</p>
          </h1>
          <ChatLayout />
        </div>
      </div>
    </>
  );
};

export default Home;
