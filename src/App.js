import './App.scss';
import Header from './components/Header';
import Section from './components/Section';
import SmallSection from './components/SmallSection';
import CreamSection from './components/CreamSection';
import Carousel from './components/Carousel';
import { Data } from './components/Data';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Section></Section>
      <SmallSection></SmallSection>
      <CreamSection></CreamSection>
      <Carousel slides={Data}></Carousel>
      <Footer></Footer>
    </div>
  );
}

export default App;
