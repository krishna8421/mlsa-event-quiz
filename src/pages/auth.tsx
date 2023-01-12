import { Button, Input } from "@nextui-org/react";
import Head from "next/head";
import React from "react";

const Auth = () => {
  return (
    <div className="flex min-h-screen w-screen items-center justify-center bg-slate-100 px-4 py-2 md:px-8">
      <Head>
        <title>Auth | MLSA Event Quiz</title>
      </Head>
      <div className="flex flex-col gap-8 rounded-2xl bg-slate-200 p-8 shadow-xl">
        <p className="text-center text-2xl font-bold text-gray-800">
          MLSA Auth
        </p>
        <Input labelLeft="Code: " placeholder="Enter your code here" />
        <Button className="w-full">Login</Button>
      </div>
    </div>
  );
};

export default Auth;
