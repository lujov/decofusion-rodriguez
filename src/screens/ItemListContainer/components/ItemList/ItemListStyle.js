export const ItemListStyle = theme => {
    return({
        container:{
            display:'grid',
            gridTemplateColumns: '20% 20% 20% 20%',
            columnGap:'5%',
            rowGap: '6%',
            justifyContent:'center',
            marginTop:'3%',
            width:'100%',
            height:'100%',
            marginBottom:'20px',
            '@media (max-width:1255px)' : {
                gridTemplateColumns: '28% 28% 28%',
                rowGap: '2%',
            },
            '@media (max-width:839px)' : {
                gridTemplateColumns: '40% 40%',
                rowGap: '2%',
            },
            '@media (max-width:443px)' : {
                gridTemplateColumns: '60%',
                rowGap: '2%',
            },

        }
    })
    
}