import Head from "next/head";
import TodoList from "../src/components/features/todo_list/index";
import { LayoutContainer } from "../src/components/index";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Carrois-Gothic|Fresca"
          rel="stylesheet"
        />
      </Head>
      <LayoutContainer>
        <TodoList />
      </LayoutContainer>
    </>
  );
}