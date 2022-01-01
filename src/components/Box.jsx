import { Link } from "react-router-dom"

const Box = ({ props, title, description, url }) => {

  let blog = true

  if (blog===true) {
    return (
      <div className="container">
        <div className="box">

          <h1>{title}</h1>
          <p>{description}</p>
          <div className="box-actions flex">
            <a className="button" href={url} target="_blank" rel="noreferrer">Ver más</a>

          </div>
        </div>
      </div>
    )
  }
  else
    return (
      <div className="box">
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="box-actions flex">
          <Link to={url}>
            <button className="button" >Ver más</button>
          </Link>
        </div>
      </div>
    )
}



export default Box