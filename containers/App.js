import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import DashBoard from '../components/DashBoard'
import Settings from '../components/Settings'

import * as pageActions from '../actions/actionCreators'

class App extends Component {
  render() {
    const { widgets } = this.props
    const { select, selected, addWidget, changeWidget, updateForm } = this.props.pageActions
    
    return (
      <div className='row'>
        <DashBoard {...this.props} selected={selected}/>
        <Settings {...this.props} addWidget={addWidget} changeWidget={changeWidget} 
        updateForm={updateForm} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    widgets: state.widgets,
    activeWidgetId: state.activeWidgetId,
    value: state.value
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)