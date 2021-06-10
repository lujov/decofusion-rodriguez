export const NavBarStyle = theme => {
    return ({
        container: {
            with:'100vw',
            backgroundColor: 'var(--color-secondary)',
            fontSize: '1.5rem',
            color: 'var(--color-primary)',
            height: 'fit-content',
            display: 'flex',
            alignItems:'center',
            justifyContent:'space-between',
            padding: '0 1%',
            '& > div > img': {
                height: '70px' ,
                marginRight: '6%',
            },
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
                alignItems:'center',
                justifyContent:'space-between',
                width:'40%',
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
                transition: 'border-bottom 1s',
                '& :hover': {
                    borderBottom: 'solid #da7f8f 2px',  
                },
                '& a': {
                    color:'var(--color-primary)', 
                    textDecoration: 'none',
                },
                '& a:hover': {
                    color:'var(--color-terciary)'  
                }
            },
            '& > form':{
                display:'flex',
                alignItems:'center',
                justifyContent:'flex-end',
                gap:'3%',
                width:'30%',
                '& button': {
                    backgroundColor: 'var(--color-secondary)',
                    border:'none'
                },
                '& input': {
                    border:'none',
                    borderRadius: '5px',
                    padding:'1%',
                }
            },
            '@media (max-width:800px)': {
                '& > div': {
                    justifyContent:'flex-start'
                },
                '& > div > button': {
                    display:'block',
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
        btn: {
            color:'var(--color-primary)', 
            cursor:'pointer'

        }
    })
}