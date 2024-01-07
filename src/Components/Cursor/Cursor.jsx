import React, { useEffect } from 'react';
import gsap from 'gsap';
import "./Cursor.css"

const Cursor = () => {
  useEffect(() => {
    const cursorEffect = () => {
      const contain = document.querySelector('#main');
      const cursor = document.querySelector('.cursor');

      contain.addEventListener('mousemove', function (val) {
        gsap.to(cursor, {
          x: val.x,
          y: val.y,
        });
      });
    };

    cursorEffect();

    // Cleanup event listener when the component is unmounted
    return () => {
      const contain = document.querySelector('#main');
      contain.removeEventListener('mousemove', cursorEffect);
    };
  }, []);

  return <div className="cursor"></div>;
};

export default Cursor;
