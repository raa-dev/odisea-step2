"use client";

import type { NextPage } from "next";
// import { ChatLayout } from "~~/components/layouts/ChatLayout";
import { CollectedLayout } from "~~/components/layouts/CollectedLayout";

const Home: NextPage = () => {
  return (
    <>
      <section className="flex items-center flex-col flex-grow pt-10 gap-4">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">Step 2</span>
          </h1>
          {/* <ChatLayout /> */}
        </div>
        <CollectedLayout />
      </section>
    </>
  );
};

export default Home;
