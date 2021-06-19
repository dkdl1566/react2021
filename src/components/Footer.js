// import React from 'react';
// import { Link } from 'react-router-dom';

// function Footer() {
//     return (
//         <footer id="footer">
//             <div className="container">
//                 <div className="footer__inner">
//                     <div>
//                         <p>Let’s create something new</p>
//                         <h3>
//                             LET`S Get IN
//                             <br />
//                             TOUCH
//                         </h3>
//                         <Link to="/contact" className="contact">
//                             Contact Me
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// }

// export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='footer'>
      <h2>
        <p>
          <span>PORTFOLIO</span>
        </p>
      </h2>
      <div className='bottom_text_wrap'>
        <div className='page_num'>
          <div className='page_icon_sec'>
            <div className='page_icon'></div>
            <div className='page_icon_num'>
              <p>
                <span>01</span>
              </p>
            </div>
          </div>
          <div className='bottom_text_info'>
            <p>Welcome my portfolio site If you scroll down, you can see a lot of content</p>
          </div>
        </div>
      </div>
      <div className='page_nav'>
        <div className='page_nav_btns'>
          <div className='next_btns'>
            <p>
              <Link to='/project'>
                <span>PROJECT</span>
              </Link>
            </p>
            <p>
              <Link to='/script'>
                <span>SCRIPT</span>
              </Link>
            </p>
            <p>
              <Link to='/css'>
                <span>CSS</span>
              </Link>
            </p>
            <p>
              <Link to='/contact'>
                <span>CONTACT</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
