import "./styles/homepage.css"


function HomePage() {

  
  return (
    <div className="homepage">
      <h1>Jabnia Project</h1>
      <p className="introdution">
        <span className="runningLine">
          My name is Vakho And i Create Websites, using React And Typescript...
        </span>
      </p>
      <div className="motivation">
      <div>
          <h3 className="period">Past</h3>
          <p>
            I was working hard in workoshop where every thing went well until som complications with my healt, So i decided to change my life and start learning programming
          </p>
        </div>
        <div>
          <h3 className="period">Currently</h3>
          <p>
            I am Front-developer and my focus is websites based on react. I study JS and it's lybraries and Read books Every day. Every day is a unstopable battle, and it's kind of funny too.
          </p>
        </div>
        <div>
          <h3 className="period">Future</h3>
          <p>
            I want to land a job where i can use my skills and knowledge, get more experience and be a part of most inteligent community in the world. And make some money too... HaHa.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HomePage
