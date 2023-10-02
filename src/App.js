import React from 'react';
import { Switch, Route,HashRouter} from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Index from './components/Index';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import { GlobalProvider } from './components/GlobalState';

function App(props) {

  return (
    <GlobalProvider>
      <HashRouter basename="/">
      <Header />

      <Switch>
        <Route path="/" exact component={Index} />
        
            
      </Switch>

      <Footer />
      </HashRouter>
    </GlobalProvider>

  );
}

export default App;
