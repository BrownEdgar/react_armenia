import React, { useEffect, useRef, useState } from 'react';
import './Modal.scss';

function Modal({ children, toggleModal }) {
    const [post, setPost] = useState([]);
    const modalRef = useRef(null);

    useEffect(() => {
        const handleClick = (e) => {
            const { className } = e.target;
            if (className && className === 'Modal') {
                toggleModal(false);
            }
        };

        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, []);

    const handleOkButtonClick = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        setPost(data);
        toggleModal(false); 
    };

    return (
        <div className='Modal'>
            <div className="Modal__content">
                {children}
                <button className='Modal__close-btn'>Close</button>
                <button className='Modal__ok-btn' onClick={handleOkButtonClick}>Ok</button>
              
                <div>
                    {post.map(item => (
                        <div key={item.id}>
                            <p>Title: {item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Modal;
