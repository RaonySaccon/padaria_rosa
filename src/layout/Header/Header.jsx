import { BiMenu } from "react-icons/bi";
import Aside from "../Aside/Aside";

export default function Header() {
  return (
    <>
      <Aside></Aside>
      <header className="fixed w-full items-center flex justify-between px-8 py-2">
        <p>logo</p>
        <BiMenu className="text-2xl" />
      </header>
    </>
  );
}
