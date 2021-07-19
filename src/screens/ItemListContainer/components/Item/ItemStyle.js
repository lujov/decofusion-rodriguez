export const ItemStyle = theme => {
    return ({
        container: {
            width: '100%',
            height:'385px',
            boxShadow: '1px 1px 5px 2px rgba(0, 0, 0, 0.308)',
            boxSizing: 'border-box',
            padding: '4%',
            display:'flex',
            flexDirection:'column',
            alignItems: 'center',
            justifyContent:'space-around',
            backgroundColor:'#fcf9f9',
            '& h3':{
                color:'#a7bbc7',
            },
            '& p':{
                width:'75%',
                textAlign:'center',
                color:'gray'
            },
            '& span':{
                color:'#a7bbc7',
                fontWeight:'bold',
                fontSize:'1.2em'
            },
            '& img':{
                width:'80%',
            }

        }
    })
}