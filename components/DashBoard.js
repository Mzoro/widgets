
import React from 'react';
import Widget from './Widget';

class DashBoard extends React.Component {
  render() {
    const widgets = this.props.widgets
    console.log(widgets)
    console.log(this.props.activeWidgetId)
    return (
      <div className='col-md-2 col-md-offset-1'>
        {widgets.map((widget,i) => <Widget {...this.props} key={i} i={i} widget={widget} />)}
      </div>
    )
  }
}

export default DashBoard;