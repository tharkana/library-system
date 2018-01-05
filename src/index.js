import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import configureStore from './store/configureStore';
import { getBooks } from './api';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/index.css';


getBooks().then((books) => {

  const store = configureStore({ books });

  render(
    <div>
      <App store={store}/>
    </div>
    ,
    
    document.getElementById('root')
  )
})

