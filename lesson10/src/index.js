import './App.css';
import TtbCategory from './componets/TtbCategory.js';
import { useEffect, useState } from 'react';
import axios from './api/TtbApi.js';
import TTBCategoryForm from './componets/TtbCategoryForm.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();