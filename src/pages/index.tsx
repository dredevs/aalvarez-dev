import React from 'react';
import Navbar from '../components/navbar';
import About from '../components/about';
import Spotify from '../components/spotify';
import TechStack from '../components/techstack';
import Repositories from '../components/repositories';


const App: React.FC = () => {
    return (
        <div>
            <Navbar />
            <About />
            <Repositories />
            <Spotify />
        </div>
    );
};

export default App;