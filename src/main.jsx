import React from 'react'
import ReactDOM from 'react-dom/client'
import F1PhantomCars from './F1PhantomCars.jsx'

const isEmbed = new URLSearchParams(window.location.search).get('embed') === '1';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <F1PhantomCars embed={isEmbed} />
  </React.StrictMode>
)
