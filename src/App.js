// dependencies
import React from 'react';
// components
import NavBar from './components/Navbar';
import Header from './components/Header';
import PokemonList from './components/PokemonList';

const App = () => {
    return (
        <div className='app-content'>
            <NavBar />
            <Header />
            <PokemonList />
        </div>
    );
};

export default App;