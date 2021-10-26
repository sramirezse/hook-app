import React, {useEffect, useState} from 'react'

export const Message = () => {
    const [coords, setCoords] = useState({x: 0, y: 0});
    const {x, y} = coords;
    useEffect(() => {
        const mouseMove = (e) => {
            // console.log(e.clientX, e.clientY);
            const coords = {x: e.x, y: e.y};
            setCoords(coords);
        }
        window.addEventListener('mousemove', mouseMove) 
        console.log('Message component rendered');
        return () => {
            console.log('Message component unmounted');
            window.removeEventListener('mousemove', mouseMove);
        }
    }, [])
    return (
        <div>
            <h1>Message</h1>
            <p>Coords: x: {x}, y: {y}</p>
        </div>
    )
}
