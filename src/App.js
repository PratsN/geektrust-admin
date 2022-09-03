import './App.css';
import React from "react";
import { Route, Switch } from "react-router-dom";
import { SnackbarProvider } from 'notistack';
import Landing from './Components/Landing';


function App() {
  return (
    <div className="App">
         <SnackbarProvider
                    dense
                    preventDuplicate
                    maxSnack={3}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    autoHideDuration={1000}
                >

      <Switch>
        <Route exact path="/" component={Landing} />
      </Switch>
      
      </SnackbarProvider>
    </div>
  );
}

export default App;
