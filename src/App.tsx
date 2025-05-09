import { motion } from "motion/react";
import { Element } from "react-scroll";
import "./App.css";
import Header from "./components/header.tsx";
import NameTitle from "./components/nameTitle.tsx";
import LineBreak from "./components/lineBreak.tsx";
import Bio from "./components/bio.tsx";
import Arrow from "./components/arrow.tsx";
import NavBar from "./components/navBar.tsx";
import StarMountain from "./components/starMountain.tsx";
import Work from "./components/Work.tsx";
import Contact from "./components/contact.tsx";

function App() {
  return (
    <>
      <Element name="home">
        <NavBar />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.5, delay: 0.2 },
          }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <Header />
        </motion.div>

        <NameTitle />

        <Arrow />
      </Element>

      <Bio />
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2, delay: 0.2 }}
      >
        <LineBreak marginTop={200} width={65} />
      </motion.div>
      <Element name="game" />
      <StarMountain />

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2, delay: 0.2 }}
      >
        <LineBreak marginTop={200} width={90} />
      </motion.div>
      <Element name="work" />
      <Work />
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2, delay: 0.2 }}
      >
        <LineBreak marginTop={200} width={90} />
      </motion.div>

      <Element name="contact" />
      <Contact />
      <p className="credit">site by me</p>
    </>
  );
}

export default App;
