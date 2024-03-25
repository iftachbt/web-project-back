import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { getFromDndApi } from '../../../actions/apiCalls/dndRequest';
import ListOfData from './listCom/list';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Button, ThemeProvider } from '@mui/material';
import { logout } from '../../../actions/apiCalls/user';
import {useNavigate,useParams} from "react-router-dom";
import {themeBox} from '../../../actions/muiStayles/muiStyle'

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
    position: 'relative',
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

function ResponsiveDrawer(props) {
  let {setUser,user} = props
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [dataList, setDataList] = React.useState([]);
  const [pressOnce, setPressOnce] = React.useState(true);
  const navigator = useNavigate()

  const handleLogOut =() =>{
    logout()
    setUser(null)
    navigator("/")
  }
  const handleDrawerOpen = () => {
    console.log("user",user);
    setOpen(true);
  };

  const handleClick =async (option) => {
    let data = await getFromDndApi(option)
    setDataList(() => [...data.results])
    let newarry = await Promise.all(data.results.map(async (info) => {
      let dataInfo = await getFromDndApi(info.url);
      return {...info, ...dataInfo};
    }));
    // let result = await newarry;
    console.log("newarry", newarry);
    setDataList(() => [...newarry])

  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <ThemeProvider theme={themeBox} >
      <AppBar color="primary" position="fixed" open={open}>
        <Toolbar >
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
          <Button onClick={()=>handleLogOut()} variant="contained" color="error">LogOut</Button>
          </Typography>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
          <p>{user?.fName}</p>
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      </ThemeProvider>
      <Main open={open}>
        <DrawerHeader />
        <ListOfData 
        dataList = {dataList}
        setDataList = {setDataList}
        pressOnce = {pressOnce}
        setPressOnce = {setPressOnce}
        />
      </Main>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['spells', 'monsters', 'equipment', 'magic-items'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={() => handleClick('/api/'+text)}>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
    </Box>
  );
}
export default ResponsiveDrawer