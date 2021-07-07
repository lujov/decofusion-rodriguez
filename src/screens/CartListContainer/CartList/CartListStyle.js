export const CartListStyle = theme => {
    return({
        container:{
            marginTop:'50px',
            '& article':{
                textAlign: 'center',
                padding: '5px 0px 5px 0px',
                border: 'solid 2px var(--color-secondary)',
                backgroundColor:'#e1e5ea',
                color: 'rgb(95, 94, 94)',
                marginTop:'6PX',
                '& h2':{
                    fontFamily:"'Alegreya Sans', sans-serif"
                },
            },
            '& table':{
                boxSizing: 'border-box',
                width: '100%',
                height: 'auto',
                color: 'rgb(95, 94, 94)',
                marginTop: '2%',
                '& tbody':{
                    backgroundColor:'var(--color-primary)',
                },
            } 
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
            height:'30px',
            fontSize:'0.9rem',
            whiteSpace:'normal',
            backgroundColor:'#be818d',
            border: '#be818d',
            borderRadius:'6px',
            color:'var(--color-primary)',
            opacity:'0.7'
        }
    })
}