const initialState= {
    nav: "Home",
    id : -1,
    menu: {}
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
        case "showQRMenu" :
            return Object.assign({},state,{
                ...state,
                id : action.payload,
                nav : "Menu"
            })
        case "updateMenu" :
            return Object.assign({},state,{
                ...state,
                menu : action.payload
            })
        default :
            return state;
    }
}