/* @flow */

import Node from './Node';

/**
 * Base class for all statement nodes.
 *
 * @name Statement
 * @class
 * @abstract
 */
export default class Statement extends Node {
    isStatement: boolean = true;
}
