import { connect } from "react-redux";
import showQRMenu from "../action/onQRMenu";
import QRMenu from "../components/QRMenu";

const mapStateToProps =( state, ownProps )=>({
    id : ownProps.match.params.id
})

const mapDispatchToProps = dispatch => ({
    showQRMenu : (id) => dispatch(showQRMenu(id))
});

export default connect(mapStateToProps,mapDispatchToProps)(QRMenu)