import React,{Component} from 'react';
import socialmediastyles from './Socialmediacomp.style';
import { withStyles } from '@mui/styles';
import { Container, Typography,Button,Stack,Avatar,Box,Grid,Divider,Icon,
    InputBase,TextField, List,ListItem, CardContent,Paper, ListItemText, CardActions } from '@mui/material';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import anikaimg from '../../Assets/avatar-anika-visser.png';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import AttachmentOutlinedIcon from '@mui/icons-material/AttachmentOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import JieYanSong from '../../Assets/avatar-jie-yan-song.png';
import antoniologo from '../../Assets/avatar-alcides-antonio.png';
import SearchIcon from '@mui/icons-material/Search';
import FranPerez from '../../Assets/avatar-fran-perez.png';
import MironVitold from '../../Assets/avatar-marcus-finn.png';


class Socialmedia extends Component {
    constructor(props){
        super(props);
        this.state={
            open:true,
            value: '1',
        }
    }


    handleChange = (event, newValue) => {
        this.setState({ value: newValue });
      };


render(){
    const {classes} = this.props;
    const { value } = this.state;
    return(
        <div>
            <div className={classes.socialmediapage}>
                <Container>

                    <div>
                        <div className={classes.profileimg}>
                            <Button className={classes.profilebtn}>
                                <AccountBoxOutlinedIcon/>
                                <Typography className={classes.btntext}>Change Cover</Typography>
                            </Button>
                        </div>
                        <div className={classes.designername}>
                            <Stack className={classes.stackcontainer}>
                                <Stack className={classes.leftstack}>
                                    <Avatar src={anikaimg} className={classes.designeravatar} />
                                    <div>
                                        <Typography>Product Designer</Typography>
                                        <Typography variant='h6'>Anika Visser</Typography>
                                    </div>
                                </Stack>
                                <Box className={classes.middlestack}><div></div></Box>
                                <Stack className={classes.rightstack}>
                                    <Button variant="outlined"><PersonAddAltOutlinedIcon/><Typography>Connect</Typography></Button>
                                    <Button variant="contained"><ForumOutlinedIcon/><Typography>Send Message</Typography></Button>
                                </Stack>
                                <Button className={classes.dotsbtn}>
                                    <MoreHorizOutlinedIcon/>
                                </Button>
                            </Stack>
                        </div>
                    </div>

                    <Box className={classes.mediatabs}>
                        <TabContext value={value} >
                            <Box className={classes.clickingtabs} >
                                <TabList className={classes.tabsheader} onChange={this.handleChange}>
                                    <Tab label="Timeline" value="1" />
                                    <Tab label="Connections" value="2" />
                                </TabList>
                            </Box>
                            <TabPanel value="1">
                                <Grid container spacing={2}>

                                    <Grid item xs={4}>

                                        <Stack className={classes.timelinetab}>

                                            <Paper className={classes.timelineinner}>
                                                <Typography variant='h6' className={classes.headercard}> Profile Progress</Typography>
                                                <CardContent className={classes.headercard}>
                                                    <Stack className={classes.progressbars}>
                                                        <span className={classes.bottombar}>
                                                            <span className={classes.topbar}></span>
                                                        </span>
                                                        <Typography variant='h6'>
                                                            50% Set Up Complete
                                                        </Typography>
                                                    </Stack>
                                                </CardContent>
                                            </Paper>

                                            <Paper className={classes.timelineinner}>
                                                <Typography variant='h6' className={classes.headercard}> About</Typography>
                                                <CardContent className={classes.abouttext}>
                                                    <Typography variant='h6'>
                                                        Everyone thinks of changing the world, 
                                                        but no one thinks of changing himself.
                                                    </Typography>
                                                    <List className={classes.aboutlist}>

                                                        <ListItem>
                                                            <Avatar><WorkOutlineOutlinedIcon/></Avatar>
                                                            <ListItemText>
                                                                <Typography variant='h5'>Product Designer at Devias IO</Typography>
                                                                <Typography variant='body2'>
                                                                    Past: UX Designer 
                                                                    <a href="/socialmedia"> Focus Aesthetic Dynamics</a>
                                                                </Typography>
                                                            </ListItemText>
                                                        </ListItem>

                                                        <ListItem>
                                                            <Avatar><WorkOutlineOutlinedIcon/></Avatar>
                                                            <ListItemText>
                                                                <Typography variant='body2'>
                                                                    <a href="/socialmedia">Add school or collage</a>
                                                                </Typography>
                                                            </ListItemText>
                                                        </ListItem>

                                                        <ListItem>
                                                            <Avatar><WorkOutlineOutlinedIcon/></Avatar>
                                                            <ListItemText>
                                                                <Typography variant='h5'>Lives in Bucharest</Typography>
                                                                <Typography variant='body2'>
                                                                    Originally from<a href="/socialmedia"> Rm.Valcea</a>
                                                                </Typography>
                                                            </ListItemText>
                                                        </ListItem>

                                                        <ListItem>
                                                            <Avatar><WorkOutlineOutlinedIcon/></Avatar>
                                                            <ListItemText>
                                                                <Typography variant='h5'>anika.visser@devias.io</Typography>
                                                            </ListItemText>
                                                        </ListItem>
                                                    </List>
                                                </CardContent>
                                            </Paper>

                                        </Stack>

                                    </Grid>

                                    <Grid item xs={8}>
                                        <Stack className={classes.timelinetab}>

                                            <Paper>
                                                <CardContent>
                                                    <Stack className={classes.createcomment}>
                                                        <Avatar src={anikaimg} className={classes.designeravatar} />
                                                        <Stack className={classes.stackfield}>
                                                            <TextField fullWidth rows={4} multiline placeholder="Write something"/>
                                                            <CardActions className={classes.cardicons}>
                                                                <Stack className={classes.stackicons}>
                                                                    <Avatar><AccountBoxOutlinedIcon/></Avatar>
                                                                    <Avatar><AttachmentOutlinedIcon/></Avatar>
                                                                    <Avatar><InsertLinkOutlinedIcon/></Avatar>
                                                                    <Avatar><EmojiEmotionsOutlinedIcon/></Avatar>
                                                                </Stack>
                                                                <Button variant="contained"><Typography>Post</Typography></Button>
                                                            </CardActions>
                                                        </Stack>
                                                    </Stack>
                                                </CardContent>
                                            </Paper>

                                            <Paper>
                                                <CardActions className={classes.designerpost}>
                                                    <Avatar src={anikaimg} className={classes.designeravatar} />
                                                    <Box >
                                                        <Typography><a href="/socialmedia"> Anika Visser </a>updated her status</Typography>
                                                        <Stack className={classes.timestack}>
                                                            <AccessTimeOutlinedIcon/>
                                                            <Typography variant='body2'>5 hours ago</Typography>
                                                        </Stack>
                                                    </Box>
                                                </CardActions>
                                                <Box className={classes.postdetails}>
                                                    <Typography>Just made this overview screen for a project, what-cha thinkin?</Typography>
                                                    <div className={classes.postimage}></div>
                                                </Box>
                                                <Stack className={classes.postlike}>
                                                    <div>
                                                        <Stack className={classes.likestack}>
                                                            <Button className={classes.likebtn}>
                                                                <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                                                            </Button>
                                                            <Typography variant='h6' className={classes.likecount}>24</Typography>
                                                        </Stack>
                                                    </div>
                                                    <div>
                                                        <Button className={classes.sharebtn}>
                                                            <ShareOutlinedIcon/>
                                                        </Button>
                                                    </div>
                                                </Stack>
                                                <Divider/>

                                                <Stack className={classes.firststack}>

                                                    <Stack className={classes.secondstack}>
                                                        <Avatar src={JieYanSong} className={classes.inboxlogo} />
                                                        <Box className={classes.poststackitems}>
                                                            <Box className={classes.postusername}>
                                                            <Typography variant='h6'><a href="/socialmedia">Jie Yan Song</a></Typography>
                                                            <Typography>6 hours ago</Typography>
                                                            </Box>
                                                            <Typography variant='body2'>Could use some more statistics, but that’s me haha</Typography>
                                                        </Box>
                                                    </Stack>

                                                    <Stack className={classes.secondstack}>
                                                        <Avatar src={antoniologo} className={classes.inboxlogo} />
                                                        <Box className={classes.poststackitems}>
                                                            <Box className={classes.postusername}>
                                                            <Typography variant='h6'><a href="/socialmedia">Alcides Antonio</a></Typography>
                                                            <Typography>5 hours ago</Typography>
                                                            </Box>
                                                            <Typography variant='body2'>Hmm, honestly this looks nice but I would change the shadow though
                                                            </Typography>
                                                        </Box>
                                                    </Stack>

                                                </Stack>
                                                <Divider/>

                                                <CardContent>
                                                    <Stack className={classes.createcomment}>
                                                        <Avatar src={anikaimg} className={classes.designeravatar} />
                                                        <Stack className={classes.stackfield}>
                                                            <TextField fullWidth rows={4} multiline placeholder="Type your reply"/>
                                                            <CardActions className={classes.cardicons}>
                                                                <Stack className={classes.stackicons}>
                                                                    <Avatar><AccountBoxOutlinedIcon/></Avatar>
                                                                    <Avatar><AttachmentOutlinedIcon/></Avatar>
                                                                    <Avatar><InsertLinkOutlinedIcon/></Avatar>
                                                                    <Avatar><EmojiEmotionsOutlinedIcon/></Avatar>
                                                                </Stack>
                                                                <Button variant="contained"><Typography>send</Typography></Button>
                                                            </CardActions>
                                                        </Stack>
                                                    </Stack>
                                                </CardContent>

                                            </Paper>

                                            <Paper>
                                                <CardActions className={classes.designerpost}>
                                                    <Avatar src={anikaimg} className={classes.designeravatar} />
                                                    <Box >
                                                        <Typography><a href="/socialmedia"> Anika Visser </a>updated her status</Typography>
                                                        <Stack className={classes.timestack}>
                                                            <AccessTimeOutlinedIcon/>
                                                            <Typography variant='body2'>8 hours ago</Typography>
                                                        </Stack>
                                                    </Box>
                                                </CardActions>
                                                <Box className={classes.postdetails}>
                                                    <Typography>As a human being, you are designed in a way that makes you incapable
                                                        of experiencing any positive emotion unless you set an aim and progress towards it. 
                                                        What makes you happy is not, in fact, attaining it, but making progress towards it.
                                                    </Typography>
                                                </Box>
                                                <Stack className={classes.postlike}>
                                                    <div>
                                                        <Stack className={classes.likestack}>
                                                            <Button className={classes.likebtn}>
                                                                <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                                                            </Button>
                                                            <Typography variant='h6' className={classes.likecount}>65</Typography>
                                                        </Stack>
                                                    </div>
                                                    <div>
                                                        <Button className={classes.sharebtn}>
                                                            <ShareOutlinedIcon/>
                                                        </Button>
                                                    </div>
                                                </Stack>
                                                <Divider/>

                                                <Stack className={classes.firststack}>

                                                    <Stack className={classes.secondstack}>
                                                        <Avatar src={JieYanSong} className={classes.inboxlogo} />
                                                        <Box className={classes.poststackitems}>
                                                            <Box className={classes.postusername}>
                                                            <Typography variant='h6'><a href="/socialmedia">Iulia Albu</a></Typography>
                                                            <Typography>4 hours ago</Typography>
                                                            </Box>
                                                            <Typography variant='body2'>That’s actually deep. Thanks for the design, would you consider making an interaction?</Typography>
                                                        </Box>
                                                    </Stack>

                                                    <Stack className={classes.secondstack}>
                                                        <Avatar src={antoniologo} className={classes.inboxlogo} />
                                                        <Box className={classes.poststackitems}>
                                                            <Box className={classes.postusername}>
                                                            <Typography variant='h6'><a href="/socialmedia">Fran Perez</a></Typography>
                                                            <Typography>3 hours ago</Typography>
                                                            </Box>
                                                            <Typography variant='body2'>Oh... so sentimental</Typography>
                                                        </Box>
                                                    </Stack>

                                                </Stack>
                                                <Divider/>

                                                <CardContent>
                                                    <Stack className={classes.createcomment}>
                                                        <Avatar src={anikaimg} className={classes.designeravatar} />
                                                        <Stack className={classes.stackfield}>
                                                            <TextField fullWidth rows={4} multiline placeholder="Type your reply"/>
                                                            <CardActions className={classes.cardicons}>
                                                                <Stack className={classes.stackicons}>
                                                                    <Avatar><AccountBoxOutlinedIcon/></Avatar>
                                                                    <Avatar><AttachmentOutlinedIcon/></Avatar>
                                                                    <Avatar><InsertLinkOutlinedIcon/></Avatar>
                                                                    <Avatar><EmojiEmotionsOutlinedIcon/></Avatar>
                                                                </Stack>
                                                                <Button variant="contained"><Typography>send</Typography></Button>
                                                            </CardActions>
                                                        </Stack>
                                                    </Stack>
                                                </CardContent>

                                            </Paper>
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </TabPanel>

                            <TabPanel value="2">
                            <Stack className={classes.timelinetab}>
                                <Paper className={classes.timelineinner}>
                                    <Typography variant='h6' className={classes.headercard}> Connections</Typography>
                                    <Divider/>
                                    <Box>
                                            <ListItem className={classes.integrationdetailslist}>
                                                <div className={classes.seachfeild}>
                                                <Icon className={classes.searchicon}>
                                                    <SearchIcon />
                                                </Icon>
                                                <InputBase placeholder="Search connections" className={classes.inputfeild}/>
                                                </div>
                                            </ListItem>
                                    </Box>
                                    <Divider/>
                                    <Box className={classes.gridcontainer}>
                                        <Grid container spacing={3} className={classes.griditems}>
                                            <Grid item xs={12} md={6}>
                                                <Paper variant="outlined" className={classes.gridcontent}>
                                                    <Stack className={classes.gridsec}>
                                                        <CardActions className={classes.designerpost}>
                                                        <Avatar src={anikaimg} className={classes.designeravatar} />
                                                        <Box >
                                                            <Typography><a href="/socialmedia"> Anika Visser </a></Typography>
                                                            <Typography variant='body2'>10 connection in common</Typography>
                                                        </Box>
                                                        </CardActions>
                                                        <Button>
                                                            <MoreHorizOutlinedIcon/>
                                                        </Button>
                                                    </Stack>
                                                </Paper>
                                            </Grid>
                                            <Grid item xs={12} md={6}>
                                                <Paper variant="outlined" className={classes.gridcontent}>
                                                <Stack className={classes.gridsec}>
                                                    <CardActions className={classes.designerpost}>
                                                    <Avatar src={FranPerez} className={classes.designeravatar} />
                                                    <Box >
                                                        <Typography><a href="/socialmedia"> Fran Perez </a></Typography>
                                                        <Typography variant='body2'>10 connection in common</Typography>
                                                        <Button variant="text" className={classes.penbtn}>Pending</Button>
                                                    </Box>
                                                    </CardActions>
                                                    <Button>
                                                        <MoreHorizOutlinedIcon/>
                                                    </Button>
                                                </Stack>
                                                </Paper>
                                            </Grid>
                                            <Grid item xs={12} md={6} >
                                                <Paper variant="outlined" className={classes.gridcontent}>
                                                <Stack className={classes.gridsec}>
                                                    <CardActions className={classes.designerpost}>
                                                    <Avatar src={MironVitold} className={classes.designeravatar} />
                                                    <Box >
                                                        <Typography><a href="/socialmedia"> Miron Vitold </a></Typography>
                                                        <Typography variant='body2'>10 connection in common</Typography>
                                                        <Button variant="outlined" className={classes.connectbtn}>Connect</Button>
                                                    </Box>
                                                    </CardActions>
                                                    <Button>
                                                        <MoreHorizOutlinedIcon/>
                                                    </Button>
                                                </Stack>
                                                </Paper>
                                            </Grid>
                                            <Grid item xs={12} md={6} >
                                                <Paper variant="outlined" className={classes.gridcontent}>
                                                <Stack className={classes.gridsec}>
                                                    <CardActions className={classes.designerpost}>
                                                    <Avatar src={anikaimg} className={classes.designeravatar} />
                                                    <Box >
                                                        <Typography><a href="/socialmedia"> Anika Visser </a></Typography>
                                                        <Typography variant='body2'>10 connection in common</Typography>
                                                    </Box>
                                                    </CardActions>
                                                    <Button>
                                                        <MoreHorizOutlinedIcon/>
                                                    </Button>
                                                </Stack>
                                                </Paper>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Paper>
                            </Stack>
                                
                            </TabPanel>
                        </TabContext>
                    </Box>
                </Container>
            </div>
        </div>
    )
}
}

export default withStyles((theme) =>({
    ...socialmediastyles(theme),}))
    (Socialmedia);

