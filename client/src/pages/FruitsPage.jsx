import axios from 'axios';
import React, { useEffect, useState } from 'react'

const API_URL = "http://localhost:5005";

function FruitsPage() {

    const getAllFruits = () => {
        // Get the token from the localStorage
        const storedToken = localStorage.getItem("authToken");

        // Send the token through the request "Authorization" Headers
        axios
            .get(
                `${API_URL}/fruits`,
                { headers: { Authorization: `Bearer ${storedToken}` } }
            )
            .then((response) => setFruits(response.data))
            .catch((error) => console.log(error));
    };

    const [fruits, setFruits] = useState([])

    useEffect(() => {
        getAllFruits()
    }, [])

    return (
        <div>FruitsPage

            {fruits.map((fruit) => (
                <div key={fruit._id}> {fruit.name} </div>
            ))}

        </div>
    )
}

export default FruitsPage