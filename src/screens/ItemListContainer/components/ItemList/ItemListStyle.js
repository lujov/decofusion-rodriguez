export const ItemListStyle = theme => {
    return({
        container:{
            display:'grid',
            gridTemplateColumns: '20% 20% 20% 20%',
            columnGap:'5%',
            rowGap: '60px',
            justifyContent:'center',
            marginTop:'3%',
            width:'100%',
            height:'auto',
            marginBottom:'20px',
            boxSizing: 'border-box',
            '@media (max-width:1255px)' : {
                gridTemplateColumns: '28% 28% 28%',
                rowGap: '60px',
            },
            '@media (max-width:839px)' : {
                gridTemplateColumns: '40% 40%',
                rowGap: '40px',
            },
            '@media (max-width:443px)' : {
                gridTemplateColumns: '60%',
                rowGap: '40px',
            },

        }
    })
    
}