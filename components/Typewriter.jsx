'use client';
import TypewriterComponent from 'typewriter-effect';
const Typing = ({ roles }) => {
  return (
    <TypewriterComponent
      options={{
        strings: roles,
        autoStart: true,
        loop: true,
        deleteSpeed: 100,
        delay: 100,
        pauseFor: 2000,
      }}
    />
  );
};

export default Typing;
