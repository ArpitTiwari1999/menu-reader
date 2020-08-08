import { connect } from "react-redux";
import Menu from "../../components/Mobile/Menu";

const mapStateToProps =( state )=> ({
    id : state.id
})


export default connect(mapStateToProps,null)(Menu)