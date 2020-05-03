import React from 'react';
import PrivateRoute from "./components/PrivateRoute";
import Todos from "./routes/Todos";
import SignIn from "./routes/SignIn";
import {Switch, Route} from "react-router-dom";
function App() {
  return (
    <div style = {{
      textAlign: "center"
    }}>
      <h1>Redux Todo App</h1>
      <Switch>
        <PrivateRoute path = "/todos">
          <Todos />
        </PrivateRoute>
        <Route path = "/">
        <SignIn />
        </Route>
      </Switch>

    </div>
  );
}
export default App;