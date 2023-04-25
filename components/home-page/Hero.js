import Image from "next/image";
import classes from "./Hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/karla.JPG"
          alt="An image showing Karla"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Karla!</h1>
      <p>
        I blog about web development - especially frontend technologies like
        React, Nextjs and Typescript.
      </p>
    </section>
  );
}

export default Hero;
