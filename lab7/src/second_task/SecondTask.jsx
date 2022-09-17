import React, { useState } from 'react';

const SecondTask = () => {
  const [isVisible, setVisible] = useState(false);
  const [imgSize, setImgSize] = useState(250);
  return (
    <>
      <Buttons setVisible={setVisible} setImgSize={setImgSize}></Buttons>
      {isVisible && <Image size={imgSize} />}
    </>
  );
};

const Image = ({ size }) => {
  return <img
    style={{ width: size + 'px', height: size + 'px' }}
    src='https://www.imgonline.com.ua/examples/bee-on-daisy.jpg' alt='photo' />;
};

const Buttons = ({ setVisible, setImgSize }) => {
  return (
    <div>
      <button onClick={() => setVisible(true)}>Додати</button>
      <button onClick={() => setImgSize(prev => prev + 10)}>Збільшити</button>
      <button onClick={() => setImgSize(prev => prev - 10)}>Зменшити</button>
      <button onClick={() => setVisible(false)}>Видалити</button>
    </div>
  );
};
export default SecondTask;