export const CartListStyle = theme => {
    return({
        container:{
            marginTop:'50px',
        },
        cartTitle:{
            textAlign: 'center',
            padding: '5px 0px 5px 0px',
            border: 'solid 2px var(--color-secondary)',
            backgroundColor:'#e1e5ea',
            color: 'var(--color-secondary)',
            width:'95%',
            margin:'6px auto 0 auto',
            borderRadius: '15px',
            '& h2':{
                fontFamily:"'Alegreya Sans', sans-serif"
            },
        },
        cartTable:{
            boxSizing: 'border-box',
            height: 'auto',
            color: 'rgb(95, 94, 94)',
            margin: '2% auto 0 auto',
            padding: '2%',
            width:'95%',
            backgroundColor:'#fcf9f9',
            boxShadow: '1px 1px 5px 2px rgba(0, 0, 0, 0.308)',
            borderRadius: '15px',
        },
        precioContainer:{
            height:'55.6px',
            display: 'flex',
            gap:'2%',
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
        divisor:{
            borderBottom:'solid 3px #dda4ae',
            marginTop:'4%',
        },
        finalInfo:{
            display:'flex',
            height:'50px',
            alignItems:'center',
            justifyContent: 'space-between',
            width:'100%',
            fontFamily: "'Didact Gothic', sans-serif",
        },
        btn:{
            width:'10%',
            height:'30px',
            fontSize:'1.1rem',
            whiteSpace:'normal',
            backgroundColor:'#be818d',
            border: '#be818d',
            borderRadius:'6px',
            color:'var(--color-primary)',
            opacity:'0.7',
            marginRight:'1%'
        },
        btnClear:{
            width:'fit-content',
            height:'fit-content',
            fontSize:'1.1rem',
            whiteSpace:'normal',
            backgroundColor:'#e2c7cc',
            border: 'solid 2px #be818d',
            borderRadius:'6px',
            color:'#a16c77',
            fontWeight: '500',
            opacity:'0.7',
            padding:'4px 6px',
            '&:hover':{
                backgroundColor:'#be818d',
                color:'white',
                cursor:'pointer',
            }
        }
    })
}