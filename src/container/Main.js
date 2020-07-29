import React from "react";
import { connect } from "react-redux";
import SubmitShopId from "../action/onShopIdSubmit";
import Main from "../components/Main";

const mapStateToProps = state => ({
    nav : state.menu
})

const mapDisatchToProps = dispatch => ({
    onSubmit : shopId => dispatch(SubmitShopId(shopId))
})

export default connect(mapStateToProps,mapDisatchToProps)(Main)