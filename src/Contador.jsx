
import { useState, useEffect } from 'react';

export const Contador = () => {

    const [contador, setContador] = useState(0);
    const [mensaje, setMensaje] = useState('');

    // useEffect que se ejecuta cada vez que el valor de 'contador' cambia
    useEffect(() => {
        if (contador === 5) {
        setMensaje('¡Has llegado a 5!');
        } else {
        setMensaje('');
        }
    }, [contador]);

    const incrementar = () => {
        setContador(contador + 1);
    };

    const decrementar = () => {
        setContador(contador - 1);
    };

    return(
        <div>
            <h1>Contador: {contador}</h1>
            <button
                onClick={incrementar}
            >Incrementar</button>
            <button
                onClick={decrementar}
            >Decrementar</button>
            {mensaje && <p>{mensaje}</p>}
        </div>
    );
}