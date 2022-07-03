import { motion } from "framer-motion"
import { useRef } from "react";


import style from "../styles/Section.module.css";

import Image from "next/image";

const Section = () => {
    const constraintsRef = useRef(null);

  return (
    <section className={style.display} ref={constraintsRef}>
      <div className={style.textContainer}>
        <h1 className={style.title}>Live </h1><h1 className={style.titleColor}>Design.</h1>
      </div>
      <motion.div className={style.imgContainer} drag dragConstraints={constraintsRef}   whileHover={{ scale: 1.1 }}
/>
    </section>
  );
};

export default Section;
<div></div>;
