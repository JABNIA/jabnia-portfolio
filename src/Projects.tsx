import "./styles/projects.css";

function Projects() {
  return (
    <div>
        <div className="projects-container">
          <Project link="https://jabnia.github.io/audiophile/" image="./images/pages/audiophile-ecommerce-webpage.png" siteName="AudioPhile ecommerce webpage" />
          <Project link="https://jabnia.github.io/audiophile/" image="./images/pages/audiophile-ecommerce-webpage.png" siteName="AudioPhile ecommerce webpage" />
          <Project link="https://jabnia.github.io/audiophile/" image="./images/pages/audiophile-ecommerce-webpage.png" siteName="AudioPhile ecommerce webpage" />
          <Project link="https://jabnia.github.io/audiophile/" image="./images/pages/audiophile-ecommerce-webpage.png" siteName="AudioPhile ecommerce webpage" />
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
