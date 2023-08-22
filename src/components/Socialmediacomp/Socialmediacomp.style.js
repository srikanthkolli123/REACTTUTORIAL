import profilecoverimg from '../../Assets/profilecoverimg.png';
import post4 from '../../Assets/post4.png';

const socialmediastyles =((theme) =>({
    clear:{
        clear:'both'
    },
    socialmediapage:{
        position: 'absolute',
        left: '245px',
        width: 'calc(100% - 245px)',
        top: '64px',
        background: 'rgba(255,255,255)',
        right: 0,
        padding: '20px',
        boxSizing: 'border-box',
        '& .css-1oqqzyl-MuiContainer-root':{
            width:'100%',
            padding:'24px 16px'
        }
    },
    profileimg:{
        height:'348px',
        backgroundImage:`url(${profilecoverimg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        borderRadius:'10px',
        position:'relative',
        '&:hover $profilebtn': {
            visibility: 'visible',
          },
    },
    profilebtn:{
        position:'absolute',
        right:'24px',
        bottom: '24px',
        color:'#fff',
        backgroundColor:'#1c2536',
        visibility: 'hidden',
        display:'flex',
        gap:'6px',
        borderRadius:'10px',
        minWidth: '150px',
        '&:hover':{
            backgroundColor:'#1c2536',
        }
    },
    btntext:{
        textTransform:'capitalize',
        fontSize:'13px'
    },
    stackcontainer:{
        flexDirection: 'row',
        marginTop:'40px',
        alignItems:'center',
        '& >:not(style) ~:not(style)': {
            margin: '0px 0px 0px 16px ',
          },
    },
    leftstack:{
        flexDirection: 'row',
        gap:'10px',
        alignItems:'center',
        '& .css-1wlk0hk-MuiAvatar-root':{
            width:'60px',
            height:'60px'
        },
        '& .css-ahj2mt-MuiTypography-root':{
            fontSize:'14px',
            color:'rgb(108,115,127)'
        },
        '& .css-2ulfj5-MuiTypography-root':{
            fontSize:'16px',
            fontWeight:'600',
            color:'#000000ab'
        }
    },
    middlestack:{
        flexGrow: '1'
    },
    rightstack:{
        flexDirection: 'row',
        gap:'15px',
        '& .css-1rwt2y5-MuiButtonBase-root-MuiButton-root':{
            border:'1px solid rgb(99, 102, 241)',
            color:'rgb(99, 102, 241)',
            textTransform:'capitalize',
            borderRadius:'10px',
            '&:hover':{
                color:'rgb(67, 56, 202)',
                border:'1px solid rgb(67, 56, 202)',
            }
        },
        '& .css-sghohy-MuiButtonBase-root-MuiButton-root':{
            backgroundColor:'rgb(99, 102, 241)',
            borderRadius:'10px',
            textTransform:'capitalize',
            '&:hover':{
                backgroundColor:'rgb(67, 56, 202)'
            }
        },
        '& .css-i4bv87-MuiSvgIcon-root':{
            marginRight:'5px',
            fontSize:'18px'
        },
        '& .css-ahj2mt-MuiTypography-root':{
            fontSize:'13px'
        }
    },
    dotsbtn:{
        minWidth:'40px',
        borderRadius:'25px'
    },
    mediatabs:{
        marginTop:'40px',
        '& .css-13xfq8m-MuiTabPanel-root':{
            padding:'24px 0px'
        }
    },
    clickingtabs:{
        borderBottom: '1px solid #eee', 
    },
    tabsheader:{
        '& .css-1h9z7r5-MuiButtonBase-root-MuiTab-root':{
            fontSize:'14px',
            textTransform:'capitalize'
        },
        '& .css-1h9z7r5-MuiButtonBase-root-MuiTab-root.Mui-selected':{
            color: 'rgb(99, 102, 241)',
        },
        '& .css-1aquho2-MuiTabs-indicator':{
            backgroundColor:'rgb(99, 102, 241)',
        }
    },
    headercard:{
        padding:'25px 16px 16px',
        fontSize:'16px',
        fontWeight:'600',
        color:'#000'
    },
    bottombar:{
        position: 'relative',
        display: 'block',
        height: '4px',
        zIndex: 0,
        backgroundColor: 'rgb(195, 196, 249)',
        borderRadius: '3px',
        overflow: 'hidden'
    },
    topbar:{
        width: '100%',
        position: 'absolute',
        left: '0px',
        bottom: '0px',
        top: '0px',
        transition: 'transform 0.4s linear 0s',
        transformOrigin: 'left center',
        backgroundColor: 'rgb(99, 102, 241)',
        transform:' translateX(-50%)',
    },
    progressbars:{
        '& >:not(style) ~:not(style)': {
            margin: '16px 0px 0px',
        },
        '& .css-2ulfj5-MuiTypography-root':{
            fontSize:'14px',
            color:'rgb(108,115,127)'
        }
    },
    timelinetab:{
        '& >:not(style) ~:not(style)': {
            margin: '24px 0px 0px',
        },
        '& .css-1ps6pg7-MuiPaper-root':{
            borderRadius:'15px'
        },
        '& .css-3su884-MuiPaper-root':{
            borderRadius:'15px'
        }
    },
    abouttext:{
        '& h6':{
            fontSize:'13px',
            color:'rgb(108,115,127)'
        }
    },
    aboutlist:{
        '& .css-2s90m6-MuiAvatar-root':{
            background:'none',
            '& .css-i4bv87-MuiSvgIcon-root':{
                color:'rgb(108,115,127)'
            }
        },
        '& .css-1p823my-MuiListItem-root':{
            padding:'8px 0px',
            gap: '15px',
            borderBottom:'1px solid #cccccc59',
            '&:last-child': {
                borderBottom: 'none', 
              },
        },
        '& h5':{
            fontSize:'13px',
            color:'#000000ab',
            fontWeight:'600',
            lineHeight: '25px',
        },
        '& p':{
            fontSize:'13px',
            color:'#000000ab',
            '& a':{
                textDecoration:'none',
                color:'#000000ab',
                '&:hover':{
                    borderBottom:'1px solid #ccc'
                }
            }
        }
    },
    createcomment:{
        flexDirection:'row',
        gap:'15px'
    },
    stackfield:{
        '& .css-1sqnrkk-MuiInputBase-input-MuiOutlinedInput-input':{
            minWidth:'618px'
        },
        '& .css-1d3z3hw-MuiOutlinedInput-notchedOutline':{
            borderRadius:'10px',
            borderColor:' rgb(0 0 0 / 6%)',
        },
        '& >:not(style) ~:not(style)': {
            margin: '16px 0px 0px',
        },
    },
    cardicons:{
        justifyContent:'space-between',
        padding:'0px',
        '& .css-sghohy-MuiButtonBase-root-MuiButton-root': {
            borderRadius: '10px',
            textTransform: 'capitalize',
            backgroundColor: 'rgb(99, 102, 241)'
        }
    },
    stackicons:{
        flexDirection:'row',
        '& .css-2s90m6-MuiAvatar-root':{
            background:'none',
            color:'rgb(108,115,127)'
        }
    },
    designerpost:{
        padding:'16px',
        gap:'10px',
        '& .css-ahj2mt-MuiTypography-root':{
            fontSize:'14px',
            color:'rgb(108,115,127)',
            marginBottom: '5px',
            '& a':{
                textDecoration:'none',
                color:'rgb(108,115,127)',
                '&:hover':{
                    borderBottom: '1px solid #ccc'
                }
            }
        },
        '& .css-e784if-MuiTypography-root':{
            fontSize:'12px',
            color:'rgb(108,115,127)',
        }
    },
    timestack:{
        flexDirection:'row',
        alignItems: 'center',
        gap:'5px',
        '& .css-i4bv87-MuiSvgIcon-root':{
            fontSize:'20px'
        }
    },
    postdetails:{
        padding:'16px',
        '& .css-ahj2mt-MuiTypography-root':{
            fontSize:'14px'
        }
    },
    postimage:{
        marginTop:'24px',
        height:'500px',
        backgroundImage:`url(${post4})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    postlike:{
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center',
        '& .css-1e6y48t-MuiButtonBase-root-MuiButton-root':{
            '& .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.Mui-checked':{
                color:'rgb(240, 68, 56)'
            }
        }
    },
    likestack:{
        flexDirection:'row',
        alignItems: 'center',
    },
    sharebtn:{
        '& .css-i4bv87-MuiSvgIcon-root':{
            color:'#000'
        }
    },
    firststack:{
        display: 'flex',
        flexDirection: 'column',
        padding:'16px',
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
    poststackitems:{
        backgroundColor: 'rgb(243 244 246 / 59%)',
        borderRadius: '8px',
        padding:' 16px',
        flexGrow: '1',
        '& .css-e784if-MuiTypography-root':{
            color:'rgb(108,115,127)',
            fontSize:'12px',
            marginTop: '8px'
        }
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
        },
        '& a':{
            textDecoration:'none',
            color:'rgb(108,115,127)',
            fontSize:'12px',
            '&:hover':{
                borderBottom:'1px solid #ccc'
            }
        }
    },
    seachfeild:{
        width: '100%',
        display: 'flex',
        alignItems: 'center'
    },
    searchicon:{
        margin: '-5px 0px',
        color:'rgb(108, 115, 127)'
    },
    inputfeild:{
        fontSize: '12px',
        marginLeft: '10px',
        width: '100%'
    },
    gridsec:{
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        '& .css-1e6y48t-MuiButtonBase-root-MuiButton-root':{
            margin:'5px'
        }
    },
    gridcontainer:{
        padding:'16px'
    },
    griditems:{
       
    },
    gridcontent:{
        height: '100%',
        border: '1px solid rgb(242, 244, 247)',
        borderRadius:'10px',
    },
    penbtn:{
        color:'#000',
        textTransform:'capitalize',
        fontSize:'12px'
    },
    connectbtn:{
        marginTop:'5px',
        border:'1px solid rgb(99, 102, 241)',
        color:'rgb(99, 102, 241)',
        textTransform:'capitalize',
        borderRadius:'10px',
        fontSize:'12px',
        '&:hover':{
            color:'rgb(67, 56, 202)',
            border:'1px solid rgb(67, 56, 202)',
        }
    }
}))
export default socialmediastyles;