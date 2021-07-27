export const ItemListContainerStyle = theme => {
    return ({
        container: {
            display:'flex',
            flexDirection:'column',
            // justifyContent:'center',
            alignItems:'center',
            padding: '0 2% 2%',
            backgroundColor: 'var(--color-primary)',
            width:'100vw',
            height:'auto',
            color:'gray',
            boxSizing: 'border-box',
            marginTop:'120px',
            // overflowY:'hidden',
        },
        itemTitle:{
            textAlign: 'center',
            border: 'solid 2px var(--color-secondary)',
            backgroundColor:'#e1e5ea',
            color: 'var(--color-secondary)',
            width:'92%',
            margin:'6px auto 0 auto',
            borderRadius: '15px',
            padding:'1.5%',
            '& h1':{
                fontFamily:"'Alegreya Sans', sans-serif",
                fontSize: '2rem',
                margin: 0,
            }
        }  

    })}