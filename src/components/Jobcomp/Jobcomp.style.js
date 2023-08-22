import post2 from '../../Assets/post2.png';
import jobimage from '../../Assets/createjobimg.png';

const Jobstyles =((theme) =>({
    joblistingpage:{
        position: 'absolute',
        left: '245px',
        width: 'calc(100% - 245px)',
        top: '64px',
        background: 'rgba(255,255,255)',
        right: 0,
        padding: '20px',
        boxSizing: 'border-box',
        '& .css-1oqqzyl-MuiContainer-root':{
            width:'95%',
            // padding:'10px 0px 10px 16px'
        }
    },
    joblistingheader:{
        backgroundColor: 'rgb(17, 25, 39)',
        borderRadius: '15px',
        padding: '64px 32px',
        alignItems:'center',
        margin: '0px',
        width: '100%'
    },
    leftgrid:{
        '& .css-gepadz-MuiTypography-root':{
            color:'#fff',
            fontSize:'35px',
            fontWeight:'600'
        },
        '& .css-e784if-MuiTypography-root':{
            color: 'rgb(108, 115, 127)',
            fontSize:'15px',
            margin: '16px 0px 0px'
        },
    },
    postjobbtn:{
        textTransform:'capitalize',
        borderRadius:'10px',
        margin: '24px 0px 0px',
        backgroundColor: 'rgb(99, 102, 241)',
        '&:hover':{
            backgroundColor: 'rgb(67, 56, 202)',
        }
    },
    rightgrid:{
        '& .css-1wlk0hk-MuiAvatar-root':{
            margin:'auto',
            width:'100px',
            height:'100px'
        }
    },
    seachfeild:{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        padding:'5px 0px'
    },
    searchicon:{
        margin: '-5px 0px',
        // color:'rgb(108, 115, 127)'
    },
    inputfeild:{
        fontSize: '12px',
        marginLeft: '10px',
        width: '100%'
    },
    joblistingdetails:{
        marginTop:'32px',
        '& >:not(style) ~:not(style)': {
            margin: '32px 0px 0px',
        },
    },
    joblistpaper:{
        borderRadius:'15px',
        boxShadow: 'rgba(0, 0, 0, 0.08) 0px 5px 22px, rgba(0, 0, 0, 0.03) 0px 0px 0px 0.5px',
        '& .css-9mgopn-MuiDivider-root':{
            borderColor:'#cccccc4d'
        }
    },
    stackbtns:{
        flexDirection:'row',
        gap: '8px',
        padding: '16px',
        '& .css-f6whh1-MuiButtonBase-root-MuiChip-root':{
            border:'1px solid #cccccc4d'
        },
        '& .css-6od3lo-MuiChip-label':{
            fontSize:'12px'
        }
    },   
    chipbtn:{
        display:'inline-flex'
    },
    stackselectedbtns:{
        flexDirection:'row',
        gap: '8px',
        padding: '5px 16px',
        '& .css-1e6y48t-MuiButtonBase-root-MuiButton-root':{
            color:'#000',
            gap:'8px',
            '& .css-ahj2mt-MuiTypography-root':{
                textTransform:'capitalize',
                fontSize:'12px',
                color:'#000'
            },
            '& .css-i4bv87-MuiSvgIcon-root':{
                fontSize:'20px'
            }
        },
        '& >:not(style) ~:not(style)': {
            margin: '0px 0px 0px 16px ',
        },
        '& .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.Mui-checked':{
            color:'rgb(99, 102, 241)'
        }
    },
    spacebox:{
        flexGrow: 1,
    },
    jobdescription:{
        flexDirection:'row',
        gap:'20px'
    },
    jobpagedescription:{
        flexDirection:'row',
        gap:'20px',
        padding:'15px'
    },
    descdetails:{
        '& .css-e784if-MuiTypography-root':{
            fontSize:'12px',
            color:'rgb(108,115,127)'
        },
        '& .css-ahj2mt-MuiTypography-root':{
            '& a':{
                textDecoration:'none',
                color:'#000',
                fontSize:'14px',
                fontWeight:'600',
                '&:hover':{
                    borderBottom:'1px solid #ccc'
                }
            }
        }
    },
    descfeedback:{
        flexDirection:'row',
        gap:'50px',
        marginTop: '12px',
        alignItems: 'center',
        '& .css-nen11g-MuiStack-root':{
            flexDirection:'row',
            gap:'8px',
            alignItems: 'center',
        },
        '& .css-i4bv87-MuiSvgIcon-root':{
            color:'rgb(108,115,127)'
        },
        '& .css-e784if-MuiTypography-root':{
            fontSize:'12px',
            color:'rgb(108,115,127)',
            '& span':{
                fontWeight:'600'
            }
        },
    },
    jobdetailspaper:{
        borderRadius:'16px'
    },
    jobdetails:{
        marginTop:'16px',
        '& .css-172kgz0-MuiPaper-root':{
            border:'1px solid #cccccc4d',
        }
    },
    jobdetailsstack:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding: '0px 16px 10px',
        alignItems: 'center',
        '& .css-2ulfj5-MuiTypography-root':{
            fontSize: '15px',
            color: 'rgb(0 0 0)',
            lineHeight: '2.57'
        },
        '& .css-e784if-MuiTypography-root':{
            fontSize:'12px',
            color:'rgb(108,115,127)',
            lineHeight: '1.66'
        },
        '& .css-1t6e9jv-MuiCardActions-root':{
            gap:'8px',
            '& .css-ahj2mt-MuiTypography-root':{
                fontSize:'10px',
                color:'rgb(108,115,127)',
            },
            '& .css-1e6y48t-MuiButtonBase-root-MuiButton-root':{
                borderRadius:'15px',
                '& .css-ahj2mt-MuiTypography-root':{
                    textTransform:'capitalize',
                    color:'rgb(99, 102, 241)'
                }
            }
        }
    },



    jobspage:{
        position: 'absolute',
        left: '245px',
        width: 'calc(100% - 245px)',
        top: '64px',
        background: 'rgba(255,255,255)',
        right: 0,
        padding: '20px',
        boxSizing: 'border-box',
        '& .css-1oqqzyl-MuiContainer-root':{
            width:'95%',
        }                     
    },
    innerheader:{
        cursor:'pointer',
        display:'flex',
        gap:'8px',
        alignItems:'center',
        marginBottom: '35px',
        '& h4':{
            fontSize:'15px',
            transition: '0.4s all ease-in-out',
        },
        '&:hover':{
            '& h4':{
                borderBottom:'1px solid #000'
            },
            '& svg':{
                backgroundColor: 'rgba(25, 118, 210, 0.04)'
            }
        },
    },
    arrowicon:{
        width: '30px',
        height: '22px',
        borderRadius: '5px',
    },
    jobdescpage:{
        borderRadius:'15px',
        boxShadow: 'rgba(0, 0, 0, 0.08) 0px 5px 22px, rgba(0, 0, 0, 0.03) 0px 0px 0px 0.5px',
        '& .css-h4y409-MuiList-root':{
            paddingBottom:'0px',
            '& .css-1p823my-MuiListItem-root':{
                paddingLeft:'0px',
                paddingRight:'0px',
            }
        }
    },
    jobdetailspage:{
        flexDirection:'row',
        gap:'20px',
        padding:'32px 24px 16px'
    },
    tabsheader:{
        '& .css-1h9z7r5-MuiButtonBase-root-MuiTab-root':{
            fontSize:'12px',
            textTransform:'capitalize',
            color: 'rgb(108,115,127)',
            fontWeight: '600'
        },
        '& .css-1h9z7r5-MuiButtonBase-root-MuiTab-root.Mui-selected':{
            color: 'rgb(99, 102, 241)',
        },
        '& .css-1aquho2-MuiTabs-indicator':{
            backgroundColor:'rgb(99, 102, 241)',
        }
    },
    jobpagecontent:{
        padding:'0px',
        '& .css-ag7rrr-MuiTypography-root':{
            fontWeight:'600',
            fontSize: '24px'
        },
        '& .css-1t6e9jv-MuiCardActions-root':{
            justifyContent:'center',
        }
    },
    jobpagetext:{
        marginTop:'24px',
        '& .css-e784if-MuiTypography-root':{
            marginBottom: '16px',
            lineHeight: 1.65,
            color: 'rgb(108,115,127)'
        }
    },
    jobpageimg:{
        columnCount: 3,
        columnGap: 24,
        '& .css-1p823my-MuiListItem-root':{
            padding:'0px',
            '& img':{
                width:'100%',
                height:'100%',
                objectFit: 'cover',
                display: 'block'
            }
        }
    },
    jobs:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:'15px',
        '& .css-2ulfj5-MuiTypography-root':{
            fontSize:'15px',
            fontWeight:'600'
        }
    },
    jobsbtn:{
        cursor:'pointer',
        display:'flex',
        gap:'8px',
        alignItems:'center',
        '& h4':{
            fontSize:'15px',
            transition: '0.4s all ease-in-out',
        },
        '&:hover':{
            '& h4':{
                borderBottom:'1px solid #000'
            },
            '& svg':{
                backgroundColor: 'rgba(25, 118, 210, 0.04)'
            }
        },
    },
    jobmemberdivider:{
        margin:'24px 0px',
        borderWidth: '0px 0px thin',
        borderStyle: 'solid',
        borderColor: 'rgb(242, 244, 247)'
    },
    membersbox:{
        margin: '12px -12px -12px'
    },
    members:{
        borderColor: 'rgb(242, 244, 247)',
        borderRadius: '8px',
        borderStyle: 'solid',
        borderWidth: '1px',
        padding: '24px 24px'
    },
    memberdetails:{
        flexDirection:'row',
        gap:'10px',
        '& .css-2ulfj5-MuiTypography-root':{
            fontSize:'15px',
        },
        '& .css-e784if-MuiTypography-root':{
            fontSize:'11px',
            color:'rgb(108,115,127)'
        }
    },
    memberjobdetails:{
        flexDirection:'row',
        gap:'10px',
        marginTop:'16px'
    },
    reviewtitle:{
        '& .css-2ulfj5-MuiTypography-root':{
            fontSize:'16px',
            fontWeight:'600'
        }
    },
    reviewssec:{
        '& .css-172kgz0-MuiPaper-root':{
            border: '1px solid #cccccc4d',
            borderRadius:'10px',
            marginTop:'24px',
        }
        
    },
    paperstack1:{
        flexDirection:'row',
        alignItems:'center',
        gap: '20px',
        '& .css-2ulfj5-MuiTypography-root':{
            fontSize:'13px',
            color:'rgb(108,115,127)',
            marginTop:'3px'
        }
    },
    paperstack2:{
        flexDirection:'row',
        alignItems:'center',
        gap: '20px',
        '& span':{
            width: '4px',
            height: '4px',
            backgroundColor: '#000',
            borderRadius: '2px'
        },
        '& .css-10wpov9-MuiTypography-root':{
            fontSize:'12px',
            color:'rgb(108,115,127)'
        }
    },
    paperstack3:{
        flexDirection:'row',
        alignItems:'center',
        gap: '10px',
        '& .css-i4bv87-MuiSvgIcon-root':{
            fontSize:'20px',
            color:'rgb(250, 175, 0)'
        }
    },
    reviewtext:{
        fontSize:'14px',
        color:'rgb(108,115,127)',
        marginTop:'16px'
    },
    vpavatar:{
        color: '#000000a3',
        fontSize: '12px',
        fontWeight: 600,
    },
    loadmorebtn:{
        marginTop: '24px',
        display: 'flex',
        justifyContent: 'center'
    },
    loadbtn:{
        '& .css-ahj2mt-MuiTypography-root':{
            textTransform:'capitalize',
            fontSize:'12px',
            color:'#000',
            fontWeight:'600'
        }
    },
    createcomment:{
        flexDirection:'row',
        gap:'15px',
        marginTop: '24px'
    },
    stackfield:{
        '& .css-1sqnrkk-MuiInputBase-input-MuiOutlinedInput-input':{
            minWidth:'556px'
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
    aboutdivider:{
        margin:'15px 0px',
        borderWidth: '0px 0px thin',
        borderStyle: 'solid',
        borderColor: 'rgb(242, 244, 247)'
    },
    aboutsec:{
        fontSize:'14px',
        color: 'rgb(108,115,127)'
    },
    listitems:{
        '& .css-2ulfj5-MuiTypography-root':{
            fontSize:'12px',
            fontWeight:'600'
        },
        '& .css-e784if-MuiTypography-root':{
            fontSize:'12px',
            color:'rgb(108,115,127)',
            marginTop: '4px'
        }
    },
    founders:{
        marginTop: '16px',
        '& > :not(style) ~ :not(style)': {
            margin: '16px 0px 0px',
        },
    },
    foundersec:{
        flexDirection: 'row',
        gap:'10px',
        alignItems: 'center',
        '& .css-2ulfj5-MuiTypography-root':{
            fontSize:'12px',
            fontWeight:'600'
        },
        '& .css-e784if-MuiTypography-root':{
            fontSize:'11px',
            color:'rgb(108,115,127)'
        }
    },
    activity:{
        '& p':{
            fontSize:'12px',
            color:'rgb(108,115,127)'
        }
    },
    activitytxt:{
        display:'flex',
        gap:'5px',
        alignItems: 'center',
        '& .css-2ulfj5-MuiTypography-root':{
            fontSize:'14px'
        },
        '& .css-e784if-MuiTypography-root':{
            '& a':{
                fontSize:'14px',
                cursor:'pointer',
                color:'rgb(99, 102, 241)',
                '&:hover':{
                    borderBottom:'1px solid rgb(99, 102, 241)'
                }
            }
        }
    },
    timelinesec:{
        display: 'flex',
        flexDirection: 'column',
        padding: '0px',
        margin: '0px',
        paddingTop:'10px',
        gap:'6px',
        '& .css-ha3bif-MuiTimelineItem-root':{
            '& .css-1fe7e6p-MuiTimelineSeparator-root':{
                gap:'6px',
            },
            '&:before':{
                flex:'none',
                padding:'0px'
            }
        }
    },
    assetsbox:{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, minmax(0px, 180px))',
        gap: '24px',
    },
    assetsboxpaper:{
        borderRadius:'10px',
        '& .css-1t6e9jv-MuiCardActions-root':{
            justifyContent:'center'
        }
    },
    assetsimgbox:{
        height:'100px',
        backgroundImage:`url(${post2})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px'
    },
    assetsimgtxt:{
        padding:'15px',
        '& .css-2ulfj5-MuiTypography-root':{
            fontSize:'14px',
        },
        '& .css-37jdci-MuiTypography-root':{
            fontSize:'14px',
            color:'rgb(108,115,127)',
        }
    },
    assetsbtn:{
        '& .css-1e6y48t-MuiButtonBase-root-MuiButton-root':{
            '& .css-ahj2mt-MuiTypography-root':{
                textTransform:'capitalize',
                color:'#000',
                fontSize:'12px',
                fontWeight:'600'
            }
        }
    },
    assetsbadgebox:{
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '24px',
        paddingBottom: '24px',
        backgroundColor: '#cccccc38',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px'
    },
    assetsbadge:{
        '& .css-i4bv87-MuiSvgIcon-root':{
            fontSize: '52px'
        },
        '& .css-1c32n2y-MuiBadge-root':{
            top: '40px',
            color: 'rgb(255, 255, 255)',
            justifyContent: 'center',
            right: '5px',
            bottom: '0px',
            padding: '0px 0px',
            minWidth: '40px',
            alignItems: 'flex-end',
            borderRadius: '14px',
            backgroundColor: 'rgb(99, 102, 241)',
            height: '21px',
        }
    },





    createjob:{
        position: 'absolute',
        left: '245px',
        width: 'calc(100% - 245px)',
        top: '64px',
        background: 'rgba(255,255,255)',
        right: 0,
        boxSizing: 'border-box',
    },
    maingrid:{
        margin:'0px',
        width:'100%',
        '&> .MuiGrid-item':{
            padding:'64px'
        }
    },
    creatingjobimg:{
        backgroundImage:`url(${jobimage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width:'100%',
        padding:'0px'
    },
    create_job_right_grid:{
        padding:'64px'
    },
    stepper_stack:{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '600px',
        '& >:not(style) ~ :not(style)': {
            margin: '24px 0px 0px'
        },
        // '& .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root':{
        //     width:'20px',
        //     height:'20px'
        // }
    },
    stack_step:{
        '& .css-1hv8oq8-MuiStepLabel-label':{
            fontSize:'11px',
            color:'rgb(108,115,127)'
        },
        '& .css-1hv8oq8-MuiStepLabel-label.Mui-active':{
            color: 'rgba(0, 0, 0, 0.87)',
            fontWeight: 600,
        },
        '& .css-14yr603-MuiStepContent-root':{
            padding: '32px 8px 32px 20px',
        }
    },
    stack_stepcont:{
        '& .css-2ulfj5-MuiTypography-root':{
            fontSize:'14px',
            fontWeight:'600'
        }
    },
    stack_inner_stepcont:{
        '& >:not(style) ~ :not(style)': {
            margin: '24px 0px 0px'
        },
        '& .css-sghohy-MuiButtonBase-root-MuiButton-root':{
            textTransform: 'capitalize',
            borderRadius: '15px',
        },
        '& .css-1e6y48t-MuiButtonBase-root-MuiButton-root':{
            textTransform: 'capitalize',
            borderRadius: '15px',
            color:'#000'
        }
    },
    stack_selected_job:{
        '& >:not(style) ~ :not(style)': {
            margin: '16px 0px 0px'
        },
        '& .css-172kgz0-MuiPaper-root':{
            padding:'16px',
            borderRadius:'15px',
        },
        
    },
    selectedjob:{
        flexDirection:'row',
        gap:'10px',
        '& .css-2ulfj5-MuiTypography-root':{
            color:'rgb(108,115,127)',
            fontWeight:'600'
        },
        '& .css-e784if-MuiTypography-root':{
            color:'rgb(108,115,127)',
            fontSize:'12px'
        }
    },
    txtfield:{
        borderRadius:'4px',
        border:'1px solid #ccc',
        '& .css-e4w4as-MuiFormLabel-root-MuiInputLabel-root':{
            fontSize:'12px',
            color:'rgb(108,115,127)'
        },
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
            },
            // '&:hover:not(.Mui-disabled, .Mui-error):before': {
            //     border: '1px solid #1976d2', 
            // },
        },
        '& .css-zs07ro-MuiInputBase-root-MuiFilledInput-root':{
            background:'none',
            '&:before':{
                borderBottom:'none',
            },
            '& .css-1e6y48t-MuiButtonBase-root-MuiButton-root':{
                fontSize:'12px',
                textTransform:'capitalize',
                color:'#000'
            },
            '&:after':{
                borderBottom:'none',
            },
            '&:hover:not(.Mui-disabled, .Mui-error):before': {
                borderBottom: 'none', 
            },
            '&:hover':{
                background:'rgba(0, 0, 0, 0.09)'
            }
        },
    },
    stack_selected_date:{
        flexDirection:'row',
        alignItems: 'baseline',
        justifyContent: 'space-between',
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
export default Jobstyles;