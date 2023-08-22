const ordersstyle= ((theme) => ({
    oredrspage:{
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
        marginBottom:'50px',
        alignItems:'center',
        '& h4':{
          fontSize:'25px',
          fontWeight: '600'
        }
    },
    ordersbtn:{
      textTransform: 'capitalize',
    },
    orderscomp: {
        position: 'absolute',
        left: '245px',
        top: 150,
        width: 'calc(100% - 245px)',
        padding: '20px',
        boxSizing: 'border-box'
      },
      gridcontainer:{
        padding: '0px 0px 0px 0px',
      },
      gridsec: {
        padding:'16px 0px',
        '& .gridsecInner':{
          borderRadius: '20px',
          boxShadow: 'rgba(0, 0, 0, 0.04) 0px 5px 22px, rgba(0, 0, 0, 0.03) 0px 0px 0px 0.5px',
          padding: '20px 0px 0px 0px'
        }
      },
      griditem: {
        display: 'flex',
        margin: '20px',
      },
      tasklogo: {
        marginRight: '10px',
      },
      list: {
        marginLeft: '20px',
      },
      title: {
        marginBottom: '5px',
      },
      caption: {
        color: 'rgb(17, 25, 39)',
        fontWeight: '700 '
      },
      tasktext:{
        color: '#000 ',
        fontSize: '12px ',
        textTransform: 'none ',
        fontFamily: 'sans-serif '
      },
      righticon:{
        marginLeft: '3px',
        color: 'rgb(17, 25, 39)'
      },
      innersec:{
        borderRadius: '20px',
          boxShadow: 'rgba(0, 0, 0, 0.04) 0px 5px 22px, rgba(0, 0, 0, 0.03) 0px 0px 0px 0.5px',
          padding: '20px',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'rgb(245, 247, 255)',
      },
      personlogo:{
        width: '115px',
        height: '145px'
      },
      innertext:{
        marginLeft: '30px'
      },
      firsttxt:{
       paddingBottom: '15px',
       color: 'rgb(99, 102, 241)',
       '&.css-1sn4lm3-MuiTypography-root':{
        fontWeight: 600
       }
      },
      secondtxt:{
        paddingBottom: '12px',
        color: 'rgb(17, 25, 39)'
      },
      thirdtxt:{
        paddingBottom: '18px',
      },
      titlecaption:{
        fontWeight: 'bold '
      },
      variantbody:{
        lineHeight: '20px',
        fontWeight: 'bold '
      },
      subtitle:{
        lineHeight: '24px '
      },
      innerbtn:{
        backgroundColor: 'rgb(99, 102, 241)',
        width:'50%',
        borderRadius: '8px',
        padding: '2px 5px',
      },
      settingdbtn:{
        color: '#fff',
        marginLeft: '7px ',
        textTransform: 'capitalize',
        fontSize: '14px '
      },
      seticon:{
        color:'#fff'
      },
      nexttext:{
        padding:'30px',
        borderRadius: '20px',
          boxShadow: 'rgba(0, 0, 0, 0.04) 0px 5px 22px, rgba(0, 0, 0, 0.03) 0px 0px 0px 0.5px',
      },
      nextlogo:{
        width: '140px',
        height: '22px'
      },
      dot:{
        minWidth: '35px ',
        // '& ::after': {
        //   fontSize: '6px',
        //   lineHeight: '20px',
        //   position: 'absolute',
        //   top: 0,
        //   left: 0,
        //   width: "20px",
        //   height: '20px',
        //   content: '•',
        //   textAlign: 'center',
        //   opacity: '.25',
        //   color: '#6366F1',
        // }
      },
      listdots:{
        display: 'flex',
      },
      designtxt:{
        fontWeight: 'bold '
      },
      tiptxt:{
        lineHeight:' 25px ',
        letterSpacing: '0px ' 
      },
      inboxgrid:{
        boxShadow: 'rgba(0, 0, 0, 0.04) 0px 5px 22px, rgba(0, 0, 0, 0.03) 0px 0px 0px 0.5px',
        borderRadius: '20px',
        width: '100%'
    },
    inboxitems:{
      padding: '10px',
    },
      inboxheader :{
        display: 'flex',
        justifyContent: 'space-between'
      },
      headertitle:{
        fontWeight: '600 ',
        fontSize: '18px '
      },
      content:{
        paddingBottom: '15px'
      },
      tabledata:{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%'
      },
      inboxtext:{
        display: 'flex',
        justifyContent:' space-between'
      },
      inboxlogo:{
        width: '40px ',
        height: '40px ',
        borderRadius: '25px'
      },
      inboxdata:{
        marginLeft:'10px',
      },
      logoname:{
        fontSize: '15px ',
      },
      logodata:{
        fontSize: '14px ',
        color: 'rgb(108, 115, 127)'
      },
      chartContainer: {
        width: '100%',
        height: '320px',
      },
      barchartheader:{
        display: 'flex ',
        paddingBottom: '45px',
      },
      chartyear:{
          display: 'flex ', 
          justifyContent: 'flex-end '
        },
      inboxbottom:{
      },
      bottomarrow:{
        marginTop: '-5px'
      },
      upcomingevent:{
        padding: '8px',
        backgroundColor: 'rgb(243, 244, 246)',
        borderRadius: '16px',
        maxWidth: 'fit-content'
      },
      eventmonth:{
        fontSize: '12px '
      },
      eventbox:{
        display: 'flex',
        alignItems: 'center'
      },
      eventdate:{
        fontWeight: '600 '
      },
      tableheader:{
        marginRight: '20px ',
        color: 'rgb(108, 115, 127)',
        fontWeight: '600 ',
        fontSize: '15px '
      },
      firsttransaction:{
        width: '20%'
      },
      secondtransaction:{
        width: '30%'
      },
      thirdtransaction:{
        width: '30%'
      },
      fourthtransaction:{
        width: '20%'
      },
      payment:{
        backgroundColor: 'rgba(247, 144, 9, 0.12)',
        color: 'rgb(181, 71, 8)',
        width: '88px',
        borderRadius: '10px'
      },
      secondpayment:{
        color: 'rgb(11, 129, 90)',
        backgroundColor: 'rgba(16, 185, 129, 0.12)',
        width: '95px',
        borderRadius: '10px'
      },
      thirdpayment:{
        color: 'rgb(180, 35, 24)',
        backgroundColor: 'rgba(240, 68, 56, 0.12)',
        width: '95px',
        borderRadius: '10px'
      },
      paymentstatus:{
        fontSize:'12px ',
        textAlign: 'center',
        padding: '3px 8px',
        fontWeight: '600 '
      },
      paymentamount:{
        color: 'rgb(16, 185, 129)',
        fontWeight: '600 ',
        fontSize:'15px '
      },
      secondpaymentamount:{
        color: 'rgb(240, 68, 56)',
        fontWeight: '600 ',
        fontSize:'15px '
      },
      jobsec:{
        color: 'rgb(99, 102, 241)'
      },
      jobtitle:{
        color: 'rgb(99, 102, 241)',
        fontSize: '14px ',
      },
      jobtext:{
        marginLeft: '15px'
      },
      jobcaption:{
        padding: '0px 0px 10px 0px',
        fontSize: '18px ',
        fontWeight: '600 '
      },
      jobdesc:{
        padding: '0px 0px 40px 20px'
      },
      jobcont:{
        color: 'rgb(108, 115, 127)',
        fontSize: '14px '
      },
}));

export default ordersstyle;