import React from 'react';
import './header.css';

export const Header = () => {
  return (
    <div id="page">
            <div id="head">
                <h1 id="title">Meu dia</h1>
                <div>
                    <img id="mood" src="./img/mood.png"/>
                </div>
                <form id="date">
                    {/* <label for="dateField">Escolha uma data: </label>
                    <input type="date" id="dateField">
                    <button type="button" onclick="submitDate()">Enviar</button> */}
                </form>
            </div>
        </div>
  );
};

