/**
 * @author Guoxing.Han(hancoson#163.com)
 * @time 2017/1/3.
 */

import {combineReducers} from 'redux' // 利用combineReducers 合并reducers
import {routerReducer} from 'react-router-redux' // 将routerReducer一起合并管理
import itemsReducer from './items'
import timeReducer from './time'

export default combineReducers({
  itemsReducer,
  timeReducer,
  routing: routerReducer
})