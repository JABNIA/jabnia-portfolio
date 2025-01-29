import "./styles/projects.css";

function Projects() {
  return (
    <div>
        <div className="projects-container">
          <Project link="https://jabnia.github.io/audiophile/" image="./images/pages/audiophile-ecommerce-webpage.png" siteName="AudioPhile ecommerce webpage" />
          <Project link="https://jabnia.github.io/custom-card/" image="./images/pages/custom-card.png" siteName="Custom Card App" />
          <Project link="https://jabnia.github.io/password-generator/" image="./images/pages/password-generatot.png" siteName="Password Generator Web App" />
          <Project link="https://jabnia.github.io/dev-finder/" image="./images/pages/dev-finder.png" siteName="Dev Finder App" />
          <Project link="https://jabnia.github.io/tip-calculator/" image="./images/pages/tip-calculator.png" siteName="tip calculator" />
          <Project link="https://jabnia.github.io/rating-app/" image="./images/pages/rating-app.png" siteName="Interactive rating app" />
        </div>
    </div>
  )
}

export default Projects;


function Project({ link, image, siteName }: {link: string, image: string, siteName: string}) {
  return (
    <div className="project-wrapper">
      <a href={link} className="project-link">
        <img className="project-image" src={image} alt={siteName} />
        <h3 className="project-name">{siteName}</h3>
      </a>
    </div>
  )
}
