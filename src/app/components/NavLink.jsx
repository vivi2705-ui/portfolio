import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#5B45D4] sm:text-xl rounded md:p-0 hover:text-[#ec4899] transition-colors font-medium"
    >
      {title}
    </Link>
  );
};

export default NavLink;
