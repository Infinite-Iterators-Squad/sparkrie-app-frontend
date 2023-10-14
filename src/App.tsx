import React from "react";
import "./App.css";
import { AppBar, BottomNavigation, BottomNavigationAction } from "@mui/material";
import { HomeIcon, PresentationChartLineIcon, ChatBubbleBottomCenterTextIcon, MapPinIcon, UserCircleIcon } from "@heroicons/react/24/outline";

function App() {
  return (
    <div className="App">
      Test
      <AppBar position="fixed" sx={{ top: "auto", bottom: 0 }}>
        <BottomNavigation>
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction label="presentation" icon={<PresentationChartLineIcon />} />
          <BottomNavigationAction label="chatbot" icon={<ChatBubbleBottomCenterTextIcon />} />
          <BottomNavigationAction label="map" icon={<MapPinIcon />} />
          <BottomNavigationAction label="profile" icon={<UserCircleIcon />} />
        </BottomNavigation>
      </AppBar>
    </div>
  );
}

export default App;
