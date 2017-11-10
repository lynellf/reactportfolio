import ReactDOM from 'react-dom';
import './css/styles.css';
import { makeMainRoutes } from './router';

const routes = makeMainRoutes();

ReactDOM.render(
  routes,
  document.getElementById('root')
);
