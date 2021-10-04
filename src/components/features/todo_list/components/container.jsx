import Head from "next/head";

const Container = ({ children }) => {
  return (
    <>
      <div>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Zeyada|Fresca"
            rel="stylesheet"
          />
        </Head>
        {children}
      </div>
    </>
  );
};

export default Container;
