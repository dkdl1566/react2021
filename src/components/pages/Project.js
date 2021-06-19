import React from 'react';
import Header from '../Header';
import Layout from '../Layout';
// import PortInfo from '../basics/PortInfo';
import Footer from '../Footer';
import jQuery from 'jquery';
import { Link } from 'react-router-dom';
window.$ = window.jQuery = jQuery;
// import WrapTitle from '../basics/WrapTitle';

// 배경
// window.onload = function () {
//   var c = document.getElementById('canv'),
//     $ = c.getContext('2d'),
//     w = (c.width = window.innerWidth),
//     h = (c.height = window.innerHeight),
//     t = 0,
//     num = 550,
//     u = 0,
//     b,
//     x,
//     y,
//     _x,
//     _y,
//     _t = 1 / 60;

//   var anim = function () {
//     $.globalCompositeOperation = 'source-over';
//     window.requestAnimationFrame(anim);
//     $.fillStyle = 'hsl(0, 0%, 100%,)';
//     $.fillRect(0, 0, w, h);
//     $.globalCompositeOperation = 'lighter';
//     for (var i = 0; i < 1; i++) {
//       x = 0;
//       $.beginPath();
//       for (var j = 0; j < num; j++) {
//         x += 0.45 * Math.sin(11);
//         y = (x * Math.sin(i + 3.0 * t + x / 15)) / 15;
//         _x = x * Math.cos(b) + y * Math.sin(i);
//         _y = x * Math.sin(b) + y * Math.cos(i);
//         b = (j * 2.66 * Math.PI) / 4;
//         $.lineWidth = 0.04;
//         $.lineTo(w / 2 + _x, h / 2 + _y);
//       }
//       var g = $.createLinearGradient(w / 2 + _x, h / 2 + _y, 1, w / 2 + _x, h / 2 + _y);
//       g.addColorStop(0.1, 'hsla(' + u + ',95%,50%,1)');
//       g.addColorStop(0.5, 'hsla(0,0%,100%,1)');
//       g.addColorStop(1, 'hsla(0,0%,100%,1)');
//       $.strokeStyle = g;
//       $.stroke();
//     }
//     t += _t;
//     u -= 0.2;
//   };
//   anim();

//   window.addEventListener(
//     'resize',
//     function () {
//       c.width = w = window.innerWidth;
//       c.height = h = window.innerHeight;
//     },
//     false
//   );
// };

function ProjectText({ title, image, link }) {
  return (
    <div className='content content01'>
      <div className='content_tit'>
        <h3>{title}</h3>
      </div>
      <div className='content_img_box'>
        <div className='content_img'>
          <img src='img/site03@2x.jpg' alt='웹표준 사이트 만들기' />
          <img src={image} alt={title} />
        </div>
      </div>
      <div className='content_btn_wrap'>
        <Link to={link}>
          <span>VIEW</span>
        </Link>
      </div>
    </div>
  );
}

const ProjectInfo = [
  {
    id: '1',
    title: 'WEB STANDARD',
    image: 'img/web_standard_mok.png',
    link: 'http://dkdl1566.dothome.co.kr/web_standard/'
  },
  {
    id: '2',
    title: 'MEGABOX',
    image: 'img/megabox_mok.png',
    link: 'http://dkdl1566.dothome.co.kr/megabox/'
  },
  {
    id: '3',
    title: 'INDIGO',
    image: 'img/indigo_mok.png',
    link: 'http://dkdl1566.dothome.co.kr/indigo/'
  },
  {
    id: '4',
    title: 'HOLLYS',
    image: 'img/hollys_mok.png',
    link: 'http://dkdl1566.dothome.co.kr/hollys/'
  }
];

function Project() {
  return (
    <div id='wrap'>
      <Header />
      <Layout />
      <section>
        <div className='contents_wrap'>
          {ProjectInfo.map(txt => (
            <ProjectText title={txt.title} image={txt.image} key={txt.id} link={txt.link} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Project;
