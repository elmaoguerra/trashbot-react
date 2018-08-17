import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// import Hello from './components/Hello';
import AppBar from './components/MenuAppBar';

ReactDOM.render(
  // <App />,
  <AppBar />,
  // <Hello name='Julieth' enthusiasmLevel={3} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
