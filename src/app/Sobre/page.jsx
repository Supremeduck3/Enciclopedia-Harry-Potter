import React from 'react';
import styles from './sobre.module.css';

export default function sobre() {
    return (
        <main className={styles.main}>
            <div className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.card}>
                    <h1 className={styles.turma}>Turma:</h1>
                    <h1 className={styles.tds}>2TDS1</h1>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.t_prof}>Professores</h1>
                    <h3 className={styles.prof}>Marcelo Carboni</h3>
                    <h3 className={styles.prof}>Thiago Ferreira</h3>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.t_curso}>Curso</h1>
                    <h3 className={styles.curso}>Desenvolvimento de sistemas</h3>
                </div>
                <div className={styles.card}>
                    <h2 className={styles.t_lista}>Lista</h2>
                    <p className={styles.lista}>
                        Emílio Henrique dos Santos Favoretto Pedro Otávio de Andrade Braga
                    </p>
                    <p>Pedro Otávio de Andrade Braga</p>
                </div>
            </div>
            </div>
        </main>
    );
}
