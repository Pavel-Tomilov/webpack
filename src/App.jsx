import React from 'react';
import './styles/styles.css'; // Или ваш файл стилей (Less/SCSS)

const App = () => {
  return (
    <div className="container">
      <h1>Webpack</h1>
      <hr />
      
      <div className="logo"></div>
      
      <hr />
      <pre></pre>
      
      <div className="box">
        <h2>Less</h2>
      </div>
      <div className="card">
        <h2>SCSS</h2>
      </div>
    </div>
  );
};

export default App;