{/*import React from 'react';
import './Home.css';

interface minhaProps {
    title: string;
    description: string;
}

function Home(props:minhaProps){
    return (
        <>
        {/* <h2>{props.title}</h2>
        <p>{props.description}</p> */}
        {/* <h1 className="titulo">Home</h1>
        <img src="https://wallpapers.com/images/hd/new-york-city-4k-ultra-hd-59x1sxl6wiyy4brl.jpg" alt="Imagem Tela Inicial" className="img" />
        </h1> 
        </>
    );
} */}

import React, { useState, useEffect } from 'react';

function Home() {
    const [completed, setCompleted] = useState(false);
    const [tarefa, setTarefa] = useState('');

    useEffect(() => {
        if (completed) {
            setTarefa('Parabéns! Você conluiu a tarefa');
        }
    }, [completed]);

    return (
        <div>
            <h1>Tarefa</h1>
            <h3>(tarefa)</h3>
            <p>Conclua a tarefa</p>
            <button onClick={() => setCompleted(true)}>Concluir Tarefa</button>
        </div>
    )
}

export default Home;
