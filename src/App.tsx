import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Footer} from "./components/Footer/Footer";
import {Route} from "react-router-dom";
import {StateType} from "./redux/state";

type AppPropsType = {
  state: StateType
}

function App(props: AppPropsType) {
  return (
      <div className="app-wrapper">
        <Header/>
        <Navbar/>
        <div className="app-wrapper__content">
          <Route
            path="/profile"
            render={() => <Profile state={props.state.profilePage}/>}
          />
          <Route
            path="/dialogs"
            render={() => <Dialogs state={props.state.dialogsPage}/>}
          />
          {/*<Route path="/news" component={News}/>*/}
          {/*<Route path="/music" component={Music}/>*/}
          {/*<Route path="/settings" component={Settings}/>*/}
        </div>
        <Footer/>
      </div>
  );
}

export default App;