import React from "react";
import styled from "styled-components";
import Project from "./Project";

import Book from "../../assets/book.svg";
import BurgerBuilder from "../../assets/burger.svg";
import Corona from "../../assets/corona.svg";

const portfolio = () => {
  return (
    <Container id="portfolio">
      <div className="portfolio">
        <h2>Portfolio</h2>
        <div className="projects">
          <Project
            img={Corona}
            title="COVID-19 Tracker"
            description="Covid 19 tracker for Uzbekistan."
            link="https://www.uzkorona.info/"
            githubLink="https://github.com/devyako/corona-uzb-live"
          />
          <Project
            img={Book}
            title="Online Book Store"
            description="Bunch of really recommended books by successful people."
            link="https://yakos-books.netlify.app/"
            githubLink="https://github.com/devyako/mybookstore"
          />
          <Project
            img={BurgerBuilder}
            title="Farshburger"
            description="A web site on which customers can see the menu of a restaurant and order a food."
            link="https://www.farshburger.biz/"
            githubLink="https://github.com/devyako/farshburger"
          />
        </div>
      </div>
    </Container>
  );
};

export default portfolio;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 100px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  .portfolio {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: "Poppins", sans-serif;
    h2 {
      text-decoration: underline;
    }
  }

  .projects {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
  }
`;