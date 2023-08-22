import post1 from '../../Assets/post1.png';
import post2 from '../../Assets/post2.png';
import post3 from '../../Assets/post3.png';
import post4 from '../../Assets/post4.png';
import post5 from '../../Assets/createpostimg.png';


const blogStyle = ((theme) => ({
    blogpage:{
        position: 'absolute',
        left: '245px',
        width: 'calc(100% - 245px)',
        top: '64px',
        background: 'rgba(255,255,255)',
        right: 0,
        padding: '20px',
        boxSizing: 'border-box',
    },
    blogtitle:{
        fontSize:'30px',
        fontWeight:'600'
    },
    bloglist:{
        display:'flex',
        alignItems: 'center',
        padding: '0px',
        gap:'5px',
        '& li':{
            listStyle:'none',
            cursor:'pointer',
            '& .css-ahj2mt-MuiTypography-root':{
                '& a':{
                    color:'#000',
                    textDecoration:'none',
                    transition:'0.4s all ease-in-out',
                    fontSize:'12px',
                    '&:hover':{
                        borderBottom:'1px solid #000'
                    }
                }
            },
            '& .css-2ulfj5-MuiTypography-root':{
                color:'#00000070',
                fontSize:'14px'
            }
        }
    },
    blogspace:{
        width: '5px',
        height:'5px',
        backgroundColor:'#000',
        borderRadius:'5px'
    },
    blogheader:{
        boxShadow:'rgba(0, 0, 0, 0.08) 0px 6px 30px',
        borderRadius:'10px',
        marginBottom:'64px',
        marginTop:'48px'
    },
    blogheaderlist:{
        display:'flex',
        padding:'14px',
        justifyContent: 'space-between',
        alignItems: 'center',
        '& .css-2ulfj5-MuiTypography-root':{
            fontSize:'14px',
            fontWeight:'600',
            color:'#0009'
        }
    },
    postbtn:{
        backgroundColor:'rgb(99, 102, 241)',
        '& .css-ahj2mt-MuiTypography-root':{
            fontSize:'13px',
            color:'#fff',
            fontWeight:'600',
            textTransform:'capitalize'
        },
        '&:hover':{
            backgroundColor:'rgb(67, 56, 202)',
        }
    },
    posteditbtn:{
        backgroundColor:'rgb(99, 102, 241)',
        '& .css-ahj2mt-MuiTypography-root':{
            fontSize:'13px',
            color:'#fff',
            fontWeight:'600',
            textTransform:'capitalize'
        },
        '&:hover':{
            backgroundColor:'rgb(67, 56, 202)',
        }
    },
    postsendbtn:{
        backgroundColor:'rgb(99, 102, 241)',
        '& .css-ahj2mt-MuiTypography-root':{
            fontSize:'13px',
            color:'#fff',
            fontWeight:'600',
            textTransform:'capitalize'
        },
        '&:hover':{
            backgroundColor:'rgb(67, 56, 202)',
        }
    },
    article:{
       '& .css-1sra7t5-MuiTypography-root':{
            fontSize:'30px',
            fontWeight:'600'
        },
        '& .css-e784if-MuiTypography-root':{
            color: 'rgb(108, 115, 127)',
            margin:'16px 0px 0px',
            lineHeight: '25px',
            fontSize: '15px',
        } 
    },
    dividerbottom:{
        margin:'32px 0px',
    },
    carditems:{
        '& .css-1ps6pg7-MuiPaper-root':{
            borderRadius:'10px',
            boxShadow: 'rgba(0, 0, 0, 0.08) 0px 5px 22px, rgba(0, 0, 0, 0.03) 0px 0px 0px 0.5px',
        }
    },
    gridcontainer:{
        '& .css-1osj8n2-MuiGrid-root':{
            padding:'10px 10px'
        }
    },
    cardimage1:{
        height:'280px',
        backgroundImage:`url(${post1})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        borderTopLeftRadius:'10px',
        borderTopRightRadius:'10px'
    },
    cardimage2:{
        height:'280px',
        backgroundImage:`url(${post2})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        borderTopLeftRadius:'10px',
        borderTopRightRadius:'10px'
    },
    cardimage3:{
        height:'280px',
        backgroundImage:`url(${post3})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        borderTopLeftRadius:'10px',
        borderTopRightRadius:'10px'
    },
    cardimage4:{
        height:'280px',
        backgroundImage:`url(${post4})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        borderTopLeftRadius:'10px',
        borderTopRightRadius:'10px'
    },
    cardtitle:{
        '& a':{
            color:'#000',
            textDecoration:'none',
            transition:'0.4s all ease-in-out',  
            fontWeight:'600',
            cursor:'pointer',
            '&:hover':{
                borderBottom:'1px solid #000'
            }
        },
        '& .css-2ulfj5-MuiTypography-root':{
            fontSize:'22px'
        },
        '& .css-1t6e9jv-MuiCardActions-root':{
            justifyContent:'space-between',
            padding:'10px 0px 0px 0px'
        }
    },
    chiptitle:{
        marginBottom:'16px',
    },
    cardlist:{
        display:'flex',
        alignItems: 'center',
        padding: '0px',
        gap:'5px',
        '& .css-ahj2mt-MuiTypography-root':{
            fontSize:'12px',
        }
    },
    cardbottom:{
        '& .css-1t6e9jv-MuiCardActions-root':{
            gap:'15px',
        },
        '& li':{
            listStyle:'none',
            '& .css-1t6e9jv-MuiCardActions-root':{
                padding:'0px',
                
            },
        },
    },
    readtext:{
        fontSize:'14px',
        color:'rgb(108 115 127 / 77%)'
    },
    stackitems:{
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',
        gap:'10px',
        marginTop: '32px',
        marginBottom: '64px'
    },
    newoldpostbtn:{
        textTransform:'capitalize',
        color:'#000',
        gap:'6px',
        fontSize:'12px',
        fontWeight:'600',
        '& .css-i4bv87-MuiSvgIcon-root':{
            fontSize:'20px'
        }
    },
    olderbtn:{
        color:'rgb(99, 102, 241)',
    },
    paperemail:{
        boxShadow: 'rgba(0, 0, 0, 0.08) 0px 5px 22px, rgba(0, 0, 0, 0.03) 0px 0px 0px 0.5px',
        padding:'42px 50px',
        '& .css-mhc70k-MuiGrid-root':{
            alignItems:'center'
        }
    },
    subscribesec:{
        '& .css-e784if-MuiTypography-root':{
            margin: '10px 0px 22px',
            fontSize:'14px',
            color:'rgb(108,115,127)',
        },
        '& .css-5lbw0b-MuiTypography-root':{
            fontWeight:'600',
            fontSize:'30px'
        },
        '& .css-e4w4as-MuiFormLabel-root-MuiInputLabel-root':{
            fontSize:'14px'
        }
    },
    txtfield:{
        borderRadius:'4px',
        border:'1px solid #ccc',
        '& .css-1ff8729-MuiInputBase-root-MuiFilledInput-root':{
            background:'none',
            '&:before':{
                borderBottom:'none'
            },
            '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.09)',
                '&:not(.Mui-disabled):not(.Mui-error)': {
                    '&:before': {
                        borderBottom: 'none',
                    },
                },
            },
            '&:after':{
                borderBottom:'none'
            },
            '& .css-10botns-MuiInputBase-input-MuiFilledInput-input':{
                minWidth: '485px'
            }
        }
    },
    subsbtn:{
        textAlign:'center',
        width:'100%',
        color:'#fff',
        textTransform:'capitalize',
        margin: '16px 0px 0px',
        backgroundColor: 'rgb(99, 102, 241)',
        '&:hover':{
            backgroundColor: 'rgb(67, 56, 202)'
        }
    },
    subcribesecimg:{
        margin:'auto',
        width:'50%',
        '& img':{
            width:'100%'
        }
    },






    postpage:{
        position: 'absolute',
        left: '245px',
        width: 'calc(100% - 245px)',
        top: '64px',
        background: 'rgba(255,255,255)',
        right: 0,
        padding: '20px',
        boxSizing: 'border-box', 
        '& .css-1oqqzyl-MuiContainer-root':{
            width:'90%',
            padding:'24px 16px'
        }
    },
    postcardlist:{
        display:'flex',
        gap:'5px',
        padding:'0px',
        margin:'0px',
        alignItems: 'center',
        '& li':{
            listStyle:'none',
            '& .css-ahj2mt-MuiTypography-root':{
                fontSize:'13px'
            }
        }
        
    },
    postdetails:{
        '& .css-5lbw0b-MuiTypography-root':{
            fontWeight:'600',
            marginBottom:'16px'
        },
        '& .css-e784if-MuiTypography-root':{
            marginBottom:'16px',
            color:'rgb(108,115,127)'
        },
        '& .css-1t6e9jv-MuiCardActions-root':{
            padding: '8px 0px'
        }
    },
    post1img:{
        height:'380px',
        marginTop:'24px',
        borderRadius:'8px',
        backgroundImage:`url(${post1})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        borderTopLeftRadius:'10px',
        borderTopRightRadius:'10px'
    },
    postcontent:{
        '& h2':{
            marginBottom:'24px',
            fontWeight:'600',
            fontSize:'20px'
        },
        '& p':{
            marginBottom: '16px',
            fontSize:'15px',
            color:'rgb(108,115,127)'
        }
    },
    firststack:{
        display: 'flex',
        flexDirection: 'column',
        '& >:not(style) ~:not(style)': {
            margin: '16px 0px 0px 0px ',
          },
    },
    secondstack:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap:'15px'
    },
    postusername:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        '& .css-2ulfj5-MuiTypography-root':{
            fontSize:'15px'
        },
        '& .css-ahj2mt-MuiTypography-root':{
            fontSize:'11px'
        }
    },
    poststackitems:{
        backgroundColor: 'rgb(243, 244, 246)',
        borderRadius: '8px',
        padding:' 16px',
        flexGrow: '1',
        '& .css-e784if-MuiTypography-root':{
            color:'rgb(108,115,127)',
            fontSize:'12px'
        }
    },
    commentfield:{
        flexGrow: 1,
        borderRadius: '8px',
    },
    txtcommentfield:{
        borderRadius:'4px',
        border:'1px solid #ccc',
        '& .css-1ff8729-MuiInputBase-root-MuiFilledInput-root':{
            background:'none',
            padding: '30px 15px',
            '&:before':{
                borderBottom:'none'
            },
            '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.09)',
                '&:not(.Mui-disabled):not(.Mui-error)': {
                    '&:before': {
                        borderBottom: 'none',
                    },
                },
            },
            '&:after':{
                borderBottom:'none'
            },
            '& .css-10botns-MuiInputBase-input-MuiFilledInput-input':{
                padding:'0px'
            }
        }
    },
    posticonbtn:{
        flexDirection: 'row',
        margin:'24px 0px 0px 55px',
        justifyContent:'space-between'
    },
    stackiconbtn:{
        flexDirection: 'row',
        '& .css-1e6y48t-MuiButtonBase-root-MuiButton-root':{
            minWidth: '35px',
            borderRadius: '100%',
            '& .css-i4bv87-MuiSvgIcon-root':{
                color:'rgb(108,115,127)'
            }
        }
    },
    postdetailsbottom:{
        marginTop:'64px'
    },





    createpostpage:{
        position: 'absolute',
        left: '245px',
        width: 'calc(100% - 245px)',
        top: '64px',
        background: 'rgba(255,255,255)',
        right: 0,
        padding: '20px',
        boxSizing: 'border-box',
    },
    cancelpostbtn:{
        display:'flex',
        alignItems:'center',
        gap:'10px'
    },
    cancelbtn:{
        '& .css-ahj2mt-MuiTypography-root':{
            fontSize:'13px',
            fontWeight:'600',
            color:'#000',
            textTransform:'capitalize'
        },
    },
    dotsbtn:{
        borderRadius: '100%',
        minWidth: '40px',
    },
    stackfield:{
        '& >:not(style) ~:not(style)': {
            margin: '24px 0px 0px 0px ',
          },
          '& .css-1e6y48t-MuiButtonBase-root-MuiButton-root':{
            borderRadius:'10px'
          }
    },
    paperelevation:{
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 5px 22px, rgba(0, 0, 0, 0.1) 0px 0px',
        '& .css-e4w4as-MuiFormLabel-root-MuiInputLabel-root':{
            fontSize:'14px'
        }
    },
    createposttitle:{
        '& .css-2ulfj5-MuiTypography-root':{
            fontSize:'20px',
            fontWeight:'600'
        }
    },
    createpostimg:{
        backgroundImage:`url(${post5})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        borderRadius: '8px',
        height: '230px',
        marginTop: '24px',
    },
    photobtn:{
        textTransform:'capitalize',
        color:'#0009',
        fontSize:'14px',
        fontWeight:'600'
    },
    drganddropbtn:{
        border:'1px solid rgb(108 115 127 / 24%)',
        padding:'48px',
        borderRadius:'10px',
        '& .css-1t6e9jv-MuiCardActions-root':{
            justifyContent:'center',
            gap:'10px',
            '& .css-2s90m6-MuiAvatar-root':{
                width:'55px',
                height:'55px',
                '& .css-i4bv87-MuiSvgIcon-root':{
                    color:'#000',
                    fontSize:'30px'
                }
            },
            '& .css-2ulfj5-MuiTypography-root':{
                fontWeight:'600',
                fontSize:'15px',
                '& a':{
                    color:'#000'
                }
            },
            '& .css-e784if-MuiTypography-root':{
                color:'rgb(108,115,127)',
                fontWeight: '600',
                fontSize: '12px'
            }
        }
    },
    contentbox:{
        border:'1px solid rgb(108 115 127 / 24%)',
        borderRadius:'10px',
        '& .css-1t6e9jv-MuiCardActions-root':{
            padding: '0px 8px',
            '& .css-1nrlq1o-MuiFormControl-root':{
               '& .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root':{
                display:'none'
               } 
            }
        },
        '& select':{
            border:'none',
            marginRight: '15px'
        },
        '& .css-1d3z3hw-MuiOutlinedInput-notchedOutline':{
            border: 'none'
        }
    },
    contentbtn:{
        display:'inline-block',
        '& .css-1e6y48t-MuiButtonBase-root-MuiButton-root':{
            minWidth: '25px',
            color:'#000',
            fontWeight:'600'
        }
    },
}))
export default blogStyle;