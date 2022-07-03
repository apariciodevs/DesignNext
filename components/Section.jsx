import style from "../styles/Section.module.css";

import Image from "next/image";

const Section = () => {
  return (
    <section className={style.display}>
      <div className={style.textContainer}>
        <h1 className={style.title}>Live </h1><h1 className={style.titleColor}>Design.</h1>
      </div>
      <div className={style.imgContainer}/>
    </section>
  );
};

export default Section;
<div></div>;
