import { connect } from "react-redux";
import Menu from "../../components/Mobile/Menu";
import updateMenu from "../../action/updateMenu";

const mapStateToProps =( state )=> ({
    id : state.id,
    Menu : state.menu
})

const mapDisatchToProps= (dispatch)=> ({
    updateMenu : menu => dispatch(updateMenu(menu))
})


export default connect(mapStateToProps,mapDisatchToProps)(Menu)