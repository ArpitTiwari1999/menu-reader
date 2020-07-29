import { connect } from "react-redux";
import showBody from "../action/showBody";
import Nav from "../components/Nav";

const mapDispatchToProps = dispatch => ({
    onNavChange : (text) => dispatch(showBody(text))
});

export default connect(null,mapDispatchToProps)(Nav)