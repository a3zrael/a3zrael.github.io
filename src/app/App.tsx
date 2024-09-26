import React from 'react';
import logo from './logo.svg';
import tg from './telegram_logo.svg';
import './App.css';
import { Layout } from 'src/shared/layout/layout';

function App() {
  return (
    <div className="App">
      <Layout>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Приветствую! Меня зовут Марусов Андрей, и я Junior разработчик. В мои руки уже попали React, различные
            сборщики и state менеджеры, и я с удовольствием работаю с этими инструментами.{' '}
          </p>
          <p>
            На этом курсе мне хочется укрепить свои знания, освоить новые технологии и, самое главное, начать глубже
            понимать, как всё это работает изнутри.{' '}
          </p>
          <div className="App-tg">
            Контакты:
            <a href="https://t.me/marusov_aa" target="_blank" rel="noopener noreferrer">
              <img src={tg} className="App-tg-logo" alt="tg_logo" />
            </a>
          </div>
        </header>
      </Layout>
    </div>
  );
}

export default App;
