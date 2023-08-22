import React, { Component } from 'react';
import { withStyles } from '@mui/styles';
import Jobstyles from './Jobcomp.style';
import { Avatar, Container,FormControlLabel,Checkbox,TextField,ListItemText, Typography,Grid,ImageList,ImageListItem,
    Radio,List,Button,FormControl,Divider, Stack,Paper,Box,ListItem,Icon,InputBase, CardContent, CardActions, CardHeader, CardMedia, Badge } from '@mui/material';
import joblistingimg from '../../Assets/jobimg1.svg';
import SearchIcon from '@mui/icons-material/Search';
import Chip from '@mui/material/Chip';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import augmeticimg from '../../Assets/jobimg2.svg';
import Cryptomania from '../../Assets/jobimg3.svg';
import Talkster from '../../Assets/jobimg4.svg';
import Devias from '../../Assets/jobimg5.svg';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import gallery1 from '../../Assets/gallery-1.jpg';
import gallery2 from '../../Assets/gallery-2.jpg';
import gallery3 from '../../Assets/gallery-3.jpg';
import gallery4 from '../../Assets/gallery-4.jpg';
import gallery5 from '../../Assets/gallery-5.jpg';
import gallery6 from '../../Assets/gallery-6.jpg';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import JieYanSong from '../../Assets/avatar-jie-yan-song.png';
import FranPerez from '../../Assets/avatar-fran-perez.png';
import StarIcon from '@mui/icons-material/Star';
import anikaimg from '../../Assets/avatar-anika-visser.png';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import InputAdornment from '@mui/material/InputAdornment';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';




const data = [
    {
      id:1,
      imgSrc: augmeticimg,
      companyName: 'Augmastic Inc.',
      companyDescription:
        'Building technologies and ideas that move us as the leaders in Augmented Reality',
        count:'50-100',
      rating: '4.5/5',
      verifying:'VERIFIED',
      jobTitle1: 'Remote React / React Native Developer',
      jobDetails1: 'Remote possible • $55k - $75k',
      postedTime1: '6 hours ago',
      jobTitle2: 'Senior Golang Backend Engineer',
      jobDetails2: 'Remote possible • $55k - $75k',
      postedTime2: '7 hours ago',
    },
    {
        id:2,
        imgSrc: Cryptomania,
        companyName: 'Cryptomania SRL',
        companyDescription:
          'Monitor and optimize your content for long-term audience loyalty',
          count:'50-100',
        rating: '4.3/5',
        jobTitle1: 'Remote React / React Native Developer',
        jobDetails1: 'Remote possible • $80k - $160k',
        postedTime1: '8 hours ago',
    },
    {
        id:3,
        imgSrc: Talkster,
        companyName: 'Talkster Inc.',
        companyDescription:
          'Discover innovative companies and the people behind them',
          count:'50-100',
        rating: '4.5/5',
        jobTitle1: 'Senior Backend Engineer',
        jobDetails1: 'Remote possible • $150k - $210k',
        postedTime1: '6 days ago',
    },
    {
        id:4,
        imgSrc: Devias,
        companyName: 'Devias IO SRL',
        companyDescription:
          'Impact-ready developer tools and templates',
          count:'1-10',
        rating: '4.9/5',
        verifying:'VERIFIED',
        jobTitle1: 'Mid Frontend Developer',
        jobDetails1: 'Remote possible • $80k - $160k',
        postedTime1: '10 days ago',
    },
];

const membersArray = [
    {
      id: 1,
      name: 'Jie Yang Song',
      role: 'CEO & Co-founder',
      skills: ['Javascript', 'React', 'Go'],
      avatar: JieYanSong, 
    },
    {
      id: 2,
      name: 'Fran Perez',
      role: 'CTO & Co-founder',
      skills: ['C', 'C++', 'Java'],
      avatar: FranPerez,
    }
  ];


class Jobcomp extends Component {
    constructor(props){
        super(props);
        this.state={
            open:true,
            value: '1',
            openPage: 'joblistingpage',
            selectedCompany: null,
            activeStep: 0,
            selectedValue: 'a',
        }
    }

    handleDelete = () => {};

    handleChange = (event, newValue) => {
        this.setState({ value: newValue });
        this.setState({
            selectedValue: event.target.value,
          });
    };

    handlePostClick = () => {
        this.setState({ openPage: 'createjob' })
    }

    handleCompanyClick = (companyId) => {
        this.setState({ openPage: 'jobspage' })
        this.setState({ selectedCompanyId: companyId });
    }

    handleWestIconClick = () => {
        this.setState({ openPage: 'joblistingpage' });
    };
    
    handleNext = () => {
        this.setState((prevState) => ({
          activeStep: prevState.activeStep + 1,
        }));
    };
    
    handleBack = () => {
        this.setState((prevState) => ({
          activeStep: prevState.activeStep - 1,
        }));
    };
    
    handleReset = () => {
        this.setState({
          activeStep: 0,
        });
    };


