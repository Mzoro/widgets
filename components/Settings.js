import React, { Component } from 'react'

export default class Settings extends Component {
  constructor() {
    super();
    this.state = {
      inp: {},
      widget: {},
      activeId: null
    }
  }
  addWidget(name, count, color) {
    // event.preventDefault();

    this.props.addWidget(name, count, color)
      // this.refs.widgetForm.reset();
    // this.refs.name.reset();
    if (this.props.activeWidgetId === 100) {
    this.props.updateForm('', '', '' ) 
  } else {
    let activeWidget = this.props.widgets[this.props.activeWidgetId]
    this.props.updateForm(activeWidget.name, activeWidget.count, activeWidget.color ) 
  }
  }
  changeWidget(i, name, count, color) {

    this.props.changeWidget(i, name, count, color)
  }
  handleChange(event) {
    this.props.updateForm(this.refs.name.value, this.refs.count.value, this.refs.color.value )
    // this.state.widget.name = event.target.value
    // this.setState({ widget : this.state.widget })
  }
  // changeCount(event) {
  //  this.props.updateForm(this.props.value.name, event.target.value, this.props.value.color)
  //   // this.state.widget.count = event.target.value
  //   // this.setState({ widget : this.state.widget })
  // }
  // changeColor(event) {
  //   this.props.updateForm(this.props.value.name, this.props.value.count, event.target.value)
  //   // this.state.widget.color = event.target.value
  //   // this.setState({ widget : this.state.widget })
  // }
  // handleChange(event) {

  //   this.setState({value: event.target.value});
  // }
  // componentDidMount() {
  //   this.state.activeId = this.props.activeWidgetId
  //   this.state.widget = this.props.activeWidgetId == 100 ? {} : this.props.widgets[this.props.activeWidgetId]
  //   this.setState({ widget : this.state.widget, activeId : this.state.activeId })
  // }
  // componentWillReceiveProps(nextProps) {iiiiiiiiiiii

  //   this.state.widget = nextProps.activeWidgetId == 100 ? {} : this.props.widgets[nextProps.activeWidgetId]
  //   this.setState({ widget : this.state.widget, activeId : this.state.activeId })

  // }
  render() {
    const widget = (this.props.activeWidgetId == 100 ? {} : this.props.widgets[this.props.activeWidgetId])
    // const { fetching, isValid, isLogged } = this.props
    // const inputStyle = (isValid ? {} : {border: '1px solid red'} );
    // const buttonSymbols = (fetching ?  
    //                         <span className="glyphicon glyphicon-cog" aria-hidden="true"></span> : 
    //                         <span>Login &rarr;</span> );
    const inp = this.state.inp
    // this.state.widget = this.props.widgets[this.props.activeWidgetId]
    // this.setState({ widget : this.state.widget })
    console.log(this.props.activeWidgetId)
    console.log(this.props.widgets[this.props.activeWidgetId])
    return (
      <div className='col-md-2'>
          <label for='name'>Name</label>
          <input type="text" value={this.props.value.name} onChange={(e) => this.handleChange(e)} ref='name' required/>
          <br />
          <input type="number" value={this.props.value.count} onChange={(e) => this.handleChange(e)} ref='count'/> 
          <br /> 
          <input type="text" value={this.props.value.color} onChange={(e) => this.handleChange(e)} ref='color'/> 
          <br />
          <button onClick = {this.addWidget.bind(this, this.props.value.name, this.props.value.count, this.props.value.color)}>
            add
          </button>
          <button 
          disabled={(this.props.activeWidgetId === 100)}  
          onClick = {this.changeWidget.bind(this, this.props.activeWidgetId, this.props.value.name, this.props.value.count, this.props.value.color)}
                >
            save
          </button>
      </div>  
    );
  }
}