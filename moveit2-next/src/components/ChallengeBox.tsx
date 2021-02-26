import { useContext } from 'react';
import { challengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ChallengeBox.module.css'


export function ChallengeBox() {
    const contextData = useContext(challengesContext);

    console.log(contextData)


    const hasActiveChallenge = (true);


    return (
        <div className={styles.challengeBoxContainer}>
            { hasActiveChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe 400xp</header>
                    <main>
                        <img src="icons/body.svg" />
                        <strong>Novo desafio</strong>
                        <p>Levante e faça uma caminhada de 3 min</p>
                    </main>
                    <footer>
                        <button type="button" className={styles.challengeFailedButton}
                        >
                            Falhei</button>
                        <button
                            type="button" className={styles.challengeSuccededButton}
                        >
                            Completei</button>
                    </footer>
                </div>

            ) : (
                    <div className={styles.challengeNotActive}>
                        <strong> Finalize um ciclo para receber um desafio</strong>
                        <p>
                            <img src="icons/level-up.svg" alt="level Up" />
                    Avance de level complentando desafios
                </p>


                    </div>
                )}

        </div>

    )
}