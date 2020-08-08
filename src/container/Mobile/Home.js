import { connect } from "react-redux";
import SubmitShopId from "../../action/onShopIdSubmit";
import Home from "../../components/Mobile/Home";

const mapDispatchToProps = dispatch => ({
    onSubmit : shopId => dispatch(SubmitShopId(shopId))
})

export default connect(null,mapDispatchToProps)(Home)