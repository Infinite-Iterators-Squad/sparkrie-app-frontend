import React from "react";
import { AppBar, BottomNavigation, BottomNavigationAction } from "@mui/material";
import { HomeIcon, PresentationChartLineIcon, ChatBubbleBottomCenterTextIcon, MapPinIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import { useLocation, Link } from "react-router-dom";

export const BottomNavigator = () => {
  const location = useLocation();
  const [path, setPath] = React.useState(location.pathname);
  const handleChange = (event: React.SyntheticEvent, value: string) => {
    setPath(value);
  };

  return (
    <AppBar position="fixed" sx={{ top: "auto", bottom: 0 }}>
      <BottomNavigation value={path} onChange={handleChange} showLabels={false}>
        <BottomNavigationAction label="Home" component={Link} to="/" value="/" icon={<HomeIcon />} />
        <BottomNavigationAction label="statistics" value="/statistics" icon={<PresentationChartLineIcon />} />
        <BottomNavigationAction label="chat" component={Link} to="/chat" value="/chat" icon={<ChatBubbleBottomCenterTextIcon />} />
        <BottomNavigationAction label="map" value="/map" icon={<MapPinIcon />} />
        <BottomNavigationAction label="profile" value="/profile" icon={<UserCircleIcon />} />
      </BottomNavigation>
    </AppBar>
  );
};
