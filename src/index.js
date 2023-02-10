import React from 'react';
//import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './components/App';
import BookList from './components//BookList/BookList';
import BookDetails from './components/BookDetails/BookDetails';
import About from './components/About/About';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<BookList />} />
        <Route path="about" element={<About />} />
        <Route path="/details/:id" element={<BookDetails />} />
      </Route>
    </Routes>
  </Router>
  //document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
