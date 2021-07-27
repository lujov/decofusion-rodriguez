export const ItemListStyle = theme => {
    return({
        container:{
            display:'flex',
            flexDirection:'column',
            AlignItems:'center',
        },
        itemsContainer:{
            display:'grid',
            gridTemplateColumns: '20% 20% 20% 20%',
            columnGap:'5%',
            rowGap: '60px',
            justifyContent:'center',
            marginTop:'2%',
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
        },
        divisor:{
            height:'2px',
            width:'100%',
            backgroundColor:'#dda4ae',
            marginTop:'2%',
        },
        infoContainer:{
            padding:'0 1.5%',
            display:'flex',
            flexDirection:'row',
            flexWrap: 'wrap',
            justifyContent:'space-between',
            width: '100%',
            boxSizing:'border-box',
            fontFamily: "'Didact Gothic', sans-serif",
            '& p':{
                width: '30%',
                marginTop: '1.2%',
                '@media (max-width:870px)' : {
                    width: '40%',
                },
                '@media (max-width:770px)' : {
                    width: '50%',
                },
            },
            '& div':{
                width: '30%',
                fontSize:'1.5rem',
                marginTop: '1.2%',
                '@media (max-width:870px)' : {
                    width: '40%',
                },
                // '@media (max-width:770px)' : {
                //     width: '50%',
                // },
                '& h1':{
                    marginTop: 0
                } 
            },
        },
        carritoBtn:{
            marginTop:'2%',
            '& button':{
                width:'fit-content',
                height:'fit-content',
                fontSize:'1.1rem',
                whiteSpace:'normal',
                backgroundColor:'#e2c7cc',
                border: 'solid 2px #be818d',
                borderRadius:'6px',
                color:'#a16c77',
                fontWeight: '500',
                opacity:'0.7',
                padding:'4px 6px',
                '&:hover':{
                    backgroundColor:'#be818d',
                    color:'white',
                    cursor:'pointer',
                }
            },
            
        }
    })
    
}