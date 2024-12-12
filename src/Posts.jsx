import React, { useState, useContext } from 'react';
import { PostContext } from './PostProvider';

const Posts = () => {
    const { state, dispatch } = useContext(PostContext);
    const [text, setText] = useState('');
    const [color, setColor] = useState('palevioletred');
    const [size, setSize] = useState(15);

    const handleAddText = () => {
        if (text.trim() !== '') {
            dispatch({
                type: 'ADD_TEXT',
                payload: { text, color, size }
            });
            setText('');
        }
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Challenge Application Message</h1>

            {/* Formulaire */}
            <div style={{ marginBottom: '20px' }}>
                <label>Saisir le texte :</label>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    style={{ marginLeft: '10px', padding: '5px' }}
                />
            </div>
            <div style={{ marginBottom: '20px' }}>
                <label>Selectionnez un rendu :</label>
                <select value={color} onChange={(e) => setColor(e.target.value)} style={{ marginLeft: '10px' }}>
                    <option value="palevioletred">Pale Violet Red</option>
                    <option value="tomato">Tomato</option>
                </select>
            </div>
            <div style={{ marginBottom: '20px' }}>
                <label>Taille du texte :</label>
                <select value={size} onChange={(e) => setSize(Number(e.target.value))} style={{ marginLeft: '10px' }}>
                    {[15, 16, 17, 18, 19, 20].map((val) => (
                        <option key={val} value={val}>
                            {val}px
                        </option>
                    ))}
                </select>
            </div>
            <button
                onClick={handleAddText}
                style={{ padding: '10px 20px', background: '#333', color: '#fff', border: 'none', cursor: 'pointer' }}
            >
                Valider
            </button>

            <hr />

            {/* Liste des textes */}
            <div>
                {state.texts.map((item, index) => (
                    <div key={index} style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ddd' }}>
                        <p style={{ color: item.color, fontSize: `${item.size}px` }}>{item.text}</p>
                        <button
                            onClick={() => dispatch({ type: 'DELETE_TEXT', payload: index })}
                            style={{ padding: '5px 10px', background: '#f00', color: '#fff', border: 'none', cursor: 'pointer' }}
                        >
                            Supprimer
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Posts;
