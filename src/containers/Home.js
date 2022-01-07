import React, { useEffect, useState } from "react";
import Box from "../components/Box";
import projectsData from '../static-data/projects'

const Home = () => {

  const [projects, setList] = useState([]);

  useEffect(() => {
    setList(projectsData)
  },[])

  return (
    <div className="wrapper">
      <section className="hero container">
        <div className="hero_text">
          <h1 className="m-0 f-title">
            Bienvenido a mi espacio soy  <span>Victor Ccorimanya</span>
          </h1>
          <p className="m-0 f-p">
            desarrollador <span>Frontend</span>
          </p>
        </div>
      </section>
      <section >
        <div className="container">
          <h2 className="line">Proyectos</h2>
        </div>
        <div className="flex-wrap">
        {projects.map(item => (
          <Box key={item.id} {...item}/>
        ))}
      </div>

      </section>
    </div>
  );
}

export default Home;