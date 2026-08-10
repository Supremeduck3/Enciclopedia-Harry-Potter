'use client';
import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Header from '@/components/Header';
import styles from './personagens.module.css'

export default function sobre() {
    const [palavra, setPalavra] = useState('');
    const [resultado, setResultado] = useState(null);

    const buscarPalavra = async () => {
        setLoading(true);
        setErro('');

        try {
            const { data } = await axios.get(`https://hp-api.onrender.com/api/characters`);
            setResultado(data.entries[0]);
        } catch {
            setErro('Palavra não encontrada.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className={styles.main}>
            <Header/>
            <h1>Total de produtos: {}</h1>
        </main>
    );
}
