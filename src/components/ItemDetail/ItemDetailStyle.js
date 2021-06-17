export const ItemDetailStyle = theme => {
    return({
        container:{
            width:'fit-content',
            display:'flex',
            gap:'10%',
            '& div >h4':{
                color: 'var(--color-terciary)',
            },
            '& div > h3':{
                marginTop: 0,
                color: '#a7bbc7',
            },
            '& img':{
                width:'50%',
            },
            '& div > div':{
                display:'flex',
                gap:'5%',
                justifyContent:'space-between',
                height:'fit-content',
                '& button':{
                    border:'solid 2px #a7bbc7',
                    backgroundColor: '#e1e5ea',
                    borderRadius: '11px',
                    padding: '0.5em 1em',
                },
                '& button:hover':{
                    backgroundColor: '#da93a0',
                    border:'solid 2px #da93a0',
                    cursor:'pointer'
                }
            }, 
            
        }
    })
    
}