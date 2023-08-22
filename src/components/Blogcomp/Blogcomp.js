import React, { Component } from 'react';
import blogStyle from './Blogcomp.style';
import { withStyles } from '@mui/styles';
import { Box,Chip,Avatar,Paper, Grid, Button,Input, Typography, Divider, Stack, FormControl,Link, IconButton} from '@mui/material';
import { TextField,InputLabel,Select,MenuItem,InputAdornment } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import jieyanimg from '../../Assets/avatar-jie-yan-song.png';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import post5 from '../../Assets/post5.svg';
import Container from '@mui/material/Container';
import antoniologo from '../../Assets/avatar-alcides-antonio.png';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import UnfoldMoreOutlinedIcon from '@mui/icons-material/UnfoldMoreOutlined';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';



class Blogcomp extends Component {
    constructor(props) {
      super(props)
      this.state = {
        openPage: 'blogpage',
        selectedPostId: null,
        selectedOption: 'Normal',
      };
      this.handleChange = this.handleChange.bind(this);
    }

    handleTitleClick = (postId) => {
      this.setState({ openPage: 'postpage', selectedPostId: postId });
    };

    handleNewpostClick=()=>{
      this.setState({openPage:'createpostpage'});
    };

    handleCanceleClick=()=>{
      this.setState({openPage:'blogpage'});
    };

    handlePublishChangeClick=(postId)=>{
      this.setState({ openPage: 'postpage',selectedPostId: postId});
    };

    handleEditClick=()=>{
      this.setState({openPage:'createpostpage'})
    }

    handleBlogMainPageClick = () => {
      this.setState({ openPage: 'blogpage',selectedPostId: null });
    };

