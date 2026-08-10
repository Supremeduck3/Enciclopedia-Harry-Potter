import React from 'react';
import styles from './sobre.module.css';
import Image from 'next/image';

export default function sobre() {
    return (
        <main className={styles.main}>
            <Image className={styles.main} />
            <div className={styles.container}>
                <div className={styles.card}>
                    <h2 className={styles.turma}>Turma:</h2>
                    <p>2TDS1</p>
                </div>
                <div className={styles.card}>
                    <h2 className={styles.t_prof}>Professores</h2>
                    <p className={styles.prof}>Marcelo Carboni</p>
                    <p className={styles.prof}>Thiago Ferreira</p>
                </div>
                <div className={styles.card}>
                    <h2 className={styles.t_curso}>Curso</h2>
                    <p className={styles.curso}>Desenvolvimento de sistemas</p>
                </div>
                <div className={styles.card}>
                    <h2 className={styles.t_lista}>Lista</h2>
                    <p className={styles.lista}>Emílio Henrique dos Santos Favoretto Pedro Otávio de Andrade Braga</p>
                    <p>Pedro Otávio de Andrade Braga</p>
                </div>
            </div>
        </main>
    );
}
