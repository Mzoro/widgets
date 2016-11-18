import React from 'react';

class Widget extends React.Component {

  render() {

    const { widget, i } = this.props;
        const border = (this.props.activeWidgetId==i ? '4px solid black' : '');

    return (

        <div style={{ background: widget.color, border: border}} key={i} onClick={this.props.selected.bind(null,i)}>
          <span>   {widget.name}</span>
          <br />
          <span>{widget.count}</span>
        </div>  
    )
  }
}

export default Widget;

// onClick={this.props.select.bind(null,i)