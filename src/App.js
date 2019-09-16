import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import '../src/scss/app.scss';
import NavBar from './components/nav/Navbar';
import Landing from './pages/landing';
import theme from '../src/themes/ExampleTheme';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import About from './pages/about';
import { useAuth0 } from './auth/auth0-wrapper';
import { Loader } from './components/loader/Loader';
import PrivateRoute from './components/routing/PrivateRoute';

export function App() {
  const auth0 = useAuth0();
  const { loading, isAuthenticated, user } = auth0;

  if (loading) {
    return(
      <div className="app-loading">
        <Loader text={'Loading'} fluid={true} />
      </div>
    )
  };

  return (
    <Router>
      <div className="app-container">
        <ThemeProvider theme={theme}>
          <NavBar />
          <div className="app-body">
            <Route exact path="/" component={Landing}/>
            <PrivateRoute exact path="/about" component={About} user={user} isAuthenticated={isAuthenticated} />
          </div>
        </ThemeProvider>
      </div>
    </Router>
  );

}

export default App;
