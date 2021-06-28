export const CartListStyle = theme => {
    return({
        container:{
            marginTop:'50px',
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
                    }
                },
                '& tbody':{
                    '& tr > td':{
                        height:'100%',
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
                                    backgroundColor:'#9caca2',
                                    border: '#9caca2',
                                    height:'30px',
                                }
                            },
                       },
                    }
                }
            }
            
            
        }
    })
}