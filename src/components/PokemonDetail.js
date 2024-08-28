// dependencies
import React from 'react';

const PokemonDetail = ({ stats, pokemonType }) => {

    return (
        <div className='pokemon-section-container'>
            <div className='title'>
                Base Stats
            </div>
            <div className='stats-container'>
                {stats.map((type) => (
                    <span className='stat-section'>
                        <div className='content-section'>
                            <span className='attribute'>
                                {type.stat.name}
                            </span>
                            <span className='attribute'>
                                {type.base_stat}
                            </span>
                        </div>
                        <div className='bar-section-container'>
                            <div className='bar-section'>
                                <div className={`progress-animation-${pokemonType}`}
                                    style={{ width: type.base_stat > 100 ? '100%' : `${type.base_stat}%` }}
                                >
                                </div>
                            </div>
                        </div>
                    </span>
                ))}
            </div>
        </div>
    );
};

export default PokemonDetail;