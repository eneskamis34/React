import React, { Component } from 'react'
import {connect} from "react-redux"
import {decreaseByTwoCounter} from "../redux/actions/counterActions"
import { bindActionCreators } from 'redux'


 class DecreaseByTwoCounter extends Component {
    render() {
        return (
            <div>
                <button onClick={e=>{
                    this.props.dispatch(decreaseByTwoCounter());
                }}>  2 Azalt </button>
            </div>
        )
    }
}


function mapDispatchToProps(dispatch){
    return {action:bindActionCreators(decreaseByTwoCounter,dispatch)}
}

export default connect(mapDispatchToProps)(DecreaseByTwoCounter);