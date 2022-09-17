import React, { useState } from 'react';

function Header() {

  const [firstStyle, setFirstStyle] = useState({ background: '#fff', color: '#000' });
  const [secondStyle, setSecondStyle] = useState({ background: '#fff', color: '#000' });

  const onClickFirst = () => {
    setFirstStyle({ background: getRandomColorStyle(), color: getRandomColorStyle() });
  };

  const onClickSecond = () => {
    setSecondStyle({ background: getRandomColorStyle(), color: getRandomColorStyle() });
  };

  return (
    <>
      <h2>Петренко Ольга Сергіївна</h2>
      <hr />
      <p onClick={onClickFirst} style={firstStyle}>
        Дата та місце народження: 16 квітня 2003, м. Дніпро</p>
      <p onClick={onClickSecond} style={secondStyle}>Освіта: Комунальний заклад
        «НВО «Ліцей НІТ - загальноосвітній навчальний заклад І-ІІ ступенів» Кам’янської міської ради; НТУУ "КПІ"</p>
      <hr />
    </>
  );
}

function getRandomInt() {
  return Math.floor(Math.random() * 255);
}

function getRandomColorStyle() {
  return 'rgb(' + getRandomInt() + ',' + getRandomInt() + ',' + getRandomInt() + ')';
}

export default Header;