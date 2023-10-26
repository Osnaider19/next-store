import Link from "next/link";

export const Nav = () => {
  return (
    <ul className="flex items-center gap-x-3  flex-grow">
      <li>
        <Link href={"#"} className="font-semibold">
          Laptops
        </Link>
      </li>
      <li>
        <Link href={"#"} className="font-semibold">
          Desktop PCs
        </Link>
      </li>
      <li>
        <Link href={"#"} className="font-semibold">
          Networking Devices
        </Link>
      </li>
      <li>
        <Link href={"#"} className="font-semibold">
          Printers & Scanners
        </Link>
      </li>
      <li>
        <Link href={"#"} className="font-semibold">
          PC Parts
        </Link>
      </li>
    </ul>
  );
};
