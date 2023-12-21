import React from "react";
import { card } from "../assets";
import styles, { layout } from "../styles";
import Button from "./Button";

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className="sm:block hidden" /> in few easy
          steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
          deserunt cumque neque vero vitae, laboriosam quas possimus pariatur
          facere veniam amet voluptas ad laborum animi commodi ipsam saepe
          quisquam voluptate.
        </p>
        <Button styles={`mt-10`} />
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="" />
      </div>
    </section>
  );
};

export default CardDeal;
