const integrationStyle = ((theme) => ({
    clear:{
        clear:'both'
    },
    typography: {
        fontFamily: 'Inter-ExtraLight', 
      },
    integrationpage:{
        position: 'absolute',
        left: '245px',
        width: 'calc(100% - 245px)',
        top: '64px',
        background: 'rgba(255,255,255)',
        right: 0,
        padding: '20px',
        boxSizing: 'border-box',
    },
    pagetitle:{
        boxShadow:'rgba(0, 0, 0, 0.08) 0px 5px 22px, rgba(0, 0, 0, 0.03) 0px 0px 0px 0.5px',
        borderRadius:'10px',
        '& .css-2ulfj5-MuiTypography-root':{
            fontWeight: '600',
            marginBottom: '20px',
            padding: '16px'
        }
    },
    seachfeild:{
        border: '1px solid #ddd',
        padding: '10px 10px',
        borderRadius: '10px',
        width: '100%'
    },
    inputfeild:{
        fontSize: '20px'
    },
    searchicon:{
        margin: '-5px 0px',
        color:'rgb(108, 115, 127)'
    },
    integrationdetailslist:{
        padding:'10px 16px',
        gap: '110px',
    },
    listheader:{
        fontSize: '20px',
        fontWeight: '600'
    },
    issueheader:{
        fontSize:'16px',
        color:'rgb(108,115,127)',
        fontWeight:'600'
    },
    detailsgrid:{
        boxShadow:'rgba(0, 0, 0, 0.08) 0px 5px 22px, rgba(0, 0, 0, 0.03) 0px 0px 0px 0.5px',
        borderRadius:'15px',
        boxSizing:'border-box',
        '& .css-1p823my-MuiListItem-root':{
            '& .css-1pduc5x-MuiStack-root':{
                paddingTop:'5px'
            }
        }
    },
    invoicegrid:{
        marginBottom:'25px',
        paddingLeft:'24px'
    },
    dateform:{
        '& .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root':{
            borderRadius:'10px'
        },
        '& .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input':{
            minWidth:'275px'
        }
    },
    checkboxlist:{
        padding: '8px 12px',
        zIndex:100,
    },
    formcheckbox: {
        backgroundColor: 'rgb(248, 249, 250)',
        border: '1px solid rgb(242, 244, 247)',
        borderRadius: '10px',
        borderStyle: 'solid',
        borderWidth: '1px',
        maxHeight: '200px',
        overflow: 'auto',
        '& .css-1p823my-MuiListItem-root': {
          padding: '0px 20px',
        },
        
        '& .css-ahj2mt-MuiTypography-root': {
          fontSize: '14px',
          color: 'rgb(108, 115, 127)',
        },
        
        '&::-webkit-scrollbar': {
            width: '6px',
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#ddd',
            borderRadius: '3px',
        },
      },
    invoicebtn:{
        '& .css-1t6e9jv-MuiCardActions-root':{
            padding:'0px 8px'
        }
    },
    invoiceheader:{
        marginBottom:'30px'
    },
    paidicon:{
        backgroundColor: 'rgb(240, 253, 249)',
        '& .css-i4bv87-MuiSvgIcon-root':{
            color: 'rgb(16, 185, 129)'
        }
    },
    pendingicon:{
        backgroundColor: 'rgb(255, 250, 235)',
        '& .css-i4bv87-MuiSvgIcon-root':{
            color: 'rgb(247, 144, 9)'
        }
    },
    invoicedetailslist:{
        padding:'10px 16px',
        justifyContent: 'space-between'
    },
    filteraddbtn:{
        gap:'25px',
        '& .fabtn':{
            textTransform: 'capitalize',
            color:'#000'
        },
    },
    filtericon:{
        color:'#000'
    },
    filterbtn:{
        textTransform:'capitalize',
        color:'rgb(108,115,127)',
        gap:'5px',
        // '& .css-i4bv87-MuiSvgIcon-root':{
        //     fontSize:'medium'
        // }
    },
    newbtn:{
        backgroundColor: ' rgb(99, 102, 241)',
        color: '#fff',
        borderRadius:'13px',
        textTransform: 'capitalize',
        '&:hover':{
            backgroundColor:'rgb(67, 56, 202)'
        },
    },
    gridsecInner:{
        display:'flex',
        alignItems: 'center',
        gap:'25px',
        boxShadow:'rgba(0, 0, 0, 0.08) 0px 5px 22px, rgba(0, 0, 0, 0.03) 0px 0px 0px 0.5px',
        borderRadius:'15px',
        boxSizing:'border-box',
        padding: '20px 20px',
    },
    tablestack:{
        margin:'15px 0px 30px 0px'
    },
    tableRowNoBorder: {
        '&:last-child': {
            '& .css-1ex1afd-MuiTableCell-root':{
                borderBottom: 'none',
            },
          
        },
    },
    amountgrid:{
        display: 'grid',
        gap: '24px',
        gridTemplateColumns:'repeat(3, 1fr)',
        margin:'30px 0px'
    },
    list:{
        '& .css-e784if-MuiTypography-root':{
            color: 'rgb(108,115,127)',
        },
        '& .css-2ulfj5-MuiTypography-root':{
            fontSize:'15px'
        }
    },
    tableamount:{
        boxShadow: 'rgba(0, 0, 0, 0.08) 0px 5px 22px, rgba(0, 0, 0, 0.03) 0px 0px 0px 0.5px',
        boxSizing: 'border-box',
        borderRadius:'15px',
        '& .css-1ex1afd-MuiTableCell-root':{
            padding:'15px 10px',
        },
        '& .css-ahj2mt-MuiTypography-root':{
            fontSize:'12px',
            color: '#000',
            fontWeight: '600',
        },
        '& .css-e784if-MuiTypography-root':{
            fontSize:'13px',
            color:'rgb(108,115,127)'
        }

    },
    firstcell:{
        gap:'10px',
        padding: '0px',
        cursor:'pointer',
        '& .css-2ulfj5-MuiTypography-root':{
            fontSize: '15px',
            fontWeight: '600',
            color: '#000'
        }
    },
    invnumber:{
        '& .css-ahj2mt-MuiTypography-root':{
            fontSize:'12px',
            color: '#000',
            fontWeight: '600',
        },
        '& .css-e784if-MuiTypography-root':{
            fontSize:'13px',
            color:'rgb(108,115,127)'
        }
    },
    amount:{
        color:'#000',
        fontWeight: '600',
    },
    payment:{
        backgroundColor: 'rgba(247, 144, 9, 0.12)',
        width: '88px',
        borderRadius: '10px',
        '& .css-ahj2mt-MuiTypography-root':{
            color: 'rgb(181, 71, 8)',
            fontSize:'12px ',
            textAlign: 'center',
            padding: '3px 8px',
            fontWeight: '600 '
        }
    },
    paymentpaid:{
        backgroundColor: 'rgba(16, 185, 129, 0.12)',
        width: '50px',
        borderRadius: '10px',
        '& .css-ahj2mt-MuiTypography-root':{
            color: 'rgb(11, 129, 90)',
            fontSize:'12px ',
            textAlign: 'center',
            padding: '3px 8px',
            fontWeight: '600 '
        }
    },
    canceledcount:{
        color:'rgb(108,115,127)',
        fontWeight:'600'
    },
    paidcount:{
        color:'rgb(108,115,127)',
        fontWeight:'600'
    },
    pendingcount:{
        color:'rgb(108,115,127)',
        fontWeight:'600'
    },





    invoicepage:{
        position: 'absolute',
        left: '245px',
        width: 'calc(100% - 245px)',
        top: '64px',
        background: 'rgba(255,255,255)',
        right: 0,
        padding: '60px',
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
    actioncard:{
        padding: '8px 0px',
        gap: '25px',
        '& .css-m69qwo-MuiStack-root':{
            alignItems:'center'
        },
    },
    invoicedetails:{
        boxShadow:'rgba(0, 0, 0, 0.08) 0px 5px 22px, rgba(0, 0, 0, 0.03) 0px 0px 0px 0.5px',
        borderRadius:'15px',
        boxSizing:'border-box',
        padding:'50px',
        margin:'25px 0px'
    },
    customerdetails:{
        alignItems:'center',
        marginBottom:'20px'
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
    addbtn:{
        backgroundColor: ' rgb(99, 102, 241)',
        color: '#fff',
        borderRadius:'13px',
        textTransform: 'capitalize',
        '&:hover':{
            backgroundColor:'rgb(67, 56, 202)'
        },
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
    invoicelogo:{
        justifyContent: 'space-between',
    },
    invoiceemail:{
        color: 'rgb(0 0 0 / 61%)',
        fontWeight: '600'
    },
    colorpaid:{
        color: 'rgb(11, 129, 90)',
        fontSize:'35px',
        fontWeight:'600'
    },
    paidnumber:{
        textAlign:'right'
    },
    invoiceheaderdetails:{
        marginBottom:'25px'
    },
    invoicecardaddress:{
        justifyContent: 'space-between',
        '& .css-ahj2mt-MuiTypography-root':{
            fontSize:'15px',
            color: 'rgb(17 25 39 / 71%)',
        }
    },
    invoiceaddress:{
        display:'flex',
        gap:'160px',
        alignItems:'center'
    },
    invoiceduedates:{
        gap:'250px',
        '& .css-ahj2mt-MuiTypography-root':{
            color:'rgb(17 25 39 / 71%)',
        },
        '& .css-e784if-MuiTypography-root':{
            color:'rgb(17 25 39 / 71%)'
        }
    },
    pricetable:{
        backgroundColor:'rgb(248, 249, 250)',
        '& .css-1q1u3t4-MuiTableRow-root':{
            '& .css-1ygcj2i-MuiTableCell-root':{
                borderBottom:'none',
                fontSize:'14px'
            }
        }
    },
    pricetablerow:{
        '& .css-1ex1afd-MuiTableCell-root':{
            borderBottom:'none',
            '& .css-2ulfj5-MuiTypography-root':{
                fontSize:'18px',
                fontWeight:'600',
                color:'#00000094'
            }
        }
    },
    price:{
        float: 'right',
        '& .css-ahj2mt-MuiTypography-root':{
            fontSize:'13px',
            fontWeight:'600',
            color: '#0000009c'
        }
    },
    quantitytable:{
        padding:'10px 25px',
        
    },
    qynprice:{
        float: 'right',
    },
    notestxt:{
        '& .css-2ulfj5-MuiTypography-root':{
            fontSize:'18px',
            fontWeight:'600'
        },
        '& .css-ahj2mt-MuiTypography-root':{
            color:'rgb(108,115,127)'
        }

    }
})

)
export default integrationStyle; 