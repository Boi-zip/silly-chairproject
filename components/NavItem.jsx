import Link from "next/link";
const NavItem = ({ text, href, active }) => {
  return (
    <Link href={href}>
      <p
        className={`font-semibold nav__item ${ /*Made the text thicker, by request from Jacob*/
          active ? "active" : ""
        }`}
      >
        {text}
      </p>
    </Link>
  );
};

export default NavItem;