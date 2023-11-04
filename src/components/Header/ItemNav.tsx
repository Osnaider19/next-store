import Link from "next/link";

type Props = {
  link: string;
  name: string;
};
export const ItemNav = ({ link, name }: Props) => {
  return (
    <li>
      <Link href={`${link}`} className="font-semibold hover:text-[#0156FF] transition-colors duration-200">
        <span className="font-semibold">{name}</span>
      </Link>
    </li>
  );
};
