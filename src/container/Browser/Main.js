import { connect } from "react-redux";
import SubmitShopId from "../../action/onShopIdSubmit";
import Main from "../../components/Browser/Main";

const mapStateToProps = state => ({
    nav : state.nav
})

const mapDisatchToProps = dispatch => ({
    onSubmit : shopId => dispatch(SubmitShopId(shopId))
})

export default connect(mapStateToProps,mapDisatchToProps)(Main)