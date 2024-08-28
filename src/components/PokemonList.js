// dependencies
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
// components
import PokemonCard from './PokemonCard';
// icons
import { CgPokemon } from 'react-icons/cg';
// api
import axios from 'axios';

const buttonHover = {
    hover: {
        scale: 1.10
    }
};

const PokemonList = () => {
    const [currentPageURL, setCurrentPageURL] = useState('https://pokeapi.co/api/v2/pokemon');
    const [nextPageURL, setNextPageURL] = useState('');
    const [prevPageURL, setPrevPageURL] = useState('');
    const [pokemons, setPokemons] = useState([]);
    const [selectedId, setSelectedId] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        axios.get((currentPageURL)).then((res) => {
            setPokemons(res.data.results);
            setNextPageURL(res.data.next);
            setPrevPageURL(res.data.previous);
        });
        setLoading(false);
    }, [currentPageURL]);

    return (
        <>
            {loading ? (
                <div className='pokemon-loading-icon'>
                    <CgPokemon />
                </div>
            ) : (
                <div className='pokemon-cards-container' >
                    <div className='pokemon-cards'>
                        {pokemons.map((p) => (
                            <PokemonCard
                                key={p.name}
                                url={p.url}
                                selectedId={selectedId}
                                setSelectedId={setSelectedId}
                            />
                        ))}
                    </div >
                    <div className='arrow-controls'>
                        <motion.div
                            className={`arrow-left ${!prevPageURL ? 'disabled' : ''}`}
                            onClick={prevPageURL && (() => setCurrentPageURL(prevPageURL))}
                            whileHover='hover'
                            variants={prevPageURL ? buttonHover : ''}
                            disabled={!prevPageURL}
                        >
                            <i className='material-symbols-outlined'>
                                arrow_back
                            </i>
                        </motion.div>
                        <motion.div
                            className={`arrow-right ${!nextPageURL ? 'disabled' : ''}`}
                            onClick={nextPageURL && (() => setCurrentPageURL(nextPageURL))}
                            whileHover='hover'
                            variants={nextPageURL ? buttonHover : ''}
                            disabled={!nextPageURL}
                        >
                            <i className='material-symbols-outlined'>
                                arrow_forward
                            </i>
                        </motion.div>
                    </div>
                </div>
            )}
        </>
    );
};

export default PokemonList;