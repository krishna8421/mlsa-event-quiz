import { type NextPage } from "next";
import Head from "next/head";
import { useSession } from "next-auth/react";
import { Button, Card, Input, Row, Text } from "@nextui-org/react";
import { MdLockOutline } from "react-icons/md";
import { useState } from "react";
import { signIn, signOut } from "next-auth/react";
import { Modal, Checkbox } from "@nextui-org/react";

const Home: NextPage = () => {
  const { data: sessionData, status } = useSession();

  const [errorModel, setErrorModel] = useState("");

  const showErrorMsg = () => setErrorModel("Invalid Code");

  const [code, setCodes] = useState<string>("");

  if (status === "loading") {
    return (
      <div className="flex min-h-screen w-screen items-center justify-center bg-slate-100 px-4 py-2 md:px-8">
        Loading
      </div>
    );
  }

  if (status === "unauthenticated") {
    return (
      <div className="flex min-h-screen w-screen items-center justify-center bg-slate-100 px-4 py-2 pb-40 md:px-8">
        <div className="flex flex-col gap-8 rounded-2xl bg-slate-300 p-8 shadow-xl">
          <p className="text-center text-2xl font-bold text-gray-800">
            MLSA Auth
          </p>
          <div>
            <Input
              labelLeft="Code: "
              placeholder="Enter your code here"
              value={code}
              onChange={(e) => {
                setCodes(e.target.value);
              }}
            />
            {errorModel && (
              <p className="mt-2 px-4 text-sm text-red-500">{errorModel}</p>
            )}
          </div>
          <Button
            className="w-full"
            onClick={async () => {
              const auth = await signIn("credentials", {
                redirect: false,
                code: code,
              });

              if (!auth?.ok) {
                showErrorMsg();
              }
            }}
          >
            Login
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen w-screen flex-col items-center bg-slate-100 px-4 py-2 md:px-8">
      <Head>
        <title>MLSA Event Quiz</title>
        <meta name="description" content="MLSA Event Quiz" />
      </Head>
      <h2 className="mb-14 text-gray-800">MLSA Event Quiz</h2>
      <div className="flex flex-wrap justify-center gap-8">
        <Card
          isPressable
          isHoverable
          variant="bordered"
          className="h-72 w-72 bg-indigo-600"
        >
          <Card.Body>
            <div className="flex h-full items-center justify-center">
              <MdLockOutline className="text-slate-100" size={120} />
            </div>
          </Card.Body>
          <Card.Footer>
            <Row justify="center">
              <Text h4 className="text-slate-100">
                Locked
              </Text>
              {/* <button
                onClick={() => {
                  signOut();
                }}
              >
                logout
              </button> */}
            </Row>
          </Card.Footer>
        </Card>
      </div>
    </div>
  );
};

export default Home;
