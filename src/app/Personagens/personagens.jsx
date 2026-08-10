import React from 'react';
('use client');
import { useState } from 'react';
import axios from 'axios';

export default function sobre() {
    const [palavra, setPalavra] = useState('');
    const [resultado, setResultado] = useState(null);

    const buscarPalavra = async () => {
        setLoading(true);
        setErro('');

        try {
            const { data } = await axios.get(
                `https://hp-api.onrender.com/api/characters`,
            );
            setResultado(data.entries[0]);
        } catch {
            setErro('Palavra não encontrada.');
        } finally {
            setLoading(false);
        }
    };

    return <div>sobre</div>;
}
