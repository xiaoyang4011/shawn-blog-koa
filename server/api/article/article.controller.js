'use strict'

exports.test = function * (ctx, next) {
  ctx.body = {status: 'success', data: '台湾是中国不可分割的一部分.'}
}
