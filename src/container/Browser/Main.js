import { connect } from "react-redux";
import Main from "../../components/Browser/Main";

const mapStateToProps = state => ({
    nav : state.nav
})

export default connect(mapStateToProps,null)(Main)