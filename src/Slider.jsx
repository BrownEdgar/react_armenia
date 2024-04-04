
  
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import './Slider.scss';

export default function SimpleSlider() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Slider {...settings}>
            {users.map(user => (
                <div key={user.id}>
                    <h2>{user.name}</h2>
                    <h4>{user.email}</h4>
                    <p>{user.phone}</p>
                    <p>{user.company.catchPhrase}</p>
                </div>
            ))}
        </Slider>
    );
}

