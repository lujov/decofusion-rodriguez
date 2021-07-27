export const PromosListStyle = theme => {
    return ({
       container: {
            overflowX: 'hidden',
            display: 'flex',
            flexDirection:'column',
            alignItems:'center',
            height:'100%',
            width:'100%',
            '& div':{
               display:'flex',
               fontFamily: "'Maitree', serif",
               fontWeight:'300',
               gap:'5px',
               justifyContent: 'center',
               width:'95%',
               marginLeftt: '5px',
               '@media (max-width:550px)' : {
                  flexWrap:'wrap'
              },
               '& h2':{
                  textAlign:'center'
               }
            },
       },
       itemTitle:{
         textAlign: 'center',
         border: 'solid 2px var(--color-secondary)',
         backgroundColor:'#e1e5ea',
         color: 'var(--color-secondary)',
         width:'100%',
         margin:'0 auto 2% auto',
         borderRadius: '15px',
         padding:'1.5%',
         '& h1':{
             fontFamily:"'Alegreya Sans', sans-serif",
             fontSize: '2rem',
             margin: 0,
         }
     } 
       

    })}