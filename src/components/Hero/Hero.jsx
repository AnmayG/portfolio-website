import React, { useContext, useState, useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import Typed from 'typed.js';
import PortfolioContext from '../../context/context';
import GithubCorner from 'react-github-corner';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, cta } = hero;
  const el = useRef(null);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }

    const typed = new Typed(el.current, {
      strings: [
        'Student',
        'Developer',
        'Roboticist',
        'Programmer',
        'Mentor',
        'Debater',
        'Hacker',
        'Volunteer',
        'Representative',
      ], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      smartBackspace: true,
      loop: true,
      showCursor: true,
    });

    // Destroying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="hero" className="jumbotron">
      <GithubCorner href="https://github.com/AnmayG" direction="left"/>
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
            {title || 'Hi, my name is'}{' '}
            <span className="text-color-main">{name || 'Anmay Gupta'}</span>
            <br />
            {/* Element to display the typed.js stuff */}
            <span ref={el} />
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>
                {cta || 'Know more'}
              </Link>
            </span>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
