export const HomeStyle = theme => {
    return ({
       container: {
           display: 'flex',
           justifyContent:'center',
           height:'fit-content',
           alignItems: 'center',
           marginTop:'100px',
           '@media (max-width:905px)' : {
                marginTop: '110px',
            },
            '@media (max-width:830px)' : {
                marginTop: '100px',
            },
           '& > h1':{
               fontFamily:"'Alegreya Sans', sans-serif",
               fontSize: '2rem',
               color:'grey',
               fontWeight:'400'
            }   
       },

    })}