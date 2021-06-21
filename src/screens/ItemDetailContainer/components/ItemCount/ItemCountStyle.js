export const ItemCountStyle = theme => {
    return ({
        container: {
            display: 'flex',
            alignItems: 'center',
            border: 'solid 2px  #a7bbc7',
            borderRadius: '11px',
            width: 'fit-content',
            gap:'1.6em',
            padding: '0.5em 1em',
            marginTop: '0',
            height:'auto',
            '& p':{
                margin: '0 1em'
            },
            '& div':{
                display:'flex',
                alignItems:'center',
                '& :hover':{
                    color: '#da7f8f'
                }
            },
        },
        btnAdd: {
            cursor: 'pointer',
            color: '#a7bbc7'
        },
        btnRemove: {
            cursor: 'pointer',
            color: '#a7bbc7'
        }
    
    })}