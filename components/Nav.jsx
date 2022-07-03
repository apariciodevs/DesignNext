import style from "../styles/Nav.module.css";

import Image from "next/image";

const Nav = () => {
  return (
    <header className={style.navDisplay}>
      <div className={style.logoContainer}>
        <Image
                src="/favicon.ico"
                width={40}
                height={40}
                alt='logo'
        ></Image>
        <h1 className={style.logo}>Vercel</h1>
      </div>
      <nav></nav>
    </header>
  );
};

export default Nav;
