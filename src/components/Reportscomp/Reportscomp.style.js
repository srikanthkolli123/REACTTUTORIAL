const reportstyles = ((theme) => ({
    header:{
        display:'flex',
        marginBottom:'50px',
        alignItems:'center',
        '& h4':{
            fontSize: '25px',
            fontWeight: '600'
        }
    },
    reports:{
        position: 'absolute',
        left: '245px',
        width: 'calc(100% - 245px)',
        top: '64px',
        background: 'rgba(255,255,255)',
        right: 0,
        padding: '20px',
        boxSizing: 'border-box',
    },
    maingrid:{
        background:'#fff',
        borderRadius:'10px',
        boxShadow:'rgba(0, 0, 0, 0.08) 0px 5px 22px, rgba(0, 0, 0, 0.03) 0px 0px 0px 0.5px'
    },
    uploadbtn:{
        backgroundColor: ' rgb(99, 102, 241)',
        color: '#fff',
        textTransform: 'capitalize',
        '&:hover':{
            backgroundColor:'rgb(67, 56, 202)'
        },
        
    },
    griditem:{
        alignItems: 'center',
    },
    searchicon:{
        margin: '-5px 0px',
    },
    griditemicon:{
        border: '1px solid #000',
        display: 'flex',
        padding: '7px 0px',
        borderRadius:' 8px',
        justifyContent:' space-around',
        margin:'10px',
    },
    seachfeild:{
        border: '1px solid #000',
        padding: '10px 10px',
        borderRadius: '10px',
        margin:'10px'
    },
    gridicon:{
        width: '40px',
        height: '40px',
        lineHeight: '40px',
        borderRadius: '10px',
        cursor:'pointer',
    },
    listicon:{
        fontSize:'23px'
    },
    griditemtext:{
        border: '1px solid #000',
        display: 'flex',
        padding: '7px 0px',
        borderRadius:' 8px',
        alignItems: 'center',
        justifyContent: 'space-around',
        margin:'10px',
    },
    gridtext:{
        display: 'flex',
        flexDirection: 'column',
        '& .active':{
            fontSize:'18px',
            color: '#000'
        }
    },
    downicon:{
        fontSize: '30px',
        color: 'rgba(0, 0, 0, 0.54)',
        cursor:'pointer',
    },
    griditems:{
        display: 'grid',
        gap: '24px',
        gridTemplateColumns:'repeat(3, 1fr)',
        margin:'30px 0px'
    },
    gridbox:{
        border:'1px solid #ccc3',
        padding:'20px',
        borderRadius: '30px',
        transition: 'all 0.4s ease-in-out',
        minHeight:'225px',
        '&:hover':{
            boxShadow: 'rgba(0, 0, 0, 0.08) 0px 5px 22px, rgba(0, 0, 0, 0.03) 0px 0px 0px 0.5px'
        },
        '& img':{
            margin: '5px 0px',
            cursor:'pointer',
        },
        '& .css-2ulfj5-MuiTypography-root':{
            margin: '5px 0px 10px 0px',
            fontSize: '12px',
            fontWeight: '600',
            cursor:'pointer',
        },
        '& .css-9mgopn-MuiDivider-root':{
            borderColor: '#0000000d',
        }
    },
    boxicons:{
        display: 'flex',
        justifyContent: 'space-between',
        '& .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.Mui-checked':{
            color: 'rgb(247, 144, 9)',
        },
        '& .css-1e6y48t-MuiButtonBase-root-MuiButton-root':{
            color: 'rgb(108, 115, 127)',
            minWidth: '34px',
        }
    },
    boxbottom:{
        display: 'flex',
        alignItems: 'center',
        margin: '12px 0px',
        justifyContent: 'space-between',
        '& .css-ahj2mt-MuiTypography-root':{
            fontSize: '13px',
            color: 'rgb(108, 115, 127)',
        }
    },
    avatars:{
        '& .css-2s90m6-MuiAvatar-root':{
            width: '30px',
            height: '30px'
        }
    },
    bottomtext:{
        color: 'rgb(108, 115, 127)',
    },
    rightgrid:{
        padding: '20px',
        '& .css-2ulfj5-MuiTypography-root':{
            fontSize: '17px',
            fontWeight: '600'
        },
        '& .css-1sn4lm3-MuiTypography-root':{
            fontSize:'15px',
            color:'rgb(108, 115, 127)',
            opacity: '0.9',
        },
        '& .css-ag7rrr-MuiTypography-root':{
            fontSize:' 20px',
            fontWeight: '600',
            textAlign: 'center',
            padding:'10px 0px'
        },
        '& .css-e784if-MuiTypography-root':{
            width:'290px',
            color:'rgb(108, 115, 127)',
            opacity: '0.9',
        },
    },
    chartContainer:{
        height: '100px'
    },
    charttext:{
        position: 'absolute',
        right: '185px',
        top: '250px',
        '& .css-10wpov9-MuiTypography-root':{
            fontWeight: '600',
        }
    },
    rightgridlist:{
        '& .css-1p823my-MuiListItem-root':{
            gap: '20px',
        },
        '& .css-1sn4lm3-MuiTypography-root':{
            fontSize: '12px',
            fontWeight: '600',
            opacity: '1'
        }
    },
    upgradebtn:{
        textAlign: 'right',
        padding: '10px'
    },
    planbtn:{
        backgroundColor: ' rgb(99, 102, 241)',
        color: '#fff',
        textTransform: 'capitalize',
        borderRadius:'10px',
        '&:hover':{
            backgroundColor:'rgb(67, 56, 202)'
        },
    },
    bolticon:{
        margin: '4px',
        fontSize: '20px'
    },
    listgrid:{
        display: 'flex',
        flexDirection: 'column',
        margin: '15px 0px',
        gap:'15px'
    },
    inboxtext:{
        border: '1px solid #eee',
        borderRadius: '15px',
        transition:'0.4s all ease-in-out',
        '&:hover':{
            boxShadow: 'rgba(0, 0, 0, 0.04) 0px 5px 22px, rgba(0, 0, 0, 0.03) 0px 0px 0px 0.5px',
            backgroundColor: '#fff', 
        },
        '& .css-1ex1afd-MuiTableCell-root':{
            borderBottom: 'none'
        },
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    inboxdata:{
        fontSize:'10px',
        '& h6':{
            fontSize: '14px',
            fontWeight: '600',
            opacity: '0.9',
            color: 'rgb(17, 25, 39)',
            cursor: 'pointer'
        },
    },
    logoname:{
        fontSize:'15px',
        fontWeight:'600'
    },
    logodata:{
        color:'rgb(108, 115, 127)',
        fontSize:'15px'
    },
    avatars:{
        
    },
    lanicon:{
        paddingLeft:'50px',
    },
    avatarcontainer:{
        display:'flex',
    },
    firstdata:{
        display:'flex',
        alignItems: 'center'
    },
    tabletext:{
        marginLeft: '16px'
    },
    avatarcontainer:{
        display:'flex'
    },
    avatarsec:{
        display:'flex'
    },
    tabledata:{
        display: 'flex',
        flexDirection: 'column',
        margin: '15px 0px',
        gap: '15px',
    },
    innertabletext:{
        margin: '10px 0px'
    },
}))
export default reportstyles;