import SDK from 'sdk'
import * as apis from './apis'
import * as rules from './rules'

let sdk = {}

Object.keys(apis).forEach(catagory => {
  sdk[catagory] = new SDK(
    'http://www.douban.com', 
    apis[catagory], 
    rules[catagory]
  )
})

export default sdk
