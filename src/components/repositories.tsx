import React, { useEffect, useState } from 'react';
import styles from '../components/modules/repositories.module.css';

interface Repository {
    id: number;
    name: string;
    html_url: string;
    description: string;
}

const Repositories: React.FC = () => {
    const [repos, setRepos] = useState<Repository[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchRepositories = async () => {
            try {
                const response = await fetch('https://api.github.com/users/dredevs/repos');
                if (!response.ok) {
                    throw new Error('Failed to fetch repositories');
                }
                const data = await response.json();
                setRepos(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchRepositories();
    }, []);

    if (loading) return <div></div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.projectsTitle}>Projects</h1>
                <a href="https://github.com/dredevs?tab=repositories" target="_blank" rel="noopener noreferrer" className={styles.viewMore}>
                    View More
                </a>
            </div>
            <ul className={styles.repoList}>
                {repos.map((repo) => (
                    <li key={repo.id} className={styles.repoItem}>
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                            <h2>{repo.name}</h2>
                            <p>{repo.description || 'No description provided.'}</p>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Repositories;
