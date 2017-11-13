import ReactDOM from 'react-dom';
import './Style/css/styles.css';
import { makeMainRoutes } from './Content/Helpers/router';

const routes = makeMainRoutes();

ReactDOM.render(
  routes,
  document.getElementById('root')
);
