import home from "../styles/Home.module.css";
import Navbar from "../src/components/Navbar";
import Typewriter from "typewriter-effect";
import styled from 'styled-components';

export default function Home() {

  return (
    <>
      <div className={home.bg}>oi oi oi </div>
      <Navbar />
      <div className={home.typed_letters}>
        <h2>Hello,</h2>
        <h2>
        <Typewriter
          // onInit={(typewriter) => {
          //   typewriter
          //     .typeString("Hello!")
          //     .pauseFor(1500)
          //     .deleteAll()
          //     .typeString("My name is Luiz Gustavo")
          //     .start();
          // }}
          options={{
            strings: ['I`m Luiz Gustavo', 'Brazilian Fullstack Developer'],
            autoStart: true,
            loop: true,
            deleteSpeed: 20,
            delay: 90
          }}
        />
        </h2>
        
      </div>
    </>
  );
}
