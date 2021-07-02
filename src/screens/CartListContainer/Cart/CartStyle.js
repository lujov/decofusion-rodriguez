export const CartStyle = theme => {
    return({
        containerCart:{
            '& tr':{
                With: '100%',
                height:'150px',
                display:'flex',
                justifyContent:'space-between',
                alignItems:'center',
                backgroundColor:'var(--color-primary)',
                margin: '0 6px 6px 6px',
                borderTop:'solid 1px grey',
                '& td':{
                    height:'150px',
                    width:'30%',
                    fontFamily: "'Didact Gothic', sans-serif",
                    display:'flex',
                    alignItems:'center',
                    fontSize:'1.5rem',
                    '& div':{
                        backgroundColor:'var(--color-primary)',
                        height:'80%',
                        '& form':{
                            display: 'flex',
                            '& input':{
                                marginRight:'4%',
                            },
                            '& button':{
                                fontSize:'0.9rem',
                                whiteSpace:'normal',
                                width: '100%',
                                borderRadius:'6px',
                                backgroundColor:'#93aab8',
                                border: '#93aab8',
                                height:'30px',
                                color:'var(--color-primary)',
                                opacity:'0.7'
                            }
                        },
                    },
                },
            },  
        },
        precioContainer:{
            width:'25%',
            height:'55.6px',
            display: 'flex',
            gap:'4%',
            alignItems:'center',
            marginTop: '12px',
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
                width:'60%',
                height:'30px',
                fontSize:'0.9rem',
                whiteSpace:'normal',
                backgroundColor:'#be818d',
                border: '#be818d',
                borderRadius:'6px',
                color:'var(--color-primary)',
                opacity:'0.7'
            }

        },
        infoItemContainer:{
            display:'flex',
            flexDirection:'row',
            gap:'5%',
            width:'50%',
            '& td':{
                height:'150px',
                '& img':{
                    height:'150px',
                    width:'auto'
                },
            }
        },
        divisor:{
            height:'90%',
            width:'1px',
            backgroundColor:'#dda4ae',
        }
            
    })
}