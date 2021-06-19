import React, { useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer';

import { gsap } from 'gsap';
import { SlowMo } from 'gsap/EasePack';
gsap.registerPlugin(SlowMo);

// 1. Props
// 2.변수
// 3.map

function changeText() {
  var change = document.querySelector('.toptext');
  if (change) {
    change.textContent = '01';
  }
}
changeText();

function Main() {
  useEffect(() => {
    gsap.to('.cube_sec', {
      duration: 2,
      rotate: 360,
      repeat: -1,
      yoyo: true,
      ease: SlowMo.easeNone
    });
    gsap.to('.cube_sec1 .cube_box', {
      duration: 2,
      opacity: 0.5,
      x: -300,
      repeat: -1
    });
    gsap.to('.cube_sec2 .cube_box', {
      duration: 2,
      opacity: 0.5,
      x: 300,
      repeat: -1
    });
    gsap.to('.cube_sec3 .cube_box', {
      duration: 2,
      opacity: 0.5,
      y: -300,
      repeat: -1
    });
    gsap.to('.cube_sec4 .cube_box', {
      duration: 2,
      opacity: 0.5,
      y: 300,
      repeat: -1
    });
  });

  return (
    <div id='wrap'>
      <Header />
      <section>
        <div className='cube_sec cube_sec1'>
          <div className='cube_box'>
            <div className='cube'>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        <div className='cube_sec cube_sec2'>
          <div className='cube_box'>
            <div className='cube'>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        <div className='cube_sec cube_sec3'>
          <div className='cube_box'>
            <div className='cube'>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        <div className='cube_sec cube_sec4'>
          <div className='cube_box'>
            <div className='cube'>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        <div className='cube_sec cube_sec5'>
          <div className='cube_box'>
            <div className='cube'>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Main;
