import React, { useState, useEffect } from 'react';
import gif1 from '../src/assets/gif1.gif';
import gif4 from '../src/assets/gif4.gif';
import gif3 from '../src/assets/gif3.gif';
import gif6 from '../src/assets/gif6.gif';
import bgaudio from '../src/assets/bg-audio.m4a';
import { motion } from 'framer-motion';
import '../src/index.css'; // Import the CSS file for heart animations

function App() {
  const [yesButtonClicked, setYesButtonClicked] = useState(false);
  const [noButtonStyle, setNoButtonStyle] = useState({
    position: 'static',
  });

  // Function to handle heart popping animation
  useEffect(() => {
    const loveInterval = setInterval(() => {
      const r_num = Math.floor(Math.random() * 40) + 1;
      const r_size = Math.floor(Math.random() * 65) + 10;
      const r_left = Math.floor(Math.random() * 100) + 1;
      const r_bg = Math.floor(Math.random() * 25) + 100;
      const r_time = Math.floor(Math.random() * 5) + 5;

      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.style.width = `${r_size}px`;
      heart.style.height = `${r_size}px`;
      heart.style.left = `${r_left}%`;
      heart.style.background = `rgba(255,${r_bg - 25},${r_bg},1)`;
      heart.style.animation = `love ${r_time}s ease`;

      document.body.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, r_time * 1000); // Remove the heart after the animation duration
    }, 500);

    return () => clearInterval(loveInterval);
  }, []);

  const handleNoButtonHover = () => {
    const x = Math.random() * (window.innerWidth - 200);
    const y = Math.random() * (window.innerHeight - 250);
    setNoButtonStyle({
      ...noButtonStyle,
      position: 'absolute',
      left: `${x}px`,
      top: `${y}px`,
    });
  };

  const handleYesButtonClick = () => {
    setYesButtonClicked(true);
    const audio = new Audio(bgaudio);
    audio.play();
  };

  const handleNoButtonTouch = () => {
    handleNoButtonHover();
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-pink-300 ">
      <div className='mx-5 md:mx-20 m-0 justify-center flex flex-row'>   
        {yesButtonClicked? <h1 className='m-5 md:m-10 text-7xl md:text-5xl justify-center font-bold font-mono text-pink-600 text-center subpixel-antialiased '> Yayyy! can't wait to create unforgettable memories together! </h1> : <h1 className='m-5 md:m-10 text-5xl md:text-7xl justify-center font-bold font-mono text-pink-600 text-center subpixel-antialiased '>Hey do you wanna go out with me?</h1>}
        <img className="my-10 h-20 w-20" src={gif4} alt="" />
      </div>

      <div className="m-0 justify-center flex flex-col items-center">
        <motion.div
          className='mx-5 md:mx-20'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {yesButtonClicked ? (
            <>
              <motion.img
                className=' z-20 absolute justify-center'
                src={gif6}
                alt="confetti"
              />
              {/* <motion.img
                className='px-5 z-10 relative '
                src={gif3}
                alt="gif3"
              /> */}
            </>
          ) : (
            <motion.img
              className=''
              src={gif1}
              alt="gif1"
            />
          )}
        </motion.div>

        <div className='flex flex-row'>

          <button className='bg-pink-600 text-lg md:text-3xl m-5 md:m-10 px-10 md:px-20 py-2 md:py-4 rounded-full text-white justify-center font-semibold cursor-pointer border-violet-800 border-4 border-double subpixel-antialiased z-30 '
            id="yesButton" onClick={handleYesButtonClick}>
            {yesButtonClicked ? "Let's plan a date <3" : "YES"}
          </button>

          {yesButtonClicked ? null : <button
            id="noButton"
            className='bg-pink-600 text-lg md:text-2xl m-5 md:m-10 px-10 md:px-20 py-2 md:py-4 rounded-full text-white justify-center font-semibold cursor-pointer border-violet-800 border-4 border-double subpixel-antialiased'
            style={noButtonStyle}
            onMouseOver={handleNoButtonHover}
            onTouchStart={handleNoButtonTouch}
          >
            NO
          </button>}
        </div>
      </div>

      <footer className="fixed bottom-0 left-0 right-0 bg-white p-1 text-center text-sm">
        <a className="text-blue-800 underline px-5" href="https://twitter.com/Aniket_16May">Made with ❤️ by Aniket</a>
        <a className="text-blue-800 underline px-5" href="https://github.com/aniketsinha2002">Source Code</a>
      </footer>

    </div>
  );
}

export default App;
