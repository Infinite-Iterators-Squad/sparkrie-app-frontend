import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { HomePage } from "./components/HomePage";
import { ChatPage } from "./components/ChatPage";
import { BottomNavigator } from "./components/custom/BottomNavigator";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <BottomNavigator />
          <Switch>
            <Route path="/chat" component={ChatPage} />
            <Route path="/" component={HomePage} />
          </Switch>
        </LocalizationProvider>
      </div>
    </BrowserRouter>
  );
};

export default App;
