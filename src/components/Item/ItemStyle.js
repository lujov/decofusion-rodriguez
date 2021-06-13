export const ItemStyle = theme => {
    return ({
        container: {
            width: '20%',
            boxShadow: '1px 1px 5px 2px rgba(0, 0, 0, 0.308)',
            boxSizing: 'border-box',
            padding: '1.5%',
            display:'flex',
            flexDirection:'column',
            alignItems: 'center',
            '& h3':{
                color:'#a7bbc7',
            },
            '& p':{
                width:'75%',
                textAlign:'center',
            },
            '& span':{
                color:'#a7bbc7',
                fontWeight:'bold',
                fontSize:'1.2em'
            },
            '& img':{
                width:'80%'
            }

        }
    })
}