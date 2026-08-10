import React from 'react'
import styles from "./sobre.module.css"

export default function sobre() {
  return (
      <main>
          <div className={styles.container}>
              <h1 className={styles.turma}>Turma: 2TDS1</h1>
              <h2 className={styles.curso}>Desenvolvimento de sistemas</h2>
              <ul className={styles.prof}>Marcelo-Carboni Thiago-Ferreira</ul>
              <ul className={styles.lista}>Emílio Henrique dos Santos Favoretto
                  Pedro Otávio de Andrade Braga
              </ul>
          </div>
      </main>
  );
}
