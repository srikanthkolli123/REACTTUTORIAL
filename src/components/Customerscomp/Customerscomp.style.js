const customersStyle = ((theme) => ({
    customerspage:{
        position: 'absolute',
        left: '245px',
        width: 'calc(100% - 245px)',
        top: '64px',
        background: 'rgba(255,255,255)',
        right: 0,
        padding: '20px',
        boxSizing: 'border-box',
    },
    header:{
        display:'flex',
        marginBottom:'10px',
        alignItems:'center',
        '& h4':{
          fontSize:'25px',
          fontWeight: '600'
        }
    },
    bottomheader:{
        display:'flex',
        justifyContent: 'space-between',
        marginBottom: '25px',
    },
    BoxIocns:{
        display: 'flex',
        gap: '15px',
    },
    impexpbtn:{
        textTransform: 'capitalize',
        color: '#000',
        fontWeight:'600'
    },
    addbtn:{
        backgroundColor: ' rgb(99, 102, 241)',
        color: '#fff',
        borderRadius:'13px',
        textTransform: 'capitalize',
        '&:hover':{
            backgroundColor:'rgb(67, 56, 202)'
        },
    },
    maingrid:{
        background:'#fff',
        borderRadius:'10px',
        boxShadow:'rgba(0, 0, 0, 0.08) 0px 5px 22px, rgba(0, 0, 0, 0.03) 0px 0px 0px 0.5px',
        '& .css-11lq3yg-MuiGrid-root':{
            padding: '0px 10px',
        }
    },
    boxheader:{
        borderBottom: '1px solid #eee',
        padding: '0px 10px',
    },
    headerlist:{
        gap: '18px',
        padding: '16px 16px',
        '& p':{
            fontSize:'15px',
            color: 'rgb(108, 115, 127)',
            fontWeight:'600'
        }
    },
    seachfeild:{
        border: '1px solid rgb(108 115 127 / 49%)',
        padding: '10px 10px',
        borderRadius: '10px',
        margin:'10px'
    },
    searchicon:{
        margin: '-5px 0px',
        color:'rgb(108, 115, 127)'
    },
    griditemtext:{
    },
    gridtext:{
        display: 'flex',
        flexDirection: 'column',
        '& .active':{
            fontSize:'18px',
            color: '#000'
        },
        '& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input':{
            fontSize:'14px'
        },
        '& .css-1yk1gt9-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root':{
            borderRadius:'10px'
        }
    },
    tablehead:{
        backgroundColor:'#eee'
    },
    actioncard:{
        padding: '8px 0px',
        gap: '25px',
        '& .css-m69qwo-MuiStack-root':{
            alignItems:'center'
        },
    },
    bodyavatar:{
        width:'40px',
        height:'40px'
    },
    innerbodyavatar:{
        width:'70px',
        height:'70px'
    },
    actionicons:{
        justifyContent: 'flex-end',
        '& .css-1e6y48t-MuiButtonBase-root-MuiButton-root':{
            color:'rgb(108,115,127)'
        }
    },
    inboxtext:{
        '& th':{
            padding: '10px 10px'
        },
        '& td':{
            padding: '10px 10px'
        },
    },
    checkbox:{
        borderRadius:''
    },
    tableheadtxt:{
        fontSize: '15px',
        fontWeight: '600',
        color: 'rgb(108, 115, 127)'
    },
    logoname:{
        fontSize:'14px',
        cursor:'pointer'
    },
    logotext:{
        color: 'rgb(108, 115, 127)',
        fontSize:'14px',
    },
    


    customersinnerpage:{
        position: 'absolute',
        left: '245px',
        width: 'calc(100% - 245px)',
        top: '64px',
        background: 'rgba(255,255,255)',
        right: 0,
        padding: '20px',
        boxSizing: 'border-box',
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
    customerdetails:{
        alignItems:'center',
        marginBottom:'50px'
    },
    detailsbtn:{
        justifyContent: 'flex-end',
        gap:'25px'
    },
    editbtn:{
        textTransform:'capitalize',
        color:'rgb(108,115,127)',
        gap:'5px',
        '& .css-i4bv87-MuiSvgIcon-root':{
            fontSize:'medium'
        }
    },
    customermail:{
        fontSize:'32px',
        fontWeight:'600'
    },
    customerid:{
        '& span':{
            backgroundColor:'#eee'
        },
    },
    detailsheader:{
        borderBottom: '1px solid #eee',
    },
    detailslist:{
        gap: '18px',
        paddingLeft: '0px',
        paddingRight: '0px',
        cursor:'pointer',
        '& p':{
            fontSize:'15px',
            color: 'rgb(108, 115, 127)',
        }
    },
    griditem:{
        margin:'15px 0px',
    },
    detailsgrid:{
        boxShadow:'rgba(0, 0, 0, 0.08) 0px 5px 22px, rgba(0, 0, 0, 0.03) 0px 0px 0px 0.5px',
        borderRadius:'15px',
        boxSizing:'border-box',
        marginBottom:'25px'
        },
    customerdetailslist:{
            padding:'10px 24px',
            gap: '110px',
        '& .css-2ulfj5-MuiTypography-root':{
            fontSize:'14px',
            fontWeight:'600',
            color:'rgb(108,115,127)'
        },
        '& .css-e784if-MuiTypography-root':{
            fontSize:'13px',
            color:'rgb(108,115,127)'
        },
        '& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input':{
            fontSize:'14px',
            '&:hover':{
                border: 'none'
            }
        }
    },
    listheader:{
        fontSize:'16px',
        fontWeight:'600',
            '& h4':{
                marginBottom:'20px',
                fontSize:'16px',
                fontWeight:'600',
            },
            '& .css-1t6e9jv-MuiCardActions-root':{
                justifyContent:'space-between',
            },
            '& p':{
                marginTop:'10px',
                fontSize: '15px',
                color: 'rgb(108,115,127)'
            }
    },
    resetbtn:{
        '& p':{
            textTransform:'capitalize',
            fontSize:'12px',
            color:'#000',
            fontWeight:'600'
        },
        '&:hover':{
            borderRadius:'10px',
        }
    },
    invoicebtn:{
        '& p':{
            textTransform:'capitalize',
            fontSize:'small',
            color:'rgb(99, 102, 241)'
        },
        '&.css-1rwt2y5-MuiButtonBase-root-MuiButton-root':{
            border: '1px solid rgba(99, 102, 241, 0.5)',
            borderRadius:'12px'
        },
        '&:hover':{
            '&.css-1rwt2y5-MuiButtonBase-root-MuiButton-root':{
                border: '1px solid rgb(99, 102, 241)'
            },
        }
    },
    maillist:{
        backgroundColor:'#eeeeee54'
    },
    deletebtn:{
        '& p':{
            textTransform:'capitalize',
            fontSize:'small',
            color:'rgb(240, 68, 56)'
        },
        '&.css-1rwt2y5-MuiButtonBase-root-MuiButton-root':{
            border: '1px solid rgba(240, 68, 56, 0.5)',
            borderRadius:'12px',
            padding: '12px 20px',
        },
        '&:hover':{
            '&.css-1rwt2y5-MuiButtonBase-root-MuiButton-root':{
                border: '1px solid rgb(240, 68, 56)',
                backgroundColor: 'rgba(240, 68, 56, 0.04)'
            },
        }
    },







    customerseditpage:{
        position: 'absolute',
        left: '245px',
        width: 'calc(100% - 245px)',
        top: '64px',
        background: 'rgba(255,255,255)',
        right: 0,
        padding: '20px',
        boxSizing: 'border-box',
    },
    editpage:{
        padding:'30px 20px 30px 20px',
        boxShadow:'rgba(0, 0, 0, 0.08) 0px 5px 22px, rgba(0, 0, 0, 0.03) 0px 0px 0px 0.5px',
        borderRadius: '15px',
        marginTop: '60px'
    },
    inputlist:{
        marginBottom:'25px'
    },
    inputtextgrid:{
        padding:'0px',
        '& .css-wb57ya-MuiFormControl-root-MuiTextField-root':{
            border: '1px solid #eee',
            borderRadius:'5px',
            '&:after':{
                border: '2px solid #1976d2',
            } 
        },
        '& .css-2y464i-MuiInputBase-root-MuiFilledInput-root': {
            backgroundColor: 'rgba(0, 0, 0, 0)',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.02)',
              '&:not(.Mui-disabled):not(.Mui-error)': {
                '&:before': {
                  borderBottom: 'none',
                },
              },
            },
            '&:before':{
                borderBottom: 'none',
            },
            '&:after':{
                borderBottom:'none',
            }
        },
        '& .css-10botns-MuiInputBase-input-MuiFilledInput-input':{
            fontSize: '13px',
            fontWeight: '600',
            color: 'rgb(108,115,127)'
        }
    },
    listheaderbottom:{
        marginTop:'20px',
        '& h4':{
            fontSize:'16px',
            fontWeight:'600',
            },
            '& .css-1t6e9jv-MuiCardActions-root':{
                justifyContent:'space-between',
            },
            '& p':{
                marginTop:'10px',
                fontSize: '15px',
                color: 'rgb(108,115,127)'
            }
    },
    updatebtn:{
        marginTop:'30px',
        gap:'20px',
        '& .css-sghohy-MuiButtonBase-root-MuiButton-root':{
            padding:'10px 20px',
            backgroundColor:'rgb(67, 56, 202)',
            borderRadius: '15px',
        },
        '& .css-1e6y48t-MuiButtonBase-root-MuiButton-root':{
            padding:'10px 20px',
            borderRadius: '15px',
        }
    },
    updatecancelbtn:{
        '& p':{
            textTransform:'capitalize',
            fontSize:'small',
            fontWeight: '600',
        },
        '&.css-1rwt2y5-MuiButtonBase-root-MuiButton-root':{
            border: '1px solid rgba(99, 102, 241, 0.5)',
            borderRadius:'12px'
        },
        '&:hover':{
            '&.css-1rwt2y5-MuiButtonBase-root-MuiButton-root':{
                border: '1px solid rgb(99, 102, 241)'
            },
        }
    },
    cancelbtn:{
        '& p':{
            textTransform:'capitalize',
            fontSize:'small',
            color:'#000',
            fontWeight:'600'
        },
    },
})
)
export default customersStyle; 