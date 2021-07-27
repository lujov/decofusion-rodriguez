
export const PromosListContainerStyle = theme => {
    return ({
       container: {
          width:'100%',
          display:'flex',
          flexDirection:'column',
          alignItems: 'center',
          height:'100%',
          marginTop:'20px',
         '@media (max-width:1260px)' : {
          marginTop:'50px',
          }, 
          '@media (max-width:1105px)' : {
            marginTop: 0,
          },
       },
    })}