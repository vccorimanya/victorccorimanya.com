const Box = ({ props, title, description, url, codigo}) => {
    return (
      <div className="container">
        <div className="box">

          <h1>{title}</h1>
          <p>{description}</p>
          <div className="box-actions flex">
            <a className="button" href={url} target="_blank" rel="noreferrer">Ver proyecto</a>
            <a className="button" href={codigo} target="_blank" rel="noreferrer">Ver código</a>

          </div>
        </div>
      </div>
    )
  }


export default Box