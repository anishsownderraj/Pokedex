// dependencies
import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
// components
import PokemonDetail from './PokemonDetail';
// assets
import pokeBall from '../assets/poke-ball.svg';
// utils
import { defineIcon } from './utils/IconTypes';
// api
import axios from 'axios';

const cardHover = {
    hover: {
        y: -20,
        transition: {
            duration: 0.8,
            type: 'spring',
            bounce: 0.65
        },
        scale: 1.05
    }
};

const PokemonCard = ({
    url,
    selectedId,
    setSelectedId
}) => {
    const [pokemonCard, setPokemonCard] = useState([]);
    const [cardSelected, setCardSelected] = useState(false);
    const [loading, setLoading] = useState(true);

    function padLeadingZeros(num, size) {
        var s = num + '';
        while (s.length < size) s = '0' + s;
        return s;
    }

    const exitCard = () => {
        setSelectedId('');
        setCardSelected(false);
    };

    useEffect(() => {
        setLoading(true);
        axios.get(url).then((res) => {
            if (res.data) {
                setPokemonCard(res.data);
                setLoading(false);
            }
        });
    }, [url]);

    return (
        <>
            {loading ? (
                <div />
            ) : (
                <>
                    <motion.div
                        className={`pokemon-card-container ${pokemonCard?.types[0].type.name}`}
                        onClick={() => setCardSelected(true)}
                        layoutId={pokemonCard.id}
                        whileHover='hover'
                        variants={cardHover}
                    >
                        <motion.div
                            className='pokemon-card'
                            onClick={() => setSelectedId(pokemonCard.id)}
                        >
                            <div className='header-container'>
                                <span className='name'>{pokemonCard.name}</span>
                                <span className='number'>{`#${padLeadingZeros(
                                    pokemonCard.id,
                                    3
                                )}`}</span>
                            </div>
                            <div className='image-container'>
                                <div className='bg-circle'></div>
                                <img
                                    className='pokemon-image'
                                    src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${padLeadingZeros(
                                        pokemonCard.id,
                                        3
                                    )}.png`}
                                />
                            </div>
                            <div className='types-container'>
                                {pokemonCard.types.map((type) => (
                                    <div className={`types-${type.type.name}`}>
                                        <img src={defineIcon(type.type.name)} />
                                        &nbsp;{type.type.name}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div >
                    {/* Animation for card */}
                    <AnimatePresence>
                        {selectedId === pokemonCard.id && (
                            <>
                                <motion.div
                                    className={`background-container ${pokemonCard.types[0].type.name}`}
                                    layoutId={pokemonCard.id}
                                    initial={{ opacity: 1 }}
                                    exit={{ opacity: 0, duration: 0.2 }}
                                    transition={{ duration: 0.2 }}
                                >
                                </motion.div>
                                <motion.div
                                    className={`pokemon-card select ${pokemonCard.types[0].type.name}`}
                                    initial={{ opacity: 1 }}
                                    exit={{ opacity: 0, duration: 0.2 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className='header-container'>
                                        <i className='material-symbols-outlined'
                                            onClick={() => exitCard()}
                                        >
                                            keyboard_double_arrow_left
                                        </i>
                                        <img src={pokeBall} />
                                    </div>
                                    <div className='title-container'>
                                        <span className='name'>{pokemonCard.name}</span>
                                        <span className='number'>{`#${padLeadingZeros(
                                            pokemonCard.id,
                                            3
                                        )}`}</span>
                                    </div>
                                    <div className='types-container'>
                                        {pokemonCard.types.map((type) => (
                                            <div className={`types`}>
                                                <img src={defineIcon(type.type.name)} />
                                                &nbsp;{type.type.name}
                                            </div>
                                        ))}
                                    </div>
                                    <div className='image-container'>
                                        <img
                                            className='pokemon-image'
                                            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${padLeadingZeros(
                                                pokemonCard.id,
                                                3
                                            )}.png`}
                                        />
                                    </div>
                                    <PokemonDetail
                                        stats={pokemonCard.stats}
                                        cardSelected={cardSelected}
                                        pokemonType={pokemonCard.types[0].type.name}
                                    />
                                </motion.div>
                            </>
                        )}
                    </AnimatePresence>
                </>
            )}
        </>
    );
};

export default PokemonCard;