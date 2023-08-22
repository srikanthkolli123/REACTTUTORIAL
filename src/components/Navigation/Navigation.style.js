const navigationStyle = ((theme) => ({
    clear:{
        clear:'both'
    },
    navigation:{
        position: 'fixed',
        left: '0px',
        top: 0,
        bottom:'0',
        background: '#1c2536',
        width: '245px',
        '& .css-10hburv-MuiTypography-root':{
            color:'#fff'
        },
        '& .css-i4bv87-MuiSvgIcon-root':{
            color:'#fff'
        },
        '&.show-scrollbar': {
            overflow: 'auto',
            '&::-webkit-scrollbar': {
              width: '6px',
            },
        },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#ddd',
              borderRadius: '3px',
            },
    },
    leftangle:{
        float:' right',
        padding:'20px 10px',
    },
    subheader:{
        '&.css-uob957-MuiListSubheader-root':{
            background: 'none',
            color:'#fff'
        },
        
    },
    naviagtionlist:{
        '& .css-16ac5r2-MuiButtonBase-root-MuiListItemButton-root':{
            '&:hover':{
                background:'none'
            }
        }
    },
    activeItem:{
        backgroundColor: 'rgba(247, 144, 9, 0.12)',
    }
})

)
export default navigationStyle; 