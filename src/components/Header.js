// dependencies
import React from 'react';
// images
import PokedexImage from '../assets/Pokedex.png';
const Header = () => {
    return (
        <div className='header'>
            <img
                src={PokedexImage}
                alt='Pokedex Title'
            />
        </div>
    );
};

export default Header;