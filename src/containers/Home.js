import React from "react";
import Form from "../components/Form";
const Home = () => {
  return (
    <>
      <section className="hero container">
        <div className="hero__image">
        </div>
        <div className="hero_text">
          <h1 className="m-0 f-title">
            Welcome to my website i'm <span>Victor Ccorimanya</span>
          </h1>
          <p className="m-0 f-p">
            software <span>Developper</span>
          </p>
        </div>
      </section>
    <div className="form-container">
        <Form/>
    </div>
    </>
  );
}

export default Home;