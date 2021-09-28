import c from './App.module.scss';
import {Header} from "./components/Header/Header";
import {AboutMe} from "./components/Main/AboutMe";
import {Skills} from "./components/Skills/Skills";
import {Projects} from "./components/Projects/Projects";
import {Wishes} from "./components/Wishes/Wishes";
import {Contacts} from "./components/Contacts/Contacts";
import {Footer} from "./components/Footer/Footer";

function App() {
    return (
        <div className={c.App}>
            <Header/>
            <AboutMe/>
            <Skills/>
            <Projects/>
            <Wishes/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
