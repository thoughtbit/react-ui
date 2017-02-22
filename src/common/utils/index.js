import { requireCondition } from './assert'
import * as ReactUtils from './react'
import * as Errors from './errors'

export { requireCondition, ReactUtils, Errors }

export function createPropType(validate) {
  // Chainable isRequired
  function checkType(isRequired, props, propName, componentName) {
    componentName = componentName || '<<anonymous>>'
    if (props[propName] == null) {
      if (isRequired) {
        return new Error(`Required \`${propName}\` was not specified in \`${componentName}\`.`)
      }
      return null
    } else {
      return validate(props, propName, componentName)
    }
  }

  let chainedCheckType = checkType.bind(null, false)
  chainedCheckType.isRequired = checkType.bind(null, true)

  return chainedCheckType
}

export { IDGenerator } from './IDGenerator'
export { default as DateUtils } from './date'
export { Browser } from './browser'
