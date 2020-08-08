import { connect } from "react-redux";
import Menu from "../../components/Browser/Menu";

const mapStateToProps = state => ({
    menu : state.menu,
    id : state.id,
    name : state.shopName
})
export default connect(mapStateToProps,null)(Menu)