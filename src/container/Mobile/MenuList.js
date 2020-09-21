import { connect } from "react-redux";
import MenuList from "../../components/Mobile/MenuList";

const mapStateToProps =( state, ownProps )=> ({
    Menu : state.menu,
    FullMenu : ownProps.menu
})


export default connect(mapStateToProps,null)(MenuList)    