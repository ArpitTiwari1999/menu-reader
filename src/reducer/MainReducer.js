const initialState= {
    menu: "Home"
}

export default function mainReducer(state = initialState,action){
    switch(action.type){
        case "Show_Body" :
            return Object.assign({},state,{
                menu : action.payload
            })
        default :
            return state;
    }
}