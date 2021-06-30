export const CartStyle = theme => {
    return({
        container:{
            marginTop:'50px',
            '& h2':{
                fontFamily:"'Alegreya Sans', sans-serif"
            },
            '& div':{
                textAlign: 'center',
                padding: '5px 0px 5px 0px',
                backgroundColor: 'var(--color-secondary)',
                color: 'rgb(95, 94, 94)',
            },
            '& table':{
                boxSizing: 'border-box',
                width: '100%',
                height: 'auto',
                color: 'rgb(95, 94, 94)',
                '& thead':{
                    border: 'solid 2px var(--color-secondary)',
                    backgroundColor:'#e1e5ea',
                    '& tr > th':{
                        border: 'solid 2px var(--color-secondary)',
                        // fontFamily: "'Maitree', serif",
                        fontFamily:"'Alegreya Sans', sans-serif",
                        fontSize: '1.1rem',
                    }
                },
                '& tbody':{
                    '& tr > td':{
                        height:'100%',
                        fontFamily: "'Didact Gothic', sans-serif",
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
                }
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
    })
}