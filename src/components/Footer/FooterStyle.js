export const FooterStyle = theme => {
    return ({
        container: {
            width:'100vw',
            backgroundColor: '#e1e5ea',
            color: 'rgb(80, 80, 80)',
            padding: '5%',
            overflowX: 'hidden',
            boxSizing: 'border-box',
            marginTop: '3em',
            '& h2':{
                fontFamily:"'Alegreya Sans', sans-serif",
                marginTop: '0%',
                marginBottom: '3%',
                border: 'none',
                borderBottom: 'solid 2px var(--color-secondary)',
            },
            '& section':{
                fontFamily: "'Didact Gothic', sans-serif",
                width: '100%',
                display: 'flex',
                flexFlow: 'row nowrap',
                '@media (max-width:720px)' : {
                    flexDirection:'column',
                },
            },
            '& article':{
                '& h3':{
                    marginTop: '5.5%',
                    border: 'none',
                    borderBottom: 'solid 1px var(--color-secondary)',
                },
                '& div':{
                    '& h3':{
                        marginTop: '5.5%',
                        border: 'none',
                        borderBottom: 'solid 1px var(--color-secondary)',
                    }
                }
            }
        },
        contactoInfo:{
            flex: '1 1 auto',
            width: '100%',
            marginRight: '8%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
        },
        contactoUbicacion:{
            flex: '1 1 auto',
            '& iframe':{
                '@media (max-width:440px)' : {
                    width:'100%'
                },
            },
        },
        mailContainer:{
            display: 'flex',
            flexDirection:'row',
            flexWrap: 'nowrap',
            alignItems: 'center',
            '& p':{
                margin: '0%',
                marginLeft: '2%',
            },
        },
        numberContainer:{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            alignItems: 'center',
            '& p':{
                marginLeft: '2%',
                marginBottom: 0,
            }
        },
        horarioSemana:{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            justifyContent: 'space-between',
            border: 'none',
            borderBottom: 'solid 1px rgba(128, 128, 128, 0.247)',
            '& p':{
                margin: 0,
            }
        },
        horarioFinde:{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            justifyContent: 'space-between',
            border: 'none',
            borderBottom: 'solid 1px rgba(128, 128, 128, 0.247)',
            marginTop: '3%',
            '& p':{
                margin: 0, 
            }
        },
    })
}