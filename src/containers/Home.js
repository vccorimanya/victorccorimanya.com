import React, { useEffect, useState } from "react";
import Form from "../components/Form";
import Box from "../components/Box"
import projectsData from '../static-data/projects'

const Home = () => {

  const [projects, setList] = useState([]);

  useEffect(() => {
    setList(projectsData)
  },[])

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
      <section >
        <div className="container">
          <h2 className="line">Projects</h2>
        </div>
      <div className="box-container ">
        {projects.map(item => (
          <Box key={item.id} {...item}/>
        ))}
      </div>

      </section>
      <div className="form-container ">

        <Form />

      </div>
    </>
  );
}

export default Home;