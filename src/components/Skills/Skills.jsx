import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';

const Skills = () => {
    const { languages, frameworks, tech } = useContext(PortfolioContext);

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
        <section id="skills">
            <Container>
                <div className="skills-wrapper">
                    <Title title="Skills" />
                        <h2><b>Languages</b></h2>
                        <Row>
                            {
                                languages.map((language) => {
                                    const { name, icon } = language;
                                    return (
                                        <Col>
                                            <Fade
                                                left={isDesktop}
                                                bottom={isMobile}
                                                duration={1000}
                                                delay={500}
                                                distance="30px"
                                            ></Fade>
                                            <span>
                                                <div className="text-center skills-tile">
                                                <img src={icon} width={50}/>
                                                <p className = "text-center" style={{marginTop: "4px" }}>
                                                {name}
                                                </p>
                                                </div>
                                            </span>
                                        </Col>
                                    );
                                })
                            }
                        </Row>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <h2><b>Frameworks</b></h2>
                        <Row>
                            {
                                frameworks.map((framework) => {
                                    const { name, icon } = framework;
                                    return (
                                        <Col>
                                            <Fade
                                                left={isDesktop}
                                                bottom={isMobile}
                                                duration={1000}
                                                delay={500}
                                                distance="30px"
                                            ></Fade>
                                            <span>
                                                <div className="text-center skills-tile">
                                                <img src={icon} width={50}/>
                                                <p className = "text-center" style={{marginTop: "4px" }}>
                                                {name}
                                                </p>
                                                </div>
                                            </span>
                                        </Col>
                                    );
                                })
                            }
                        </Row>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <h2><b>Technologies</b></h2>
                        <Row>
                            {
                                tech.map((language) => {
                                    const { name, icon } = language;
                                    return (
                                        <Col>
                                            <Fade
                                                left={isDesktop}
                                                bottom={isMobile}
                                                duration={1000}
                                                delay={500}
                                                distance="30px"
                                            ></Fade>
                                            <span>
                                                <div className="text-center skills-tile">
                                                <img src={icon} width={50}/>
                                                <p className = "text-center" style={{marginTop: "4px" }}>
                                                {name}
                                                </p>
                                                </div>
                                            </span>
                                        </Col>
                                    );
                                })
                            }
                        </Row>
                </div>
            </Container>
        </section>
    );
}

export default Skills;