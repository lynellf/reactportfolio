import ReactDOM from 'react-dom';
import './css/styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'semantic-ui-css/semantic.min.css';
import { makeMainRoutes } from './router';

const routes = makeMainRoutes();

ReactDOM.render(
  routes,
  document.getElementById('root')
);
