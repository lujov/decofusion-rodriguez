export const ItemListContainerStyle = theme => {
    return ({
        container: {
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            padding: '2%',
            backgroundColor: 'var(--color-primary)',
            with:'100vw',
            height:'fit-content',
            color:'gray',
            boxSizing: 'border-box',
            marginTop:'120px',
            overflowY:'hidden',
            '& h1':{
                margin: 0,
                fontFamily:"'Alegreya Sans', sans-serif",
                fontSize: '2.5rem',
                color:'grey',
                fontWeight:'400'
            }
        }  

    })}