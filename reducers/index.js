import { combineReducers } from 'redux'
import widgets from './widgets'
import value from './value'
import activeWidgetId from './activeWidgetId'

export default combineReducers({
  widgets,
  activeWidgetId,
  value
})