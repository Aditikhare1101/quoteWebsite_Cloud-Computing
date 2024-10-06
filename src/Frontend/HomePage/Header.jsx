// import './header.css'

// export default function Header() {
//   return (
//     <div className='header'>
//         <img className='headerimg' src='./assests/headerimg.jpg' alt='image not found.'></img>
//         <div className="headertitles">
//           <div className="container">
//               {/* <span className='headertitlesmaller'>“The beautiful thing about learning is that no one can take it away from you.” — B.B. King  </span> */}
//               {/* <span className='headertitlesmaller'>“We write to taste life twice, in the moment and in retrospect.” — Anaïs Ni  </span>
//               <span className='headertitlesmaller'>“You fail only if you stop writing.” — Ray Bradbury</span>
//               <span className='headertitlesmaller'>“Curiosity is the wick in the candle of learning.” — William Arthur Ward</span>
//               <span className='headertitlesmaller'>“Fill your paper with the breathings of your heart.” — William Wordsworth</span>
//               <span className='headertitlesmaller'>“The scariest moment is always just before you start. After that, things can only get better.” — Stephen King</span>
//               <span className='headertitlesmaller'>“The more that you read, the more things you will know. The more that you learn, the more places you’ll go.” — Dr. Seuss</span>
//               <span className='headertitlesmaller'>“I write because I don’t know what I think until I read what I say.” — Flannery O’Connor</span> */}

//           </div>
//             <span className='headertitlesmaller'>“The beautiful thing about learning is that no one can take it away from you.” — B.B. King  </span>
//             <span className='headertitlebigger'>WANDER & BE</span>
//             <span className='headertitlebiggerabove'>WANDER & BE</span>
//             {/* <img className="insideImg" src="./assests/1.png" alt="image not found" /> */}
//             <span className="insideImgText">"Isn't it fascinationg to avoid going where you must be, and instead,
//               <br /> to be present where your heart truly belongs - A place where you can simply be,<br/> without wondering why you're there?" <br/> <p className='Name'>~ Aditi Khare</p></span>

//         </div>
        
//     </div>
//   )
// }


import React, { useState, useEffect } from 'react';
import './header.css';

export default function Header() {
  const quotes = [
    "“The beautiful thing about learning is that no one can take it away from you.” — B.B. King",
    "“We write to taste life twice, in the moment and in retrospect.” — Anaïs Nin",
    "“You fail only if you stop writing.” — Ray Bradbury",
    "“Curiosity is the wick in the candle of learning.” — William Arthur Ward",
    "“Fill your paper with the breathings of your heart.” — William Wordsworth",
    "“The scariest moment is always just before you start. After that, things can only get better.” — Stephen King",
    "“The more that you read, the more things you will know. The more that you learn, the more places you’ll go.” — Dr. Seuss",
    "“I write because I don’t know what I think until I read what I say.” — Flannery O’Connor",
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 10000); // Change quote every 10 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [quotes.length]);

  return (
    <div className='header'>
      <img className='headerimg' src='./assests/headerimg.jpg' alt='image not found.'></img>
      <div className="headertitles">
        <div className="container">
          {/* Display the current quote */}
          <span className='headertitlesmaller'>{quotes[currentQuoteIndex]}</span>
        </div>
        <span className='headertitlebigger'>WANDER & BE</span>
        <span className='headertitlebiggerabove'>WANDER & BE</span>
        <span className="insideImgText">
          "Isn't it fascinating to avoid going where you must be, and instead,
          <br /> to be present where your heart truly belongs - A place where you can simply be,
          <br /> without wondering why you're there?" 
          <br />
          <p className='Name'>~ Aditi Khare</p>
        </span>
      </div>
    </div>
  );
}
