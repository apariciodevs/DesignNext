import Link from "next/link";

import style from "../styles/Hero.module.css";

const Hero = () => {
  return (
    <div className={style.display}>
      <div className={style.textContainer}>
        <span className={style.textBox}>
          <h1 className={style.titleTop}>Design.</h1>
        </span>
        <span>
          <h1 className={style.titleMid}>Develop.</h1>
        </span>
        <span>
          <h1 className={style.titleBottom}>Ship.</h1>
        </span>
      </div>
      <div className={style.btnContainer}>
        <Link href="/"> 
          
          <a className={style.btnLeft}> Start Deploying</a>
        </Link>
        <Link href="/">
        <a className={style.btnRight}>Get a Demo</a>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
