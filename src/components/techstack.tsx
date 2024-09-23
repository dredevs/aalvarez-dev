import React from 'react';
import { FaReact, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiPython, SiIntellijidea, SiVisualstudiocode, SiClion } from 'react-icons/si';
import styles from '../components/modules/techstack.module.css';

const techStack = [
    { name: 'React', icon: <FaReact className={styles['react-icon']} size={30} /> },
    { name: 'Next.js', icon: <SiNextdotjs className={styles['next-icon']} size={30} /> },
    { name: 'Tailwind', icon: <SiTailwindcss className={styles['tailwind-icon']} size={30} /> },
    { name: 'TypeScript', icon: <SiTypescript className={styles['typescript-icon']} size={30} /> },
    { name: 'JavaScript', icon: <SiJavascript className={styles['javascript-icon']} size={30} /> },
    { name: 'HTML5', icon: <SiHtml5 className={styles['html-icon']} size={30} /> },
    { name: 'CSS3', icon: <SiCss3 className={styles['css-icon']} size={30} /> },
    { name: 'Git', icon: <FaGitAlt className={styles['git-icon']} size={30} /> },
    { name: 'GitHub', icon: <FaGithub className={styles['github-icon']} size={30} /> },
    { name: 'Python', icon: <SiPython className={styles['python-icon']} size={30} /> },
    { name: 'VSCode', icon: <SiVisualstudiocode className={styles['vscode-icon']} size={30} /> },
    { name: 'IntelliJ', icon: <SiIntellijidea className={styles['intellij-icon']} size={30} /> },
    { name: 'CLion', icon: <SiClion className={styles['clion-icon']} size={30} /> },
];

const TechStack: React.FC = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Tech Stack</h1>
            <p className={styles.description}>
            I use a variety of tools to streamline my development process and increase rate
            <br />
            quality of both my code, and my projects. Below is a list of tools and
            <br />
            languages I've had experience with in the past, or use currently!
            </p>
            <div className={styles.techBorder}>
                <div className={styles.techList}>
                    {techStack.map((tech, index) => (
                        <div className={styles.techItem} key={index}>
                            {tech.icon}
                            <span className={styles.tooltip}>{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TechStack;
