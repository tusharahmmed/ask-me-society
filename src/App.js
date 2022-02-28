import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { DashboardPage, Home, LoginPage, PostDetailsPage } from './view/pages';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './view/components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>

          <Switch>

            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/account">
              <LoginPage />
            </Route>

            <PrivateRoute path="/question/:id">
              <PostDetailsPage />
            </PrivateRoute>
            
            <PrivateRoute path="/my-account">
              <DashboardPage />
            </PrivateRoute>

          </Switch>


        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
