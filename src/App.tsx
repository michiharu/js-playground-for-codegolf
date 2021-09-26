import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';

import PlayGround from './PlayGround';
import LeftMenu from './LeftMenu';
import { pages } from './routes';

const drawerWidth = 240;

const App: React.FC = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <LeftMenu />
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton color="inherit" edge="start" onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap sx={{ ml: 2 }}>
            JS Playground for CodeGolf
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 1 }}>
        <Toolbar />
        <Switch>
          {pages.map((p) => (
            <Route key={p.page} path={p.page}>
              <PlayGround page={p} />
            </Route>
          ))}
          <Redirect to={pages[0].page} />
        </Switch>
      </Box>
    </Box>
  );
};

export default App;
