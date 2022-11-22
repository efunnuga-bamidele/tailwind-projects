import { Fragment } from 'react';
import { useRouteError } from 'react-router-dom';
import Navbar from "../../components/navbar/navbar.component";
const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);

    return (
      <Fragment>
      <Navbar />
      <div id='error-page' className='App-header'>
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occured.</p>
          <p>
              <i>{error.statusText || error.message}</i>
          </p>
      </div>
      </Fragment>
    );
}
export default ErrorPage;