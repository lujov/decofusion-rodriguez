export const CardWidgetsStyle = theme => {
    return ({
       container: {
           cursor:'pointer',
           position:'absolute',
            // display:'flex',
            marginRight: "10px",
       },
       cartIcon:{
           '& :hover':{
               color:'#e1e5ea',
           }   
       },
       totalItem:{
           backgroundColor:'var(--color-primary)',
           color:'var(--color-secondary)',
           borderRadius:'10px',
           textAlign:'center',
           fontSize:'0.8rem',
           width:'fit-content',
           fontWeight:'bold',
           padding:'1px 7px',
           position:'relative',
           left:'15px',
           bottom:'38px',
           transform: 'scale(.7)'
       }

    })}