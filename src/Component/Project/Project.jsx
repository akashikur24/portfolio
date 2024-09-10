/* eslint-disable react/prop-types */
import "./project.scss";
import crypto from "../../image/cryptotracker.png";
import waller from "../../image/Screenshot (68).png";
import blogging from "../../image/blogging.png";
import podcast from "../../image/prodcast.png";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
const items = [
  {
    id: 1,
    title: "CryptoTracker",
    img: crypto,
    desc: "Developed a real-time Crypto Tracker app using React.js, enabling users to monitor live cryptocurrency values Created dynamic comparison charts using Chart.js enabling users to analyze and compare different cryptocurrencies effectively.",
    live: "https://transcendent-biscuit-781711.netlify.app/",
    github: "https://github.com/akashikur24/crypto",
    stacks: ["ReactJs"],
  },
  {
    id: 2,
    title: "Podcast",
    img: podcast,
    desc: "Developed a podcast application using React.js and Firebase enabling users to upload episodes to a Firebase database Implemented user authentication allowing seamless login/logout functionalities for an enhanced user experience.Utilized Firebase database to securely store and manage podcast episodes, ensuring scalability and reliability.",
    live: "https://podcastfire.netlify.app/",
    github: "https://github.com/akashikur24/podCast",
    stacks: ["ReactJs", "Firebase"],
  },
  {
    id: 3,
    title: "Blogging App",
    img: blogging,
    desc: "Developed a MERN stack blogging app enabling CRUD operations for users' posts stored in MongoDB, Employed Express.js and Node.js to build a robust and scalable backend API for handling data requests. Integrated secure user authentication using JWT for enhanced data privacy",
    live: "https://blog-app-frontend-dusky-zeta.vercel.app/",
    github: "https://github.com/akashikur24/blog-app-frontend",
    stacks: ["ReactJs", "NodeJs", "expressJs", "mongoDb"],
  },
  {
    id: 4,
    title: "wallet",
    img: waller,
    desc: " I developed a comprehensive solution using Next.js, which allows users to authenticate, send money to other users, and add funds to their wallets. I implemented a bank webhook using Node.js and Prisma to manage transactions, utilizing dummy bank APIs to simulate money transfers. This project showcased my proficiency in building full-stack applications, handling user authentication, and integrating with external APIs to facilitate real-time transactions.",
    live: "https://wallet-psi-eight.vercel.app/",
    github: "https://github.com/akashikur24/wallet",
    stacks: ["JavaScript", "Nextjs", "reactjs", "Nodejs"],
  },
];
const SingleDiv = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <motion.div className="imageContainer" ref={ref}>
            <img src={item.img} alt="img" />
          </motion.div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <p>
              Technical stack :{" "}
              {item.stacks.map((item) => (
                <span key={item}>
                  {item}
                  {", "}
                </span>
              ))}
            </p>
            <div>
              <a target="_blank" href={item.live} rel="noreferrer">
                <button>See Demo</button>
              </a>

              <a target="_blank" href={item.github} rel="noreferrer">
                <button>GitHub</button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Project = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return (
    <div id="Projects" className="project" ref={ref}>
      <div className="progress">
        <h1>Projects Work</h1>
        <motion.div
          style={{ scaleX: scaleX }}
          className="progressBar"
        ></motion.div>
      </div>
      {items.map((item) => (
        <SingleDiv item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Project;
