import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('main');
  return (
    <BottomNavigation sx={{ width: 500 }} value={value} onChange={(_, newValue) => {
      setValue(newValue)
      history.pushState(null, '', '/' + newValue)
    }}>
      <BottomNavigationAction
        label="主应用"
        value="main"
        icon={<HomeIcon />}
      />
      <BottomNavigationAction
        label="微应用1"
        value="micro1"
        icon={<LooksOneIcon />}
      />
      <BottomNavigationAction
        label="微应用2"
        value="micro2"
        icon={<LooksTwoIcon />}
      />
    </BottomNavigation>
  );
}
