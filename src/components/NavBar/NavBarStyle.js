export const NavBarStyle = theme => {
    return ({
        container: {
            width:'100vw',
            backgroundColor: 'var(--color-secondary)',
            fontSize: '1.5rem',
            color: 'var(--color-primary)',
            padding: '0 1%',
            boxSizing: 'border-box',
            position:'fixed',
            zIndex:100,
            overflowX:'hidden',
            overflowY:'hidden',
        },
        widgetsContainer:{
            display:'flex',
            alignItems:'center',
            justifyContent:'flex-end',
            width:'30%',
            height:'50px',
            margin:'22px 30px 0 0',
            '& button': {
                backgroundColor: 'var(--color-secondary)',
                border:'none',
                height:'100%'
            },
        },
        linkImg:{
            '& img':{
                height: '70px' ,
                marginRight: '6%',
                marginTop: '5px',
            },
        },
        btn: {
            color:'var(--color-primary)', 
            cursor:'pointer',
        },
        subMenu:{
            '& ul':{
                listStyle:'none',
                height:0,
                opacity:0,
                transition:'all 1s ease',
                display:'flex',
                flexDirection:'column',
                '& li':{
                    marginTop:'2px',
                },
                '& li:hover':{
                    color:'#e1e5ea',
                    cursor:'pointer',
                },
            },
            '&:hover > ul':{
                height:'230px',
                opacity:1,
            },
        },
        subMenuMobile:{
            '& ul':{
                listStyle:'none',
                height:0,
                opacity:0,
                transition:'all 1s ease',
                display:'flex',
                flexDirection:'column',
                '& li':{
                    marginTop:'2px',
                },
                '& li:hover':{
                    color:'#e1e5ea',
                    cursor:'pointer',
                },
            },
            '&:hover > ul':{
                height:'230px',
                opacity:1,
            },
        },
        btnMobile:{
            height: '82px',
            boxSizing: 'border-box',
            position: 'absolute',
            left: '150px'
        },
        menuDesktop:{
            display: 'flex',
            alignItems:'flex-start',
            justifyContent:'space-between',
            '& > div > button': {
                display:'none',
                backgroundColor: 'var(--color-terceary)',
                border:'solid 2px #faf3f3',
                borderRadius: '3px',
                '& i': {
                    color:'var(--color-primary)',
                    fontSize: '1.2rem',
                    marginBottom: '4px',
                }
            },
            '& > div > ul':{
                display:'flex',
                listStyle:'none',
                justifyContent:'space-between',
                padding: 0,
                width:'60%',
                minWidth: '262px',
                marginLeft:'8px',
            },
            '& > div > ul > li': {
                color: 'var(--color-primary)',
                height: 'fit-content',
                textDecoration: 'none',
                '& Link':{
                    margin: 'auto 0'
                },
                '& a': {
                    color:'var(--color-primary)', 
                    textDecoration: 'none',
                },
                '& a:hover': {
                    color:'var(--color-terciary)',
                    borderBottom: 'solid #da7f8f 2px',  
                },        
            },
            '@media (max-width:800px)': {
                '& > div': {
                    justifyContent:'flex-start'
                },
                '& > div > button': {
                    display:'block',
                    marginTop:'25px',
                    marginLeft: '4%'

                },
                '& > div > ul':{
                    display:'none',
                },
            },
            '@media (max-width:450px)' : {
                '& > form > input' :{
                   display:'none'
                }
            }, 
        },
        logoItems:{
            display:'flex',
            alignItems:'flex-start',
            justifyContent:'space-between',
            width:'40%',
        },
        menuMobile:{
            display:'none',
            '& div':{
                height:'32.8px',
            },
            '& div:hover':{
                height:'fit-content',
            },
            '@media (max-width:800px)': {
                display:'flex',
                flexDirection:'column'
            }
            
        },
        productos:{
            textAlign:'center',
            width:'100%',
            marginLeft:'31px',
            marginRight:'31px',
        },
        contacto:{
            '&:hover':{
                color:'var(--color-terciary)',
                borderBottom: 'solid #da7f8f 2px', 
                cursor:'pointer'
            }  
        }       
    })
}