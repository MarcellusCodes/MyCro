import Logo from "../assets/logo.svg";

const Branding = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-center">
        <img src={Logo} alt="App Icon" width={72} height={72} />
        <h2
          className="text-6xl text-blue-500 font-bold"
          style={{ fontFamily: "Zeyada" }}
        >
          Tody
        </h2>
      </div>
    </>
  );
};

export default Branding;
