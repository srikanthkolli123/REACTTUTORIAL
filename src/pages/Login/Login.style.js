const loginStyle = ((theme) => ({
    main:{
        width:'400px',
        margin:'55px auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '85px',
    },
    signinlogo:{
        width:'45px',
       height:'45px',
       margin:'auto',
       backgroundColor:'#9c27b0',
    },
    signintext:{
        fontSize: '20px',
        textAlign:'center',
        margin:'10px 0px'
    },
    textfield:{
        width: '100%',
        margin: '15px 0px',
    },
    formbtn:{
        backgroundColor: '#1976d2',
        color: '#fff',
        marginTop: '15px',
        '&:hover':{
            backgroundColor:'#1565c0'
        },
        '& .css-ahj2mt-MuiTypography-root':{
            fontSize: '15px'
        }
    },
    listtext:{
        justifyContent: 'space-between',
        padding: '20px 0px'
    },
    formtext:{
        fontSize:'14px',
        textDecoration: 'underline',
        '& a':{
            color: '#1976d2'
        } 
    },
    copyrights:{
        textAlign:'center',
    },
    copyrightstext:{
        fontSize: '14px'
    }
})

)
export default loginStyle; 