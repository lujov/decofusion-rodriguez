
export const ItemDetailStyle = theme => {
    return({
        container:{
            width:'fit-content',
            display:'flex',
            justifyContent:'center',
            gap:'5%',
            boxSizing: "border-box",
            '& div >h4':{
                margin:0,
                fontWeight:'100',
                color: 'rgb(95, 95, 95)',
            },
            '& div > h3':{
                margin: 0,
                color: '#a7bbc7',
                fontFamily: "'Maitree', serif",
                fontSize:'2rem',
                '@media (max-width:480px)': {
                    fontSize:'1.5rem',    
                }
            },
            '& div> p':{
                margin:0,
                color: 'rgb(95, 95, 95)',
            },
            '& div > span':{
                fontSize:'1.5rem',
                color:'var(--color-terciary)',
                fontWeight:'bold',
                marginTop:'3%'
            },
            '& div > div':{
                '& button':{
                    border:'solid 2px #a7bbc7',
                    backgroundColor: '#e1e5ea',
                    borderRadius: '11px',
                    padding: '0.5em 1em',
                    fontFamily: "'Maitree', serif",
                    fontWeight:'400',
                    color:'grey',
                    fontSize:'1rem'
                },
                '& button:hover':{
                    backgroundColor: '#da93a0',
                    border:'solid 2px #da93a0',
                    cursor:'pointer',
                    color:'white'
                }
            },
            '@media (max-width:1065px)': {
                flexDirection:'column',
                alignItems:'center'    
            }            
        },
        imgContainer:{
            width:'520px',
            '& img': {
                width: "100%",
                height: "auto"
            },
            '@media (max-width:1065px)': {
                width:'80%'   
            } 
        },
        infoContainer:{
            width:'40%',
            '@media (max-width:1065px)': {
                width:'80%'   
            } 
        },
        iconContainer:{
            display:'flex',
            justifyContent:'flex-start',
            gap:'2%',
            margin:'3% 0'
        },
        btn: {
            display:'flex',
            gap:'5%',
            justifyContent:'space-between',
            height:'fit-content',
            margin:'5% 0',
        },
        icon:{
            color:'var(--color-terciary)'
        },
        formControl:{
            width:'30%',
            marginBottom: '4%',
        },
        notFoundContainer:{
            display: 'flex',
            flexDirection:'column',
            alignItems:'center',
            width:'100%',
            '& h1':{
                color: '#a7bbc7',
                fontFamily: "'Maitree', serif",
                fontSize:'1.6rem',
            },
            '& img':{
                width:'55%',
            }
        },
    })
    
}