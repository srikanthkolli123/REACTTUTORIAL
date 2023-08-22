import React, { Component } from 'react';
import navigationStyle from './Navigation.style';
import { withStyles } from '@mui/styles';
import { Grid, Divider } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import GroupIcon from '@mui/icons-material/Group';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import ListSubheader from '@mui/material/ListSubheader';
import { Link } from 'react-router-dom';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import TableRowsOutlinedIcon from '@mui/icons-material/TableRowsOutlined';
import AddToPhotosOutlinedIcon from '@mui/icons-material/AddToPhotosOutlined';



const navigationData = [
  {
    id: 1,
    label: 'Dashboard',
    icon: <DashboardIcon />,
    Link: 'dashboard',
  },
  {
    id: 2,
    label: 'Orders',
    icon: <ShoppingCartIcon />,
    Link: 'orders',
  },
  {
    id: 3,
    label: 'Customers',
    icon: <GroupIcon />,
    Link: 'customers',
  },
  {
    id: 4,
    label: 'Reports',
    icon: <BarChartIcon />,
    Link: 'reports',
  },
  {
    id: 5,
    label: 'Integration',
    icon: <LayersIcon />,
    Link: 'integration',
  },
];

const navigationData1 = [
  {
    id: 1,
    label: 'Blog',
    icon: <DashboardIcon />,
    Link: 'blog',
  },
  {
    id: 2,
    label: 'Current month',
    icon: <DashboardIcon />,
    Link: 'currentmonth',
  },
  {
    id: 3,
    label: 'Last quarter',
    icon: <ShoppingCartIcon />,
    Link: 'lastquarter',
  },
  {
    id: 4,
    label: 'Year-end sale',
    icon: <GroupIcon />,
    Link: 'yearendsale',
  },
  {
    id:5,
    label: 'Social Media',
    icon: <ShareOutlinedIcon />,
    Link: 'socialmedia',
  },
  {
    id:6,
    label: 'Job Listing',
    icon: <TableRowsOutlinedIcon />,
    Link: 'joblisting',
  },
  {
    id:7,
    label:'Kanban',
    icon: <AddToPhotosOutlinedIcon/>,
    Link:'kanban',
  }
];



class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: '',
      isScrollbarVisible: false,
    };
  }

  

  handleMouseEnter = () => {
    this.setState({ isScrollbarVisible: true });
  };
  handleMouseLeave = () => {
    this.setState({ isScrollbarVisible: false });
  };

  setActive = (link) => {
    return this.state.activeItem === link;
  };

  render() {
    const { classes } = this.props;
    const { isScrollbarVisible } = this.state;

    return (
      <div className={`${classes.navigation} ${isScrollbarVisible ? 'show-scrollbar' : ''}`}
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}>
          <Grid>
            <ChevronLeftIcon className={classes.leftangle} />
            <div className={classes.clear}></div>
          </Grid>

          <Divider />

          <Grid>
            <List className={classes.naviagtionlist}>
              {navigationData.map((item) => (
                <ListItemButton
                component={Link}
                to={`/${item.Link}`}
                sx={{ color: 'rgba(255,255,255,0.7)',color: this.setActive(item.Link) ? '#4fc3f7' : 'rgba(255,255,255,.8)',
                bgcolor:this.setActive(item.Link)? '#009be514':'rgba()', }}
              >
                <ListItemIcon className={classes.list}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} className={classes.itemtext} />
              </ListItemButton>
              ))}
            </List>
          </Grid>

          <Divider />

          <Grid>
            <List
              subheader={
                <ListSubheader id="savedreports" className={classes.subheader}>
                  Saved reports
                </ListSubheader>
              }
            >
              {navigationData1.map((item) => (
                <ListItemButton
                component={Link}
                to={`/${item.Link}`}
                sx={{ color: 'rgba(255,255,255,0.7)',color: this.setActive(item.Link) ? '#4fc3f7' : 'rgba(255,255,255,.8)',
                bgcolor:this.setActive(item.Link)? '#009be514':'rgba()', }}
              >
                <ListItemIcon className={classes.list}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} className={classes.itemtext} />
              </ListItemButton>
              ))}
            </List>
          </Grid>

        </div>
      
    );
  }
}

export default withStyles((theme) => ({
  ...navigationStyle(theme),
}))(Navigation);
