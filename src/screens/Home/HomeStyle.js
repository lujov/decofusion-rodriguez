export const HomeStyle = theme => {
    return ({
       container: {
           display: 'flex',
           justifyContent:'center',
           height:'100vh',
           alignItems: 'center',
           marginTop:'120px',
           '& > h1':{
               fontFamily:"'Alegreya Sans', sans-serif",
               fontSize: '2rem',
               color:'grey',
               fontWeight:'400'
           }
           
       },
       

    })}