  render() {
    const {classes} = this.props;
    const { selectedValue,openPage,value,selectedCompanyId,activeStep } = this.state;
    return (
      <div>
        
        {openPage === 'joblistingpage' && (
            <div className={classes.joblistingpage}>
            <Container>
                <Grid container spacing={2} className={classes.joblistingheader}>
                    <Grid item xs={8} className={classes.leftgrid}>
                        <Typography variant='h3'>Reach 50k+ potential candidates.</Typography>
                        <Typography variant='body2'>Post your job today for free. Promotions start at $99.</Typography>
                        <Button variant="contained" className={classes.postjobbtn} onClick={this.handlePostClick}>
                            Post a job
                        </Button>
                        
                    </Grid>
                    <Grid item xs={4}className={classes.rightgrid}>
                        <Avatar src={joblistingimg}></Avatar>
                    </Grid>
                </Grid>

                <Stack className={classes.joblistingdetails}> 

                    <Paper className={classes.joblistpaper}>

                        <Box>
                            <ListItem className={classes.integrationdetailslist}>
                                <div className={classes.seachfeild}>
                                <Icon className={classes.searchicon}>
                                    <SearchIcon />
                                </Icon>
                                <InputBase placeholder="Enter a keyword" className={classes.inputfeild}/>
                                </div>
                            </ListItem>
                        </Box>

                        <Divider/>

                        <Stack className={classes.stackbtns}>
                            <Chip label="Type:Freelance" variant="outlined" onDelete={this.handleDelete} />
                            <Chip label="Type:Internship" variant="outlined" onDelete={this.handleDelete} /> 
                            <Chip label="Level:Novice" variant="outlined" onDelete={this.handleDelete} />
                            <Chip label="Location:Asia" variant="outlined" onDelete={this.handleDelete} />
                            <Chip label="Role:Web Developer" variant="outlined" onDelete={this.handleDelete} />
                        </Stack>

                        <Divider/>

                        <Stack className={classes.stackselectedbtns}>
                            <Button variant="text">
                                <Typography>Type</Typography>
                                <ExpandMoreOutlinedIcon/>
                            </Button>
                            <Button variant="text">
                                <Typography>Level</Typography>
                                <ExpandMoreOutlinedIcon/>
                            </Button>
                            <Button variant="text">
                                <Typography>Location</Typography>
                                <ExpandMoreOutlinedIcon/>
                            </Button>
                            <Button variant="text">
                                <Typography>Role</Typography>
                                <ExpandMoreOutlinedIcon/>
                            </Button>
                            <Box className={classes.spacebox}></Box>
                            <FormControlLabel control={<Checkbox />} label="In network" />
                        </Stack>
                    </Paper>
                    
                    {data.map((row, index) => (

                        <Paper key={index} className={classes.joblistpaper}>

                            <CardContent>

                                <Stack className={classes.jobdescription}>
                                    <a className={classes.jobavatar} onClick={() => this.handleCompanyClick(row.id)}>
                                    <Avatar src={row.imgSrc} className={classes.desimg} />
                                    </a>
                                    <div className={classes.descdetails}>
                                    <Typography className={classes.jobavatarname} onClick={() => this.handleCompanyClick(row.id)}>
                                        <a>{row.companyName}</a>
                                    </Typography>
                                    <Typography variant="body2">
                                        {row.companyDescription}
                                    </Typography>
                                    <Stack className={classes.descfeedback}>
                                        <Stack>
                                            <PeopleAltOutlinedIcon/>
                                            <Typography variant='body2'>{row.count}</Typography>
                                        </Stack>
                                        <Stack>
                                            <StarBorderOutlinedIcon/>
                                            <Typography variant='body2'>{row.rating}</Typography>
                                        </Stack>
                                        <Stack>
                                        {row.verifying ? (
                                            <Stack>
                                                <CheckCircleOutlineOutlinedIcon />
                                                <Typography variant='body2'><span>{row.verifying}</span></Typography>
                                            </Stack>
                                        ) : null}
                                        </Stack>
                                    </Stack>
                                    </div>
                                </Stack>

                                <Box className={classes.jobdetails}>
                                    <Paper variant="outlined" className={classes.jobdetailspaper}>
                                        <Stack className={classes.jobdetailsstack}>
                                            <div>
                                            <Typography variant="h6">{row.jobTitle1}</Typography>
                                            <Typography variant="body2">
                                                <span>{row.jobDetails1}</span>
                                            </Typography>
                                            </div>
                                            <CardActions>
                                            <Typography>{row.postedTime1}</Typography>
                                            {row.jobTitle2 && row.jobDetails2 ? (
                                                <Button variant="text">
                                                <Typography>Apply</Typography>
                                                </Button>
                                            ) : null}
                                            </CardActions>
                                        </Stack>
                                        {row.jobTitle2 && row.jobDetails2 ? <Divider /> : null}
                                        {row.jobTitle2 && row.jobDetails2 ? (
                                            <Stack className={classes.jobdetailsstack}>
                                            <div>
                                                <Typography variant="h6">{row.jobTitle2}</Typography>
                                                <Typography variant="body2">
                                                <span>{row.jobDetails2}</span>
                                                </Typography>
                                            </div>
                                            <CardActions>
                                                <Typography>{row.postedTime2}</Typography>
                                                <Button variant="text">
                                                <Typography>Apply</Typography>
                                                </Button>
                                            </CardActions>
                                            </Stack>
                                        ) : null}
                                    </Paper>
                                </Box>

                            </CardContent>

                        </Paper>
                    ))}

                </Stack>
                
            </Container>
            </div>
        )}
        
        {openPage === 'createjob' && (
            <div className={classes.createjob}>
            <Box>
                <Grid container className={classes.maingrid}>

                    <Grid item xs={12} sm={4} className={classes.creatingjobimg}>
                    </Grid>

                    <Grid item xs={12} md={8} className={classes.create_job_right_grid}>
                        <Stack className={classes.stepper_stack}>

                            <Typography variant='h4'>Create Job Ad</Typography>

                            <Stepper activeStep={activeStep} orientation="vertical">

                                <Step className={classes.stack_step}>
                                    <StepLabel>CATEGORY</StepLabel>
                                    <StepContent className={classes.stack_stepcont}>
                                        <Stack className={classes.stack_inner_stepcont}>

                                            <div>
                                                <Typography variant='h6'>I’m looking for...</Typography>
                                            </div>

                                            <Stack className={classes.stack_selected_job}>
                                                <Paper variant="outlined">
                                                    <Stack className={classes.selectedjob}>
                                                    <Radio checked={selectedValue === 'a'} onChange={this.handleChange} value="a"
                                                        name="radio-buttons"
                                                        inputProps={{ 'aria-label': 'A' }}
                                                    />
                                                    <div>
                                                        <Typography variant='h6'>Freelancers</Typography>
                                                        <Typography variant='body2'>Best for small, friendly-pocket projects</Typography>
                                                    </div>
                                                    </Stack>
                                                </Paper>
                                                <Paper variant="outlined">
                                                    <Stack className={classes.selectedjob}>
                                                    <Radio checked={selectedValue === 'b'} onChange={this.handleChange} value="b"
                                                        name="radio-buttons"
                                                        inputProps={{ 'aria-label': 'B' }}
                                                    />
                                                    <div>
                                                        <Typography variant='h6'>Contractor</Typography>
                                                        <Typography variant='body2'>Limited-time projects with highly experienced individuals</Typography>
                                                    </div>
                                                    </Stack>
                                                </Paper>
                                                <Paper variant="outlined">
                                                    <Stack className={classes.selectedjob}>
                                                    <Radio checked={selectedValue === 'c'} onChange={this.handleChange} value="c"
                                                        name="radio-buttons"
                                                        inputProps={{ 'aria-label': 'C' }}
                                                    />
                                                    <div>
                                                        <Typography variant='h6'>Employees</Typography>
                                                        <Typography variant='body2'>Unlimited term contracts</Typography>
                                                    </div>
                                                    </Stack>
                                                </Paper>
                                            </Stack>

                                            <div>
                                                <Button variant="contained" onClick={this.handleNext}>
                                                    {activeStep === 2 ? 'Finish' : 'Continue'}
                                                    <ArrowForwardOutlinedIcon />
                                                </Button>
                                            </div>

                                        </Stack>
                                    
                                    </StepContent>
                                </Step>

                                <Step className={classes.stack_step}>
                                    <StepLabel>JOB DETAILS</StepLabel>
                                    <StepContent className={classes.stack_stepcont}>
                                        <Stack className={classes.stack_inner_stepcont}>

                                            <div>
                                                <Typography variant='h6'>What is the job about?</Typography>
                                            </div>

                                            <Stack className={classes.stack_selected_job}>
                                                <FormControl>
                                                    <TextField id="filled-basic" label="Job Title" variant="filled" className={classes.txtfield}/>
                                                </FormControl>
                                                <FormControl>
                                                    <TextField id="filled-basic" label="Tags" variant="filled" className={classes.txtfield}
                                                        InputProps={{ endAdornment: (<Button variant="text"> Add </Button>),}}
                                                    />
                                                </FormControl>
                                            </Stack>
                                            
                                            <div>
                                                <Typography variant='h6'>When is the project starting?</Typography>
                                            </div>

                                            <Stack className={classes.stack_selected_date}>
                                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                    <DemoContainer components={['MobileDatePicker']}>
                                                        <DemoItem label="Start date">
                                                        <MobileDatePicker defaultValue={dayjs('2022-04-17')} />
                                                        </DemoItem>
                                                    </DemoContainer>
                                                </LocalizationProvider>
                                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                    <DemoContainer components={['MobileDatePicker']}>
                                                        <DemoItem label="End date">
                                                        <MobileDatePicker defaultValue={dayjs('2022-04-17')} />
                                                        </DemoItem>
                                                    </DemoContainer>
                                                </LocalizationProvider>
                                            </Stack>

                                            <div>
                                                <Button variant="contained" onClick={this.handleNext}>
                                                    {activeStep === 2 ? 'Finish' : 'Continue'}
                                                    <ArrowForwardOutlinedIcon />
                                                </Button>
                                                <Button disabled={activeStep === 0} onClick={this.handleBack}>
                                                    Back
                                                </Button>
                                            </div>
                                        </Stack>
                                    </StepContent>
                                </Step>

                                <Step className={classes.stack_step}>
                                    <StepLabel>DESCRIPTION</StepLabel>
                                    <StepContent className={classes.stack_stepcont}>

                                    <Stack className={classes.stack_inner_stepcont}>
                                        
                                        <div>
                                            <Typography variant='h6'>How would you describe the job post?</Typography>
                                        </div>
                                    
                                        <Stack className={classes.stackfield}>
                                            <div>
                                                <Box className={classes.contentbox}>
                                                <CardActions>
                                                <label for="selectOption"></label>
                                                    <select id="selectOption">
                                                    <option value="Heading 1">Heading 1</option>
                                                    <option value="Heading 2">Heading 2</option>
                                                    <option value="Heading 3">Heading 3</option>
                                                    <option value="Normal">Normal</option>
                                                    </select>
                                                    <Box className={classes.contentbtn}>
                                                    <Button><FormatBoldIcon /></Button>
                                                    <Button><FormatItalicIcon/></Button>
                                                    <Button><FormatUnderlinedIcon/></Button>
                                                    <Button><LinkOutlinedIcon /></Button>
                                                    </Box>
                                                    <Box className={classes.contentbtn}>
                                                    <Button><FormatListNumberedIcon /></Button>
                                                    <Button><FormatListNumberedIcon /></Button>
                                                    </Box>
                                                </CardActions>
                                                <Divider />
                                                <TextField fullWidth rows={4} multiline placeholder="Write something"/>
                                                </Box>
                                                
                                            </div>
                                        </Stack>

                                        <div>
                                            <Button variant="contained" onClick={this.handleNext}>
                                            Create Job
                                            <ArrowForwardOutlinedIcon />
                                            </Button>
                                            <Button disabled={activeStep === 0} onClick={this.handleBack}>
                                                Back
                                            </Button>
                                        </div>
                                    </Stack>   

                                    </StepContent>
                                </Step>

                            </Stepper>
                            
                            {activeStep === 3 && (
                            <Paper square elevation={0} >
                                <Typography>All steps completed - you&apos;re finished</Typography>
                                <Button onClick={this.handleReset} >
                                Reset
                                </Button>
                            </Paper>
                            )}
                        </Stack>
                    </Grid>
                </Grid>
        </Box>
            </div>
        )}
        
        {openPage === 'jobspage' && (                                    
            <div className={classes.jobspage}>
                <Container>
                    <Grid container spacing={1}>
                        <Grid item xs={12} >
                            <Box className={classes.innerheader}>
                                <WestOutlinedIcon className={classes.arrowicon} onClick={this.handleWestIconClick}/>
                                <Typography variant="h4">Jobs</Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} lg={8}>

                        
                            <Paper className={classes.jobdescpage}>

                            {data.map((row, index) => (
                                <React.Fragment key={row.id}>
                                    {selectedCompanyId === row.id && (
                                        <Stack className={classes.jobpagedescription}>
                                            <a>
                                            <Avatar src={row.imgSrc} className={classes.desimg} />
                                            </a>
                                            <div className={classes.descdetails}>
                                            <Typography>
                                                <a>{row.companyName}</a>
                                            </Typography>
                                            <Typography variant="body2">
                                                {row.companyDescription}
                                            </Typography>
                                            </div>
                                        </Stack>
                                    )}
                                </React.Fragment>
                                
                            ))}

                                <Divider />

                                <Box className={classes.mediatabs}>
                                    <TabContext value={value} >
                                        <Box className={classes.clickingtabs} >
                                            <TabList className={classes.tabsheader} onChange={this.handleChange}>
                                                <Tab label="Overview" value="1" />
                                                <Tab label="Reviews" value="2" />
                                                <Tab label="Activity" value="3" />
                                                <Tab label="Team" value="4" />
                                                <Tab label="Assets" value="5" />
                                            </TabList>
                                        </Box>
                                        <Divider/>

                                        <TabPanel value="1">
                                            <CardContent className={classes.jobpagecontent}>
                                                {data.map((row,index) =>(
                                                    <React.Fragment key={row.id}>
                                                        {selectedCompanyId === row.id && (
                                                            <Typography key={index} variant="h5">
                                                                {row.companyDescription}
                                                            </Typography>
                                                        )}
                                                    </React.Fragment>
                                                ))}

                                                <Box className={classes.jobpagetext}>
                                                    <div>
                                                        <Typography variant='body2'>
                                                            Augmastic is the world’s leading AR technology company, 
                                                            sparking creative and engaging journeys in the real world.
                                                            Our products inspire outdoor exploration, 
                                                            exercise, and meaningful social interaction.
                                                        </Typography>
                                                        <Typography variant='body2'>
                                                            Originally formed at Google in 2011, we became an independent company 
                                                            in 2015 with a strong group of investors including Nintendo, 
                                                            The Pokémon Company, and Alsop Louie Partners.
                                                        </Typography>
                                                        <Typography variant='body2'>
                                                            Niantic is an Equal Opportunity and Affirmative 
                                                            Action employer. We believe that cultivating 
                                                            a workplace where our people are supported and included is 
                                                            essential to creating great products our community will love.
                                                        </Typography>
                                                        <Typography variant='body2'>
                                                            Our mission emphasizes seeking and hiring diverse voices, including 
                                                            those who are traditionally underrepresented in the technology industry, 
                                                            and we consider this to be one of the most important values we hold close. 
                                                            We're a hard-working, fun, and exciting group who value intellectual curiosity 
                                                            and a passion for problem-solving! We have growing offices located in San 
                                                            Francisco,Sunnyvale, Bellevue, Los Angeles, Tokyo, Hamburg, London, and Zurich.
                                                        </Typography>
                                                    </div>
                                                </Box>

                                                <ImageList variant="masonry" style={{columnCount: 3,columnGap: 24,}} className={classes.jobpageimg}>
                                                    <ImageListItem style={{marginBottom: 24,}}>
                                                        <img alt="img1" variant="square" src={gallery1} />
                                                    </ImageListItem>
                                                    <ImageListItem style={{marginBottom: 24,}}>
                                                        <img alt="img2" variant="square" src={gallery2} />
                                                    </ImageListItem>
                                                    <ImageListItem style={{marginBottom: 24,}}>
                                                        <img alt="img3" variant="square" src={gallery3} />
                                                    </ImageListItem>
                                                    <ImageListItem style={{marginBottom: 24,}}>
                                                        <img alt="img4" variant="square" src={gallery4} />
                                                    </ImageListItem>
                                                    <ImageListItem style={{marginBottom: 24,}}>
                                                        <img alt="img5" variant="square" src={gallery5} />
                                                    </ImageListItem>
                                                    <ImageListItem style={{marginBottom: 24,}}>
                                                        <img alt="img6" variant="square" src={gallery6} />
                                                    </ImageListItem>
                                                </ImageList>

                                                <Divider/>

                                                <Stack className={classes.jobs}>
                                                    <Typography variant='h6'>Jobs</Typography>
                                                    <Box className={classes.jobsbtn}>
                                                        <Typography variant="h4">Jobs</Typography>
                                                        <ArrowForwardOutlinedIcon/>
                                                    </Box>
                                                </Stack>

                                                <Box className={classes.jobdetails}>
                                                    {data.map((row,index) =>(
                                                        <React.Fragment key={row.id}>
                                                            {selectedCompanyId === row.id && (
                                                                <Paper variant="outlined" key={index} className={classes.jobdetailspaper}>
                                                                    <Stack className={classes.jobdetailsstack}>
                                                                        <div>
                                                                        <Typography variant="h6">{row.jobTitle1}</Typography>
                                                                        <Typography variant="body2">
                                                                            <span>{row.jobDetails1}</span>
                                                                        </Typography>
                                                                        </div>
                                                                        <CardActions>
                                                                        <Typography>{row.postedTime1}</Typography>
                                                                        {row.jobTitle2 && row.jobDetails2 ? (
                                                                            <Button variant="text">
                                                                            <Typography>Apply</Typography>
                                                                            </Button>
                                                                        ) : null}
                                                                        </CardActions>
                                                                    </Stack>
                                                                    {row.jobTitle2 && row.jobDetails2 ? <Divider /> : null}
                                                                    {row.jobTitle2 && row.jobDetails2 ? (
                                                                        <Stack className={classes.jobdetailsstack}>
                                                                        <div>
                                                                            <Typography variant="h6">{row.jobTitle2}</Typography>
                                                                            <Typography variant="body2">
                                                                            <span>{row.jobDetails2}</span>
                                                                            </Typography>
                                                                        </div>
                                                                        <CardActions>
                                                                            <Typography>{row.postedTime2}</Typography>
                                                                            <Button variant="text">
                                                                            <Typography>Apply</Typography>
                                                                            </Button>
                                                                        </CardActions>
                                                                        </Stack>
                                                                    ) : null}
                                                                </Paper>
                                                            )}
                                                        </React.Fragment>
                                                    ))}
                                                </Box>

                                                <Divider className={classes.jobmemberdivider}/>

                                                <Stack className={classes.jobs}>
                                                    <Typography variant='h6'>Members</Typography>
                                                    <Box className={classes.jobsbtn}>
                                                        <Typography variant="h4">Members</Typography>
                                                        <ArrowForwardOutlinedIcon/>
                                                    </Box>
                                                </Stack>

                                                <Box className={classes.membersbox}>
                                                    <Grid container spacing={3}>
                                                        {membersArray.map((member, index) => (
                                                        <Grid item xs={12} sm={6} key={index}>
                                                            <Box className={classes.members}>
                                                                <Stack className={classes.memberdetails}>
                                                                    <Avatar src={member.avatar}/>
                                                                    <div>
                                                                        <Typography variant='h6'>{member.name}</Typography>
                                                                        <Typography variant='body2'>{member.role}</Typography>
                                                                    </div>
                                                                </Stack>
                                                                <Stack className={classes.memberjobdetails}>
                                                                    {member.skills.map((skill, index) => (
                                                                    <Chip label={skill} key={index} />
                                                                    ))}
                                                                </Stack>
                                                            </Box>
                                                        </Grid>
                                                        ))}
                                                    </Grid>
                                                </Box>
                                                
                                            </CardContent>
                                        </TabPanel>

                                        <TabPanel value="2">
                                            <CardContent className={classes.jobpagecontent}>
                                                <div className={classes.reviewtitle}>
                                                    <Typography variant='h6'>Reviews</Typography>
                                                </div>
                                                <Stack className={classes.reviewssec}>
                                                    <Paper  variant="outlined" className={classes.papersec}>
                                                        <CardContent>
                                                            <Stack className={classes.paperstack1}>
                                                                <Typography variant='h6'>Overall reviews</Typography>
                                                                <Stack className={classes.paperstack2}>
                                                                    <Stack className={classes.paperstack3}>
                                                                        <StarIcon/>
                                                                        <Typography variant='h6'>3.66/5</Typography>
                                                                    </Stack>
                                                                    <span></span>
                                                                    <Typography variant='subtitle1'>3 reviews in total</Typography>
                                                                </Stack>

                                                            </Stack>
                                                        </CardContent>
                                                    </Paper>
                                                    <Paper  variant="outlined" className={classes.papersec}>
                                                        <CardContent>
                                                            <Stack className={classes.paperstack1}>
                                                                <Avatar src={FranPerez}/>
                                                                <div>
                                                                    <Typography variant='h6'>Great company, providing an awesome & easy to use product</Typography>
                                                                    <Stack className={classes.paperstack2}>
                                                                        <Stack className={classes.paperstack3}>
                                                                            <StarIcon/>
                                                                            <Typography variant='h6'>3.8/5</Typography>
                                                                        </Stack>
                                                                        <span></span>
                                                                        <Typography variant='subtitle1'>Anika Visser</Typography>
                                                                        <span></span>
                                                                        <Typography variant='subtitle1'>2 days ago</Typography>
                                                                    </Stack>
                                                                </div>
                                                            </Stack>
                                                            <Typography variant='body2' className={classes.reviewtext}>
                                                                I have been working with this company full-time. 
                                                                Great for the work life balance. Cons, decentralized 
                                                                decision making process across the organization.
                                                            </Typography>
                                                        </CardContent>
                                                    </Paper>
                                                    <Paper  variant="outlined" className={classes.papersec}>
                                                    <CardContent>
                                                            <Stack className={classes.paperstack1}>
                                                                <Avatar className={classes.vpavatar}>VP</Avatar>
                                                                <div>
                                                                    <Typography variant='h6'>Friendly environment</Typography>
                                                                    <Stack className={classes.paperstack2}>
                                                                        <Stack className={classes.paperstack3}>
                                                                            <StarIcon/>
                                                                            <Typography variant='h6'>3.4/5</Typography>
                                                                        </Stack>
                                                                        <span></span>
                                                                        <Typography variant='subtitle1'>Victor Plesoianu</Typography>
                                                                        <span></span>
                                                                        <Typography variant='subtitle1'>25 days ago</Typography>
                                                                    </Stack>
                                                                </div>
                                                            </Stack>
                                                            <Typography variant='body2' className={classes.reviewtext}>
                                                                Every day you learn something new - that is a typical day at 
                                                                work in Augmastic. I am surrounded by supportive people, 
                                                                from different cultures, we have a strong and unified 
                                                                team and help each other whenever is needed. 
                                                                The most enjoyable part of the job is that you meet new people, 
                                                                experts on different disciplines that might help you in your work, but the hardest part of 
                                                                the job is that there are too many tools and systems to use.
                                                            </Typography>
                                                        </CardContent>
                                                    </Paper>
                                                    <Paper  variant="outlined" className={classes.papersec}>
                                                        <CardContent>
                                                            <Stack className={classes.paperstack1}>
                                                                <Avatar className={classes.vpavatar}>VP</Avatar>
                                                                <div>
                                                                    <Typography variant='h6'>Great company, providing an awesome & easy to use product</Typography>
                                                                    <Stack className={classes.paperstack2}>
                                                                        <Stack className={classes.paperstack3}>
                                                                            <StarIcon/>
                                                                            <Typography variant='h6'>3.8/5</Typography>
                                                                        </Stack>
                                                                        <span></span>
                                                                        <Typography variant='subtitle1'>Victor Plesoianu</Typography>
                                                                        <span></span>
                                                                        <Typography variant='subtitle1'>2 months ago</Typography>
                                                                    </Stack>
                                                                </div>
                                                            </Stack>
                                                            <Typography variant='body2' className={classes.reviewtext}>
                                                                I have been working with this company full-time. 
                                                                Great for the work life balance. Cons, decentralized 
                                                                decision making process across the organization.
                                                            </Typography>
                                                        </CardContent>
                                                    </Paper>
                                                    <Box className={classes.loadmorebtn}> 
                                                        <Button variant="text" className={classes.loadbtn}><Typography>Load more</Typography></Button>
                                                    </Box>
                                                    <Stack className={classes.createcomment}>
                                                            <Avatar src={anikaimg} className={classes.designeravatar} />
                                                            <Stack className={classes.stackfield}>
                                                                <TextField fullWidth rows={4} multiline placeholder="Send your review"/>
                                                                <CardActions className={classes.cardicons}>
                                                                    <Stack className={classes.stackicons}>
                                                                        <Avatar><StarBorderOutlinedIcon/></Avatar>
                                                                        <Avatar><StarBorderOutlinedIcon/></Avatar>
                                                                        <Avatar><StarBorderOutlinedIcon/></Avatar>
                                                                        <Avatar><StarBorderOutlinedIcon/></Avatar>
                                                                    </Stack>
                                                                    <Button variant="contained"><Typography>Send review</Typography></Button>
                                                                </CardActions>
                                                            </Stack>
                                                    </Stack>
                                                </Stack>
                                            </CardContent>
                                        </TabPanel>

                                        <TabPanel value="3">
                                            <CardContent className={classes.jobpagecontent}> 
                                                <div className={classes.reviewtitle}>
                                                    <Typography variant='h6'>Activity</Typography>
                                                </div>  
                                                <Timeline className={classes.timelinesec}>

                                                    <TimelineItem>
                                                        <TimelineSeparator>
                                                        <Avatar src={JieYanSong}/>
                                                        <TimelineConnector />
                                                        </TimelineSeparator>
                                                        <TimelineContent>
                                                        <Typography className={classes.activity}>
                                                            <Box className={classes.activitytxt}>
                                                                <Typography variant='h6'>Jie Yang Song added a new job</Typography>
                                                                <Typography variant='body2'>
                                                                    <a>Remote React / React Native Developer</a>
                                                                </Typography>
                                                            </Box>
                                                            <p>May 22, 10:58 AM</p>
                                                        </Typography>
                                                        </TimelineContent>
                                                    </TimelineItem>

                                                    <TimelineItem>
                                                        <TimelineSeparator>
                                                        <Avatar src={anikaimg}/>
                                                        <TimelineConnector />
                                                        </TimelineSeparator>
                                                        <TimelineContent>
                                                        <Typography className={classes.activity}>
                                                            <Box className={classes.activitytxt}>
                                                                <Typography variant='h6'>Anika Visser added a new job</Typography>
                                                                <Typography variant='body2'>
                                                                    <a>Senior Golang Backend Engineer</a>
                                                                </Typography>
                                                            </Box>
                                                            <p>May 21, 10:58 AM</p>
                                                        </Typography>
                                                        </TimelineContent>
                                                    </TimelineItem>

                                                    <TimelineItem>
                                                        <TimelineSeparator>
                                                        <Avatar src={JieYanSong}/>
                                                        <TimelineConnector />
                                                        </TimelineSeparator>
                                                        <TimelineContent>
                                                        <Typography className={classes.activity}>
                                                            <Box className={classes.activitytxt}>
                                                                <Typography variant='h6'>Jie Yang Song </Typography>
                                                                <Typography variant='body2'>added </Typography>
                                                                <Typography variant='h6'>Omar Darboe </Typography>
                                                                <Typography variant='body2'>as a team member</Typography>
                                                            </Box>
                                                            <p>May 20, 10:58 AM</p>
                                                        </Typography>
                                                        </TimelineContent>
                                                    </TimelineItem>

                                                    <TimelineItem>
                                                        <TimelineSeparator>
                                                        <Avatar src={JieYanSong}/>
                                                        </TimelineSeparator>
                                                        <TimelineContent>
                                                        <Typography className={classes.activity}>
                                                            <Box className={classes.activitytxt}>
                                                                <Typography variant='h6'>Jie Yang Song </Typography>
                                                                <Typography variant='body2'>created</Typography>
                                                                <Typography variant='h6'>Augmastic Inc </Typography>
                                                            </Box>
                                                            <p>May 19, 10:58 AM</p>
                                                        </Typography>
                                                        </TimelineContent>
                                                    </TimelineItem>

                                                </Timeline>
                                                <CardActions className={classes.assetsbtn}>
                                                    <Button variant="text"><Typography>Load more</Typography></Button>
                                                </CardActions>
                                            </CardContent>
                                        </TabPanel>
                                        
                                        <TabPanel value="4">
                                            <CardContent className={classes.jobpagecontent}> 
                                                <div className={classes.reviewtitle}>
                                                    <Typography variant='h6'>Team&nbsp;(3)</Typography>
                                                </div>  
                                                <Box className={classes.membersbox}>
                                                    <Grid container spacing={3}>
                                                        <Grid item xs={12} sm={6}>
                                                            <Box className={classes.members}>
                                                                <Stack className={classes.memberdetails}>
                                                                    <Avatar src={JieYanSong}/>
                                                                    <div>
                                                                        <Typography variant='h6'>Jie Yang Song</Typography>
                                                                        <Typography variant='body2'>CEO & Co-founder</Typography>
                                                                    </div>
                                                                </Stack>
                                                                <Stack className={classes.memberjobdetails}>
                                                                    <Chip label="Javascript" />
                                                                    <Chip label="React" />
                                                                    <Chip label="Go" />
                                                                </Stack>
                                                            </Box>
                                                        </Grid>
                                                        <Grid item xs={12} sm={6}>
                                                        <Box className={classes.members}>
                                                                <Stack className={classes.memberdetails}>
                                                                    <Avatar src={FranPerez}/>
                                                                    <div>
                                                                        <Typography variant='h6'>Fran Perez</Typography>
                                                                        <Typography variant='body2'>CTO & Co-founder</Typography>
                                                                    </div>
                                                                </Stack>
                                                                <Stack className={classes.memberjobdetails}>
                                                                    <Chip label="C" />
                                                                    <Chip label="C++" />
                                                                    <Chip label="Java" />
                                                                </Stack>
                                                            </Box>
                                                        </Grid>
                                                        <Grid item xs={12} sm={6}>
                                                        <Box className={classes.members}>
                                                                <Stack className={classes.memberdetails}>
                                                                    <Avatar src={FranPerez}/>
                                                                    <div>
                                                                        <Typography variant='h6'>Omar Darboe</Typography>
                                                                        <Typography variant='body2'>CFO</Typography>
                                                                    </div>
                                                                </Stack>
                                                                <Stack className={classes.memberjobdetails}>
                                                                    <Chip label="Go" />
                                                                    <Chip label="Python" />
                                                                </Stack>
                                                            </Box>
                                                        </Grid>
                                                    </Grid>
                                                </Box>
                                            </CardContent>
                                        </TabPanel>

                                        <TabPanel value="5">
                                            <CardContent className={classes.jobpagecontent}> 
                                                <div className={classes.reviewtitle}>
                                                    <Typography variant='h6'>Assets&nbsp;(3)</Typography>
                                                </div>  
                                                <Box className={classes.assetsbox}>
                                                    <Paper className={classes.assetsboxpaper}>
                                                        <CardMedia className={classes.assetsimgbox}></CardMedia>
                                                        <Box className={classes.assetsimgtxt}>
                                                            <Typography variant='h6'>company-cover.png</Typography>
                                                            <Typography variant='variant'>23 Kb</Typography>
                                                        </Box>
                                                        <Divider/>
                                                        <CardActions className={classes.assetsbtn}>
                                                        <Button variant="text"><Typography>Download</Typography></Button>
                                                        </CardActions>
                                                    </Paper>
                                                    <Paper className={classes.assetsboxpaper}>
                                                        <Box className={classes.assetsbadgebox}>
                                                            <Badge anchorOrigin={{vertical: 'bottom',horizontal: 'right',}} className={classes.assetsbadge}>
                                                                <InsertDriveFileOutlinedIcon />
                                                                <Badge>PDF</Badge>
                                                            </Badge>
                                                        </Box>
                                                        <Box className={classes.assetsimgtxt}>
                                                            <Typography variant='h6'>Presentation.pdf</Typography>
                                                            <Typography variant='variant'>3 Mb</Typography>
                                                        </Box>
                                                        <Divider/>
                                                        <CardActions className={classes.assetsbtn}>
                                                        <Button variant="text"><Typography>Download</Typography></Button>
                                                        </CardActions>
                                                    </Paper>    
                                                </Box>
                                            </CardContent>
                                        </TabPanel>

                                    </TabContext>
                                </Box>
                            </Paper>
                    
                        </Grid>

                        <Grid item xs={12} lg={4}>
                        <Paper className={classes.jobdescpage}>
                            <CardContent >
                                <Typography variant='body2' className={classes.aboutsec}>About</Typography>
                                <List>
                                    <ListItem className={classes.listitems}>
                                        <ListItemText>
                                            <Typography variant='h6'>Website</Typography>
                                            <Box>
                                                <Typography variant='body2'>https://augmastic.dev</Typography>
                                            </Box>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem className={classes.listitems}>
                                        <ListItemText>
                                            <Typography variant='h6'>Locations</Typography>
                                            <Box>
                                                <Typography variant='body2'>New York City</Typography>
                                                <Typography variant='body2'>Milano</Typography>
                                                <Typography variant='body2'>Moscow</Typography>
                                            </Box>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem className={classes.listitems}>
                                        <ListItemText>
                                            <Typography variant='h6'>Company size</Typography>
                                            <Box>
                                                <Typography variant='body2'>50-100</Typography>
                                            </Box>
                                        </ListItemText>
                                    </ListItem>
                                </List>
                                <Divider className={classes.aboutdivider}/>
                                <Typography variant='body2' className={classes.aboutsec}>About</Typography>
                                <Stack className={classes.founders}>
                                    <Stack className={classes.foundersec}>
                                    <Avatar src={JieYanSong}/>
                                    <div>
                                        <Typography variant='h6'>Jie Yang Song</Typography>
                                        <Typography variant='body2'>CEO & Co-founder</Typography>
                                    </div>
                                    </Stack>
                                    <Stack className={classes.foundersec}>
                                    <Avatar src={FranPerez}/>
                                    <div>
                                        <Typography variant='h6'>Fran Perez</Typography>
                                        <Typography variant='body2'>CTO & Co-founder</Typography>
                                    </div>
                                    </Stack>
                                    <Stack className={classes.foundersec}>
                                    <Avatar src={anikaimg} className={classes.designeravatar} />
                                    <div>
                                        <Typography variant='h6'>Omar Darboe</Typography>
                                        <Typography variant='body2'>CFO</Typography>
                                    </div>
                                    </Stack>
                                </Stack>
                            </CardContent>
                        </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        )} 

        

      </div>
    )
  }
}
export default withStyles((theme)=>({
    ...Jobstyles(theme),}))
    (Jobcomp);