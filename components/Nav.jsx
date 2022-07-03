import style from "../styles/Nav.module.css";

import Image from "next/image";

const Nav = () => {
  return (
    <header className={style.navDisplay}>
      <div className={style.logoContainer}>
        <Image
                src="/icon.png"
                width={25}
                height={25}
                alt='logo'
        ></Image>
        <h1 className={style.logo}>Wrine UI</h1>
      </div>
      <nav></nav>
    </header>
  );
};

export default Nav;
