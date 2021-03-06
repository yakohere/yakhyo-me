import React from "react";
import styled from "styled-components";

const skill = (props) => {
  return (
    <Container>
      <div className="skill-logo">
        <img className={props.img_classname} src={props.img} alt="mg" />
      </div>
      <div className="description">{props.description}</div>
      <div className="confidence">
        Confidence
        <div className="circles">
          <div className={props.circle1}></div>
          <div className={props.circle2}></div>
          <div className={props.circle3}></div>
          <div className={props.circle4}></div>
          <div className={props.circle5}></div>
        </div>
      </div>
    </Container>
  );
};

export default skill;

const Container = styled.div`
  width: 250px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  box-shadow: 10px 10px 10px 2px rgba(101, 101, 101, 0.29);
  border-radius: 23px;
  font-family: "Poppins", sans-serif;
  font-size: 15px;
  line-height: 20px;
  margin: 15px;
  @media (max-width: 500px) {
    width: 300px;
  }

  .skill-logo {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 69px;
      height: 69px;
      border-radius: 11px;
    }

    .react {
      width: 89px;
      height: 89px;
      animation: spin 4s infinite linear;
    }
    @keyframes spin {
      0% {
        transform: rotate(360deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }

    .node {
      width: 115px;
      height: 67px;
    }

    .mongo {
      width: 189px;
      height: 51px;
    }
    .mysql {
      width: 120px;
      height: 61px;
    }
    .nginx {
      width: 160px;
      height: auto;
    }
  }

  .description {
    width: 90%;
    height: 130px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .confidence {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: bold;
    font-size: 17px;

    .circles {
      width: 70%;
      display: flex;
      align-items: center;
      justify-content: space-around;

      .blue-circle {
        width: 30px;
        height: 30px;
        background: #3769ca;
        border-radius: 100%;
        cursor: pointer;
        :hover {
          border: 3px solid white;
          box-sizing: border-box;
        }
      }

      .white-circle {
        width: 30px;
        height: 30px;
        background: #ffffff;
        border: 1px solid #3769ca;
        box-sizing: border-box;
        border-radius: 100%;
        cursor: pointer;
        :hover {
          border: 4px solid #3769ca;
          box-sizing: border-box;
        }
      }
    }
  }

  :hover {
    .skill-logo {
      img {
        animation: rotation 0.8s infinite linear;

        @keyframes rotation {
          0% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(10deg);
          }
          50% {
            transform: rotate(0deg);
          }
          75% {
            transform: rotate(-10deg);
          }
          99% {
            transform: rotate(0deg);
          }
        }
      }
    }
  }
`;
