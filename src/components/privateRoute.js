import {Navigate, Outlet} from 'react-router-dom'
export const PrivateRoute = ({ isLogged}) => {

    if (!isLogged) {
      return isLogged ?  <Outlet /> : <Navigate to="/" replace />;
    }
  
  };