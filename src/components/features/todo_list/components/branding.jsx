import Image from "next/Image";
import Logo from "../assets/logo.svg";

const Branding = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-center">
        <Image src={Logo} alt="App Icon" width={64} height={64} />
        <h2
          className="text-5xl text-blue-500 font-bold"
          style={{ fontFamily: "Zeyada" }}
        >
          Tody
        </h2>
      </div>
    </>
  );
};

export default Branding;
