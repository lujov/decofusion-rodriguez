export const PromosStyle = theme => {
    return({
        container:{
            display: 'flex', 
            flexDirection: 'column',
            alignItems:'center',
            width:'fit-content',
            marginRight: 0,
            '& h2':{
                color:'gray'
            },
            '& img':{
                width: '100%',
                opacity:'0.7',
            },
            '& img:hover':{
                opacity:'1'
            },
            '& :hover > h2':{
                color:'var(--color-secondary)'
            }
        },
    })
    
}