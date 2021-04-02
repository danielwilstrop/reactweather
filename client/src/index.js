import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import { AppProivider } from './context'

ReactDOM.render(
  <React.StrictMode>
    <AppProivider>
      <App />
    </AppProivider>
  </React.StrictMode>,
  document.getElementById('root')
);

