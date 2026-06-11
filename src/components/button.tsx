import Link from "next/link";
import { ArrowButton } from "../assets/icons";
import { ReactNode } from "react";

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  textClassName?: string;
  iconClassName?: string;
  icon?: ReactNode;
}

const Button = ({
  text,
  href,
  onClick,
  className = "",
  textClassName = "",
  iconClassName = "",
  icon = <ArrowButton />,
}: ButtonProps) => {
  const baseStyles =
    "px-4 py-2 rounded-full border border-white text-sm font-medium leading-5 text-white transition-all duration-300 hover:bg-white hover:text-black flex items-center gap-2";

  const content = (
    <>
      <span className={textClassName}>{text}</span>

      <span className={`p-1 ${iconClassName}`}>
        {icon}
      </span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`${baseStyles} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${baseStyles} ${className}`}>
      {content}
    </button>
  );
};

export default Button;