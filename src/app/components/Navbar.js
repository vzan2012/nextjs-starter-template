import Link from "next/link";
import Search from "./Search";

const Navbar = () => (
  <nav className="bg-slate-600 flex p-4 justify-between flex-col md:flex-row sticky top-0 drop-shadow-xl">
    <h1 className="font-bold text-white text-3xl grid place-content-center mb-2 md:mb-0">
      <Link href="/">Vessel</Link>
    </h1>
    <Search />
  </nav>
);

export default Navbar;
