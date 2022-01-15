import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Accomplishments = () => {
    const { accomplishments } = useContext(PortfolioContext);

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
    }, []);

    return (
        <section id="accomplishments">
            <Container>
                <div className="accomplishments-wrapper">
                    
                </div>
            </Container>
        </section>
    );
}

export default Accomplishments;