import React from 'react';
import { Link, Element } from 'react-scroll';
import '@/styles/scroller.scss'; // Import your SCSS file here

const Scroller: React.FC = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="section1" spy={true} smooth={true} duration={500}>
              Section 1
            </Link>
          </li>
          <li>
            <Link to="section2" spy={true} smooth={true} duration={500}>
              Section 2
            </Link>
          </li>
          <li>
            <Link to="section3" spy={true} smooth={true} duration={500}>
              Section 3
            </Link>
          </li>
        </ul>
      </nav>
      <div className="scroll-container">
        <Element name="section1" className="section">
          Section 1 Content
        </Element>
        <Element name="section2" className="section">
          Section 2 Content
        </Element>
        <Element name="section3" className="section">
          Section 3 Content
        </Element>
      </div>
    </div>
  );
};

export default Scroller;
