import c from './App.module.scss';
import {Header} from "./components/Header/Header";
import {Home} from "./components/Home/Home";
import {About} from "./components/About/About";
import {Skills} from "./components/Skills/Skills";
import {Projects} from "./components/Projects/Projects";
import {Contact} from "./components/Contact/Contact";
import {Footer} from "./components/Footer/Footer";


function App() {
    return (
        <div className={c.activeDark}>
            <Header/>
            <Home/>
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
