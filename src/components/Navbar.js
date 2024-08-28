// dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
// icons
import {
    TiSocialInstagramCircular,
    TiSocialLinkedinCircular,
    TiSocialGithubCircular
} from 'react-icons/ti';
// images
import PokemonLogo from '../assets/Pokemon-Logo.png';

const Navbar = () => {
    return (
        <header>
            <motion.nav>
                <div className='nav-container'>
                    <div className='nav-logo shine'>
                        <Link>
                            <motion.img
                                src={PokemonLogo}
                                className='logo'
                                alt='logo'
                                animate={{ opacity: 1.2, y: [20, 0], shine: 200 }}
                            />
                        </Link>
                    </div>

                    <div className='social-links'>
                        <a
                            href="https://www.instagram.com/_anishs_"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <motion.div
                                animate={{ opacity: 1.2, y: [20, 0] }}
                                transition={{ delay: 0.25 }}
                            >
                                <TiSocialInstagramCircular className="nav-icon" size="2em" />
                            </motion.div>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/anish-sownderraj"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <motion.div
                                animate={{ opacity: 1.2, y: [20, 0] }}
                                transition={{ delay: 0.35 }}
                            >
                                <TiSocialLinkedinCircular className="nav-icon" size="2em" />
                            </motion.div>
                        </a>
                        <a
                            href="https://github.com/anishsownderraj"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <motion.div
                                animate={{ opacity: 1.2, y: [20, 0] }}
                                transition={{ delay: 0.45 }}
                            >
                                <TiSocialGithubCircular className="nav-icon" size="2em" />
                            </motion.div>
                        </a>
                    </div>
                </div>
            </motion.nav>
        </header >
    );
};

export default Navbar;