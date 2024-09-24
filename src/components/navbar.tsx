import React from 'react';
import Link from 'next/link';
import styles from '../components/modules/navbar.module.css';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={`${styles.navContent} flex justify-between items-center`}>
                <ul className={`${styles.list} flex`}>
                    <li className={styles.item}>
                        <Link href="/">Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link href="/project">Projects</Link>
                    </li>
                </ul>
                <div className={styles.iconContainer}>
                    <a href="https://www.linkedin.com/in/aalvarezm" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                        <FaLinkedin className="text-xl hover:text-blue-700" />
                    </a>
                    <a href="https://github.com/dredevs" target="_blank" rel="noopener noreferrer" title="GitHub">
                        <FaGithub className="text-xl hover:text-gray-700 mx-3" />
                    </a>
                    <a href="https://twitter.com/dredevs_" target="_blank" rel="noopener noreferrer" title="Twitter">
                        <FaTwitter className="text-xl hover:text-blue-400" />
                    </a>
                    <a href="mailto:contact.dredev@gmail.com" title="Email">
                        <FaEnvelope className="text-xl hover:text-red-500 mx-3" />
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
