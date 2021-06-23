export const PromosListStyle = theme => {
    return ({
       container: {
            overflowX: 'hidden',
            display: 'flex',
            flexDirection:'column',
            alignItems:'center',
            '& div':{
               display:'flex',
               fontFamily: "'Maitree', serif",
               fontWeight:'300',
               gap:'5px',
               justifyContent: 'center',
               width:'95%',
               marginLeftt: '5px',
               '& h2':{
                  textAlign:'center'
               }
            },
            '& h1':{
               color:'var(--color-secondary)',
               backgroundColor:'#e1e5ea',
               marginRight:0,
               marginLeft:0,
               width:'95%',
               textAlign:'center',
               fontSize: '2rem',
               padding: '2% 0',
               fontFamily:"'Alegreya Sans', sans-serif",
               border: 'solid 2px  #a7bbc7',
               borderRadius: '15px',
            }
       },
       

    })}