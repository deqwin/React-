/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */
'use strict';

var _prodInvariant = require('./reactProdInvariant');

var ReactElement = require('./ReactElement');

var invariant = require('fbjs/lib/invariant');

/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.only
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */

// 获取组件仅有的一个子组件，否则抛出异常，因此，传进来的 children 只能是一个合法的对象，不能是数组
function onlyChild(children) {
  !ReactElement.isValidElement(children) ? 
  // 非法传入
    process.env.NODE_ENV !== 'production' ? 
    // 开发环境下
    invariant(false, 'React.Children.only expected to receive a single React element child.') 
    : 
    // 生产环境下
    _prodInvariant('143') 
    : 
  void 0;
  return children;
}

module.exports = onlyChild;