import {BrowserRouter} from 'react-router-dom';
import {Interests, Contact, Experience, Feedbacks, HashRouterProps, Navbar, Tech, Works,Hero, StarsCanvas} from './components';

const App = () =>{
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
          {/* Hello ! - This app is under construction! */}
        </div>
        <Interests/>
        <Experience/>
        <Tech/>
        <Works/>
        <Feedbacks/>

        {/*Div - To Display 3d star objects */}

        <div className='relative z-0'>
          <Contact/>
          <StarsCanvas/>
        </div>

      </div>
    </BrowserRouter>
  );
  
}

export default App;
