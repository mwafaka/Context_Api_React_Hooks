import React, { createContext, useReducer } from 'react';
import { Route, Switch,BrowserRouter } from 'react-router-dom';
import { Home } from './components/Home';
import { AddEmployee } from './components/AddEmployee';
import { EditEmployee } from './components/EditEmployee';
import appReducer from './AppReducer';
import { GlobalContext } from './GlobalState';

const initialState = {
  employees: [
    {
      id: 1,
      name: "web",
      location: "code",
      designation: "Hello"
    },
     {
      id: 2,
      name: "Hooks",
      location: "code",
      designation: "React"
    }
  ]
};

function App() {
 const [state, dispatch] = useReducer(appReducer, initialState);

  function addEmployee(employee) {
    dispatch({
      type: "ADD_EMPLOYEE",
      payload: employee
    });
  }

  function editEmployee(employee) {
    dispatch({
      type: "EDIT_EMPLOYEE",
      payload: employee
    });
  }

  function removeEmployee(id) {
    dispatch({
      type: "REMOVE_EMPLOYEE",
      payload: id
    });
  }
  return (
    <GlobalContext.Provider   value={{
        employees: state.employees,
        addEmployee,
        editEmployee,
        removeEmployee
      }}>
      <div className="App">
      <BrowserRouter> 
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/add" component={AddEmployee} exact />
          <Route path="/edit/:id" component={EditEmployee} exact />
        </Switch>
        </BrowserRouter>
      </div>
    </GlobalContext.Provider>
  );
}
export default App;