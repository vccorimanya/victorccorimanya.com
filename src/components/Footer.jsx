function Footer () {

  let year = new Date().getFullYear();

  return(
    <footer className="footer container wrapper">
      <section className="footer-box">
        <h5 className="derechos">Email: <span id="email">raulccorimanyaalfaro@gmail.com</span></h5>
        <h5 className="derechos">Copyright © <span>{ year}</span> All rigths reserved</h5>
        <h5>With 🖤 for world</h5>
      </section>
    </footer>
  );
}

export default Footer;