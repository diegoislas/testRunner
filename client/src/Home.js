import { useEffect, useState } from 'react';
import './App.css';

function Home() {

    const [backendData, setBackendData] = useState([{}])

    useEffect(() => {
        fetch("/app").then(
            response => response.json()
        ).then(
            data => {
                setBackendData(data)
            }
        )
    }, [])

    return (
        <h1>This is the list: {backendData.user}</h1>
    );
}

export default Home;