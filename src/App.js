// dependencies
import React from 'react';
// components
import NavBar from './components/Navbar';
import Header from './components/Header';
import PokemonList from './components/PokemonList';
import Footer from './components/Footer';

const App = () => {
    return (
        <div className='app-content'>
            <NavBar />
            <Header />
            <PokemonList />
            <Footer />
        </div>
    );
};

export default App;