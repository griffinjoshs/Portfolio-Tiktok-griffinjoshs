import React from "react";
import { Jumbotron, Container, Col, Row } from "react-bootstrap";
import "./styles/BottomSec.css";
// import BottomSecImage from "../BottomSec/BottomSecImage";
import { BiRightArrowCircle } from "react-icons/bi";
import { FaPatreon } from "react-icons/fa";
import Button from "../Button/Button";

// By importing the Header.css file, it is added to the DOM whenever this component loads

function BottomSecHome() {
  return (
    <Container fluid id="bottomSecPic">
      <Row className="secHeader">
        <Col sm={12} lg={1}></Col>
        <Col sm={12} lg={5} id="secVidCol">
          <br></br>
          <div className="space" id="vidSpacer"></div>
          <iframe
            width="560"
            height="315"
            id="video"
            src="https://www.youtube.com/embed/8VcVeW9hAZ8"
            title="youtubeVideo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Col>
        <Col lg={1}></Col>
        <Col sm={12} lg={5} id="jumbtronColumn">
          <Jumbotron>
            <h2>Subscribe To My Youtube Channel</h2>
            <br></br>
            <p>
              Youtube is where I will be offering the most amount of value you
              can possibly get from me! So Make sure to smash that subcribe
              button harder than u would smash Addison Rae!
            </p>
            <br></br>
            <a href="https://www.youtube.com/c/griffinjoshs">
              <Button buttonStyle="btn--outline" buttonSize="btn--large">
                Subscribe
              </Button>
            </a>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default BottomSecHome;
