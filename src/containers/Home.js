import React, { useEffect, useState } from "react";
import Form from "../components/Form";
import Box from "../components/Box"


const Home = () => {
  const data = [
    {
      id: 1,
      title: 'Platzi store',
      description: 'Este proyecto fue parte de la carrera de python en platzi'
    },
    {
      id:2,
      title: 'Platzi store',
      description: 'Este proyecto fue parte de la carrera de python en platzi'
    },
    {
      id: 3,
      title: 'Platzi store',
      description: 'Este proyecto fue parte de la carrera de python en platzi'
    }

  ]

  const [projects, setList] = useState([]);

  useEffect(() => {
    setList(data)
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
      <div className="box-container">
        {projects.map(item => (
          <Box key={item.id} {...item} />
        ))}
      </div>
      <div className="form-container">

        <Form />

      </div>
    </>
  );
}

export default Home;