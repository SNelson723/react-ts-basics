import { type PropsWithChildren } from "react";

type HeaderProps = PropsWithChildren<{
  image: { src: string; alt: string };
}>;

const Header = ({ image, children }: HeaderProps) => {
  return (
    <header>
      {/* using the spread operator as a short cut over src={image.src} and alt={image.alt} */}
      <img {...image} />
      {children}
    </header>
  );
};

export default Header;
