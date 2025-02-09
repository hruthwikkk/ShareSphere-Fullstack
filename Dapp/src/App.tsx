// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import SignupLoginPage from './components/SignupLoginPage';
import HomePage from './components/HomePage';
import RequestPage from './components/RequestPage';
import RequestCategoryPage from './components/RequestCategoryPage';
import AddPage from './components/AddPage';
import AddCategoryPage from './components/AddCategoryPage';
import ProfilePage from './components/ProfilePage';
import NotificationsPage from './components/NotificationsPage';
import ServePage from './components/ServePage';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/login" component={SignupLoginPage} />
        <Route path="/signup" component={SignupLoginPage} />
        <Route path="/home" component={HomePage} />
        <Route path="/request" exact component={RequestPage} />
        <Route path="/request/:category" component={RequestCategoryPage} />
        <Route path="/add" exact component={AddPage} />
        <Route path="/add/:category" component={AddCategoryPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/notifications" component={NotificationsPage} />
        <Route path="/serve" component={ServePage} />
      </Switch>
    </Router>
  );
};

export default App;
