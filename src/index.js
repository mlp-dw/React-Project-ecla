import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Account from './components/Account'
import App from './App';
import Result from './components/Result'
import Launch from './components/Launch'
import Contact from './components/Contact';
import Footer from './components/Footer';
import Error from './components/Error';
import { Provider } from 'react-redux';
import { store } from './store/store'
import Question from './components/Question';
import Quizz from './components/Quizz';
import Login from './components/Login';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/accueil" element={<Home />} />
        <Route path="/connexion" element={<Login />} />
        <Route path="/mon-compte" element={<Account />} />
        <Route path="/en-avant" element={<Launch />} />
        <Route path="/quizz/:questionNumber" element={<Quizz />}/>
        <Route path="/quizz/resultat" element={<Result />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />

    </BrowserRouter>
  </Provider>
);

reportWebVitals();