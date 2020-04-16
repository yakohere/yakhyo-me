import React from "react";
import styled from "styled-components";
import Logo from "../../assets/yakhyo.png";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";

const navigation = (props) => {
  return (
    <Container>
      <div className="left">
        <img className="logo" src={Logo} />
        <Scroll to="home" smooth={true} duration={1000} className="link">
          Home
        </Scroll>
        <Scroll to="about" smooth={true} duration={1000} className="link">
          About
        </Scroll>
        <Scroll to="portfolio" smooth={true} duration={1000} className="link">
          Portfolio
        </Scroll>
      </div>

      <div className="right">
        <Link to={props.to}>{props.path}</Link>
        <Scroll to="contact" smooth={true} duration={1000} className="blue-btn">
          Contact
        </Scroll>
      </div>
    </Container>
  );
};

export default navigation;

const Container = styled.div`
  width: 100%;
  height: 90px;
  top: 0px;
  position: fixed;
  z-index: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  border-bottom: 1px solid #727272;
  @media (max-width: 500px) {
    height: 60px;
  }

  .left {
    width: 60%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media (max-width: 500px) {
      width: 50%;
    }

    .logo {
      width: 140px;
      height: 70px;
      @media (max-width: 500px) {
        width: 110px;
        height: 55px;
      }
    }

    .link {
      cursor: pointer;
      color: grey;
      transition: 0.5s;
      @media (max-width: 500px) {
        display: none;
      }
      :hover {
        color: black;
        transition: 0.5s;
      }
    }
  }

  .right {
    width: 20%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media (max-width: 500px) {
      width: 35%;
    }

    a {
      text-decoration: none;
      color: grey;
      transition: 0.5s;
      @media (max-width: 500px) {
        background: #3769ca;
        border-radius: 5px;
        color: white;
        padding: 5px;
        border: 2px solid #3769ca; 
        :hover {
          background-color: white;
          color: #3769ca;
        }
      }
      :hover {
        color: black;
      }
    }

    .blue-btn {
      cursor: pointer;
      background: #3769ca;
      border-radius: 5px;
      color: white;
      padding: 5px;
      border: 2px solid #3769ca;
      @media (max-width: 500px) {
        display: none;
      }
      :hover {
        background-color: white;
        color: #3769ca;
      }
    }
  }
`;
