export const NavBarStyle = theme => {
    return ({
        container: {
            with:'100vw',
            backgroundColor: 'var(--color-secondary)',
            fontSize: '1.5rem',
            color: 'var(--color-primary)',
            // height: 'fit-content',
            display: 'flex',
            alignItems:'flex-start',
            justifyContent:'space-between',
            padding: '0 1%',
            boxSizing: 'border-box',
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
            '& > div':{
                display:'flex',
                alignItems:'flex-start',
                justifyContent:'space-between',
                width:'40%',
                // height: '83px'
            },
            '& > div > ul':{
                display:'flex',
                listStyle:'none',
                justifyContent:'space-between',
                padding: 0,
                width:'60%',
                minWidth: '262px'
            },
            '& > div > ul > li': {
                color: 'var(--color-primary)',
                height: 'fit-content',
                textDecoration: 'none',
                '& a': {
                    color:'var(--color-primary)', 
                    textDecoration: 'none',
                },
                '& a:hover': {
                    color:'var(--color-terciary)',
                    borderBottom: 'solid #da7f8f 2px',  
                },        
            },
            '& > form':{
                display:'flex',
                alignItems:'center',
                justifyContent:'flex-end',
                gap:'3%',
                width:'30%',
                marginTop:'22px',
                '& input': {
                    border:'none',
                    borderRadius: '5px',
                    padding:'1%',
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
        widgetsContainer:{
            display:'flex',
            width:'20%',
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
                '& li':{
                    marginTop:'2px',
                },
                '& li:hover':{
                    color:'#e1e5ea',
                    cursor:'pointer',
                },
            },
            '&:hover > ul':{
                height:'130px',
                opacity:1,
            },
        },
        btnMobile:{
            height: '60px',
            boxSizing: 'border-box',
        }
        
    })
}