import "./App.css"
import Text from "./components/Text"
import Nav from "./components/Nav"
import Header from "./components/Header"
import About from "./components/About"
import { NavProvider , FilesProvider , ProjectsProvider , MinimizeProvider  } from "./contexts"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Favourites from "./components/Favourites"
import Games from "./components/Games"
import Media from "./components/Media"
import Img from "./components/Image"
export default function App() {
  return (
    <div className="app">
      <NavProvider>
      <FilesProvider>
      <ProjectsProvider>
      <MinimizeProvider>    
              <Header/>
              <Text />
              <Nav />
              <About />
              <Skills />
              <Projects />
              <Contact />
              <Favourites />  
              <Games />  
              <Img/>
              <Media />
      </MinimizeProvider>        
      </ProjectsProvider>
      </FilesProvider>
      </NavProvider>
    </div>
  )
}
