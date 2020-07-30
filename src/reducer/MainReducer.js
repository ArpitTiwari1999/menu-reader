const initialState= {
    nav: "Home",
    id : 0
}

export default function mainReducer(state = initialState,action){
    switch(action.type){
        case "Show_Body" :
            return Object.assign({},state,{
                ...state,
                nav : action.payload
            })
        case "onShopIdSubmit" :
            return Object.assign({},state,{
                ...state,
                nav : "Menu",
                id : action.id
            })
        default :
            return state;
    }
}