    handleChange(event) {
      this.setState({
        selectedOption: event.target.value,
      });
    }

render() {

  const gridData = [
    {
      id: 1,
      category: 'Programing',
      title: 'Why I Still Lisp, and You Should Too',
      author: 'Jie Yan Song',
      date: 'Aug 2, 2023',
      readTime: '5 min read',
      imageClass: 'cardimage1',
      description:
        'Aliquam dapibus elementum nulla at malesuada. Ut mi nisl, aliquet non mollis vel, feugiat non nibh.',
    },
    {
      id: 2,
      category: 'Productivity',
      title: 'Scrum Has Hit the Glass Ceiling',
      author: 'Omar Darobe',
      date: 'Aug 2, 2023',
      readTime: '6 min read',
      imageClass: 'cardimage2',
      description: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    },
    {
      id: 3,
      category: 'Entrepreneurs',
      title: 'How Model View Controller (MVC) Architectures Work',
      author: 'Omar Darobe',
      date: 'Aug 2, 2023',
      readTime: '6 min read',
      imageClass: 'cardimage3',
      description: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    },
    {
      id: 4,
      category: 'Innovation',
      title: 'Generating Passive Income Is Hard, Here Is a Better Option',
      author: 'Omar Darobe',
      date: 'Aug 2, 2023',
      readTime: '6 min read',
      imageClass: 'cardimage4',
      description: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    },
  ]

  const {classes} = this.props;
  const { openPage,selectedPostId,selectedOption } = this.state;
  const selectedPost = gridData.find((item) => item.id === selectedPostId);


  return (
    <div>
      
      {openPage === 'blogpage' && (
        <div className={classes.blogpage}>
          
        <Grid>
                <Box>
                    <Typography variant='h6' className={classes.blogtitle}>Blog</Typography>
                    <ul className={classes.bloglist}>
                        <li>
                            <Typography><a href="/Dashboard">Dashboard</a></Typography>
                        </li>
                        <li>
                            <div className={classes.blogspace}></div>
                        </li>
                        <li>
                            <Typography><Link to="/blog">Blog</Link></Typography>
                        </li>
                        <li> <div className={classes.blogspace}></div> </li>
                        <li>
                            <Typography variant='h6'>List</Typography>
                        </li>
                    </ul>
                </Box>
        </Grid>

        <div className={classes.blogheader}>
              <div className={classes.blogheaderlist}>
                <Typography variant='h6'>Hello, Admin</Typography>
                <Button className={classes.postbtn} onClick={this.handleNewpostClick}>
                  <Typography>New Post</Typography>
                </Button>
              </div>
        </div>

        <div classname={classes.articleblog}>
          <Grid className={classes.article}>
            <Typography variant='h2'>Recent Articles</Typography>
            <Typography variant='body2'>Discover the latest news, tips and user research insights from Acme.<br></br>
              You will learn about web infrastructure, design systems and devops APIs best practices.</Typography>
          </Grid>
        </div>

        <Divider className={classes.dividerbottom}/>

        <div className={classes.carditems}>
          <Grid container spacing={1} className={classes.gridcontainer}>

            {gridData.map((item) => (
                <Grid item xs={6} key={item.id}>
                  <Paper>
                    <CardMedia className={classes[item.imageClass]} onClick={() => this.handleTitleClick(item.id)}></CardMedia>
                    <CardContent className={classes.cardtitle}>
                      <Box className={classes.chiptitle}>
                        <Chip label={item.category} />
                      </Box>
                      <Typography variant="h6" className={classes.posttitle} onClick={() => this.handleTitleClick(item.id)}>
                        <a>{item.title}</a>
                      </Typography>
                      <Typography variant="body2">{item.description}</Typography>
                      <CardActions>
                        <Box className={classes.cardbottom}>
                          <CardActions>
                            <Avatar src={jieyanimg} className={classes.bodyavatar} />
                            <ul className={classes.cardlist}>
                              <li>
                                <Typography>By {item.author}</Typography>
                              </li>
                              <li>
                                <div className={classes.blogspace}></div>
                              </li>
                              <li>
                                <Typography>{item.date}</Typography>
                              </li>
                            </ul>
                          </CardActions>
                        </Box>
                        <Typography className={classes.readtext}>{item.readTime}</Typography>
                      </CardActions>
                    </CardContent>
                  </Paper>
                </Grid>
            ))}

          </Grid>

          <Stack className={classes.stackitems}>
            <Button className={`${classes.newoldpostbtn} ${classes.newerbtn}`}><ArrowBackOutlinedIcon />Newer</Button>
            <Button className={`${classes.newoldpostbtn} ${classes.olderbtn}`}>Older posts<ArrowForwardOutlinedIcon/></Button>
          </Stack>

          <Box>
            <Paper className={classes.paperemail}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <div className={classes.subscribesec}>
                      <Typography variant='h4'>Join the developer list</Typography>
                      <Typography variant='body2'>Subscribe to our newsletter to make sure you don't miss anything.</Typography>
                      <FormControl>
                          <TextField id="filled-basic" label="Email address" variant="filled" className={classes.txtfield}/>
                      </FormControl>
                      <Button className={classes.subsbtn}>Subscribe</Button>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className={classes.subcribesecimg}>
                    <img src={post5}/>
                  </div>
                </Grid>
              </Grid>
            </Paper>
          </Box>
        </div>

      </div>
      )}
        
      {openPage === 'postpage' && selectedPost && (
        <div className={classes.postpage}>

          <Grid>
            <Box>
                <Typography variant='h6' className={classes.blogtitle}>Post</Typography>
                <ul className={classes.bloglist}>
                    <li>
                        <Typography><a href="/Dashboard">Dashboard</a></Typography>
                    </li>
                    <li>
                        <div className={classes.blogspace}></div>
                    </li>
                    <li>
                      <Typography className={classes.blogmainpage} onClick={this.handleBlogMainPageClick}>
                      <Link to='/blog'>Blog</Link> 
                      </Typography>
                    </li>
                    <li> <div className={classes.blogspace}></div> </li>
                    <li>
                        <Typography variant='h6'>Details</Typography>
                    </li>
                </ul>
            </Box>
          </Grid>

          <div className={classes.blogheader}>
            <div className={classes.blogheaderlist}>
              <Typography variant='h6'>Hello, Admin</Typography>
              <Button className={classes.posteditbtn} onClick={this.handleEditClick}>
                <Typography>Edit Post</Typography>
              </Button>
            </div>
          </div>

          
          <Stack key={selectedPost.id} className={classes.postdetails}>
            <Box className={classes.chiptitle}>
              <Chip label={selectedPost.category} />
            </Box>
            <Typography variant="h4">{selectedPost.title}</Typography>
            <Typography variant="body2">{selectedPost.description}</Typography>
            <CardActions>
              <Avatar src={jieyanimg} className={classes.bodyavatar} />
              <Box className={classes.postcardbottom}>
                <ul className={classes.postcardlist}>
                  <li>
                    <Typography>By {selectedPost.author}</Typography>
                  </li>
                  <li>
                    <div className={classes.blogspace}></div>
                  </li>
                  <li>
                    <Typography>{selectedPost.date}</Typography>
                  </li>
                </ul>
                <Typography className={classes.readtext}>{selectedPost.readTime}</Typography>
              </Box>
            </CardActions>
          </Stack>
         

          <Box><div className={classes[selectedPost.imageClass]}></div></Box>    

          <Container >
            <div className={classes.postcontent}>
              <h2>Cras at molestie lacus. Phasellus feugiat leo quis sem iaculis, sed mattis nibh accumsan.</h2>
              <p>
                Phasellus ullamcorper ultrices ullamcorper. Nunc auctor porttitor ex, non consequat ipsum aliquam at. 
                Duis dapibus dolor in nisi viverra, a elementum nulla viverra. 
                Etiam feugiat turpis leo, nec finibus diam rhoncus ac. 
                Sed at metus et orci consequat facilisis vel vel diam.
              </p>
              <h2>Cras at molestie lacus. Phasellus feugiat leo quis sem iaculis, sed mattis nibh accumsan.</h2>
              <p>
                Etiam faucibus massa auctor gravida finibus.
                Cras nulla magna, dapibus sit amet accumsan nec, ullamcorper sit amet dolor.</p>
              <p>
                Donec leo nisi, porta et gravida nec, tincidunt ac velit. Aliquam in turpis a quam tempus dapibus. 
                Morbi in tellus tempor, hendrerit mi vel, aliquet tellus. Quisque vel interdum ante. 
                Nunc quis purus sem. Donec at risus lacinia ipsum cursus condimentum at ac dui. 
                Nulla bibendum feugiat tellus ac tristique. Proin auctor, lectus et accumsan varius, 
                justo odio vulputate neque, et efficitur augue leo id ex. Aliquam eget turpis nisl. 
                Nam sapien massa, sollicitudin et vehicula a, fringilla vitae purus. Praesent a vestibulum felis.
              </p>
              <p>
                Class aptent taciti sociosqu ad litora torquent 
                <code node="[object Object]">const d = 3;</code> 
                per conubia nostra, per inceptos himenaeos. Morbi maximus metus eget nulla malesuada, 
                sit amet luctus est fringilla. Aenean imperdiet rhoncus justo, ut pharetra lorem gravida placerat. 
                Duis et enim lorem. Aliquam placerat elit est, vitae fermentum ipsum finibus sed. 
                Donec dapibus magna non tortor commodo rhoncus. Suspendisse luctus tincidunt eros, 
                aliquet pellentesque neque venenatis quis. Aliquam auctor felis nec orci ornare gravida. 
                Fusce ac neque sit amet nibh scelerisque molestie. Nullam in lorem viverra, aliquam nunc vel, 
                interdum orci. Fusce mattis est neque, et tincidunt justo blandit quis. Etiam tincidunt purus in libero semper, 
                vitae placerat dui vehicula. Pellentesque sit amet imperdiet purus, quis lacinia eros.
              </p>
              <p>
                Duis placerat turpis non metus dapibus sagittis. Vestibulum ex massa, 
                tempus pulvinar varius at, placerat non justo. Ut tristique nisl sed porta pulvinar. 
                Nunc ex nibh, tempor eget elit vel, fringilla ornare risus. Praesent vel lacus finibus, 
                laoreet nulla quis, semper tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
                Donec volutpat quis dui ac varius. Suspendisse potenti. Maecenas sagittis lacus vitae ex rhoncus, 
                eu fringilla urna luctus.
              </p>
              <h2>Donec vel erat augue. Aenean ut nisl cursus nulla tempus ultricies vel eget lorem.</h2>
              <p>
                Suspendisse pharetra dolor in massa molestie, vel molestie nunc accumsan. 
                Cras varius aliquet pellentesque. Curabitur ac mi fermentum nibh congue pharetra in eu nunc. 
                Vivamus mattis urna a fringilla facilisis. Cras finibus nulla in nulla imperdiet pharetra. 
                Morbi vel tortor turpis.
              </p>
            </div>
          </Container>

          <Divider className={classes.dividerbottom}/>

          <Stack className={classes.firststack}>

            <Stack className={classes.secondstack}>
              <Avatar src={antoniologo} className={classes.inboxlogo} />
              <Box className={classes.poststackitems}>
                <Box className={classes.postusername}>
                  <Typography variant='h6'>Alcides Antonio</Typography>
                  <Typography>about 2 hours ago</Typography>
                </Box>
                <Typography variant='body2'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
              </Box>
            </Stack>

            <Stack className={classes.secondstack}>
              <Avatar src={antoniologo} className={classes.inboxlogo} />
              <Box className={classes.poststackitems}>
                <Box className={classes.postusername}>
                  <Typography variant='h6'>Alcides Antonio</Typography>
                  <Typography>about 2 hours ago</Typography>
                </Box>
                <Typography variant='body2'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
              </Box>
            </Stack>

          </Stack>

          <Divider className={classes.dividerbottom}/>

          <Stack className={classes.secondstack}>
            <Avatar src={antoniologo} className={classes.inboxlogo} />
            <FormControl className={classes.commentfield}>
              <TextField id="filled-basic" label="Add a Comment" variant="filled" className={classes.txtcommentfield}/>
            </FormControl>
          </Stack>

          <Stack className={classes.posticonbtn}>
            <Stack className={classes.stackiconbtn}>
              <Button><AccountBoxOutlinedIcon /></Button>
              <Button><AttachFileOutlinedIcon /></Button>
              <Button><EmojiEmotionsOutlinedIcon /></Button>
            </Stack>
            <div>
              <Button className={classes.postsendbtn}>
                <Typography>Send</Typography>
              </Button>
            </div>
          </Stack>

          <Box className={classes.postdetailsbottom}>
            <Paper className={classes.paperemail}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <div className={classes.subscribesec}>
                      <Typography variant='h4'>Join the developer list</Typography>
                      <Typography variant='body2'>Subscribe to our newsletter to make sure you don't miss anything.</Typography>
                      <FormControl>
                          <TextField id="filled-basic" label="Email address" variant="filled" className={classes.txtfield}/>
                      </FormControl>
                      <Button className={classes.subsbtn}>Subscribe</Button>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className={classes.subcribesecimg}>
                    <img src={post5}/>
                  </div>
                </Grid>
              </Grid>
            </Paper>
          </Box>

        </div>
      )}

      {openPage ==='createpostpage' &&(
        <div className={classes.createpostpage}>

          <Grid>
            <Box>
                <Typography variant='h6' className={classes.blogtitle}>Create a new post</Typography>
                <ul className={classes.bloglist}>
                    <li>
                        <Typography><a href="/Dashboard">Dashboard</a></Typography>
                    </li>
                    <li>
                        <div className={classes.blogspace}></div>
                    </li>
                    <li>
                        <Typography onClick={this.handleBlogMainPageClick}><Link to='/blog'>Blog</Link></Typography>
                    </li>
                    <li> <div className={classes.blogspace}></div> </li>
                    <li>
                        <Typography variant='h6'>Create</Typography>
                    </li>
                </ul>
            </Box>
          </Grid>
          
          <div className={classes.blogheader}>
                <div className={classes.blogheaderlist}>
                  <Typography variant='h6'>Hello, Admin</Typography>
                  <Box className={classes.cancelpostbtn}>
                    <Button className={classes.cancelbtn} onClick={this.handleCanceleClick}>
                      <Typography>Cancel</Typography>
                    </Button>
                    <Button className={classes.postbtn} onClick={this.handlePublishChangeClick}>
                      <Typography>Publish changes</Typography>
                    </Button>
                    <Button className={classes.dotsbtn}>
                      <MoreHorizOutlinedIcon />
                    </Button>
                  </Box>
                </div>
          </div>

          <Stack className={classes.stackfield}>
            
            <Paper elevation={3} className={classes.paperelevation}>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={4} className={classes.leftgrid}>
                    <div className={classes.createposttitle}>
                      <Box>
                        <Typography variant='h6'>Basic details</Typography>
                      </Box>
                    </div>
                  </Grid>
                  <Grid item xs={8}>
                    <Stack className={classes.stackfield}>
                      <FormControl>
                            <TextField id="filled-basic" label="Post title" variant="filled" className={classes.txtfield}/>
                      </FormControl>
                      <FormControl>
                            <TextField id="filled-basic" label="Short description" variant="filled" className={classes.txtfield}/>
                      </FormControl>
                    </Stack>
                  </Grid>
                </Grid>
              </CardContent>
            </Paper>

            <Paper elevation={3} className={classes.paperelevation}>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={4} className={classes.leftgrid}>
                    <div className={classes.createposttitle}>
                      <Box>
                        <Typography variant='h6'>Post cover</Typography>
                      </Box>
                    </div>
                  </Grid>
                  <Grid item xs={8}>
                    <Stack className={classes.stackfield}>
                      <Box className={classes.postimage}>
                        <div className={classes.createpostimg}></div>
                      </Box>
                      <div>
                        <Button>
                              <Typography className={classes.photobtn}>Remove photo</Typography>
                        </Button>
                      </div>
                      <div>
                        <Box className={classes.drganddropbtn}>
                          <CardActions>
                            <Avatar>
                              <FileUploadOutlinedIcon />
                            </Avatar>
                            <Box>
                            <Typography variant='h6'><a href="">Click to upload</a> or drag and drop</Typography>
                              <Typography variant='body2'>(SVG, JPG, PNG, or gif maximum 900x400)</Typography>
                            </Box>
                          </CardActions>
                        </Box>
                      </div>
                    </Stack>
                  </Grid>
                </Grid>
              </CardContent>
            </Paper>

            <Paper elevation={3} className={classes.paperelevation}>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={4} className={classes.leftgrid}>
                    <div className={classes.createposttitle}>
                      <Box>
                        <Typography variant='h6'>Content</Typography>
                      </Box>
                    </div>
                  </Grid>
                  <Grid item xs={8}>
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
                  </Grid>
                </Grid>
              </CardContent>
            </Paper>

            <Paper elevation={3} className={classes.paperelevation}>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={4} className={classes.leftgrid}>
                    <div className={classes.createposttitle}>
                      <Box>
                        <Typography variant='h6'>Meta</Typography>
                      </Box>
                    </div>
                  </Grid>
                  <Grid item xs={8}>
                    <Stack className={classes.stackfield}>
                      <FormControl>
                            <TextField id="filled-basic" label="SEO title" variant="filled" className={classes.txtfield}/>
                      </FormControl>
                      <FormControl>
                            <TextField id="filled-basic" label="SEO description" variant="filled" className={classes.txtfield}/>
                      </FormControl>
                    </Stack>
                  </Grid>
                </Grid>
              </CardContent>
            </Paper>

          </Stack>






        </div>
      )}

    </div>
    )
  }
}

export default withStyles((theme) => ({
    ...blogStyle(theme),
}))(Blogcomp);