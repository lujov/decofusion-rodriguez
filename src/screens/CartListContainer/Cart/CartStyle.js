export const CartStyle = theme => {
    return({
        containerCart:{
            borderTop:'solid 1px grey',
            '& article':{
                With: '100%',
                height:'150px',
                display:'flex',
                justifyContent:'space-between',
                alignItems:'center',
                backgroundColor:'#fcf9f9',
                margin: '8px 6px 8px 6px', 
                '@media (max-width:1012px)' : {
                    flexDirection:'column',
                    height:'fit-content',
                    marginTop: '5%'
                }, 
            }, 
            '@media (max-width:1012px)' : {
                marginTop: '4%',
                borderTop:'solid 2px grey',
            },
            '@media (max-width:745px)' : {
                marginTop: '4%',
                borderTop:'solid 2px grey',
            },  
        },
        precioContainer:{
            width:'45%',
            height:'55.6px',
            display: 'flex',
            gap:'4%',
            justifyContent:'space-between',
            alignItems:'center',
            marginTop: '12px',
            fontFamily: "'Didact Gothic', sans-serif",
            fontSize:'1.5rem',
            backgroundColor:'#fcf9f9',
            '@media (max-width:1012px)' : {
                width:'80%'
            },
            '@media (max-width:745px)' : {
                width:'80%'
            },
            '& span':{
                marginLeft:'4px',
            },
            '& input':{
                width:'30%',
                height:'30px',
                margin: 0,
                boxSizing:'border-box'
            },
            '& button':{
                width:'fit-content',
                height:'fit-content',
                boxSizing:'border-box',
                paddingTop:'6px',
                fontSize:'0.9rem',
                whiteSpace:'normal',
                backgroundColor:'#be818d',
                border: '#be818d',
                borderRadius:'6px',
                color:'var(--color-primary)',
                opacity:'0.7',
                '& :hover':{
                    cursor:'pointer'
                }
            },

        },
        infoItemContainer:{
            display:'flex',
            flexDirection:'row',
            gap:'5%',
            justifyContent:'space-between',
            width:'50%',
            height:'150px',
            fontFamily: "'Didact Gothic', sans-serif",
            fontSize:'1.5rem',
            alignItems:'center',
            backgroundColor:'#fcf9f9',
            '& img':{
                height:'150px',
                width:'auto'
            },
            '@media (max-width:1012px)' : {
                width:'80%'
            }, 
            '@media (max-width:745px)' : {
                width:'80%',
                flexWrap:'wrap',
                height:'fit-content',
            }, 
        },
        itemTitle:{
            width:'35%',
            textAlign: 'center',
        },
        itemQuantity:{
            textAlign: 'center',
        },
        itemcolor:{
            width:'35%',
            textAlign: 'center',
        },
        divisor:{
            height:'90%',
            width:'1px',
            backgroundColor:'#dda4ae',
            '@media (max-width:1012px)' : {
                height:'1px',
                width:'90%',
                marginTop: '2%'
            },
        }
            
    })
}