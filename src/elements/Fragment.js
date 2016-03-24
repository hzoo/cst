/* @flow */

import Element from './Element';

export default class Fragment extends Element {
    isFragment: boolean = true;

    constructor(children: Array<any>) {
        super('Fragment', children);
    }
}
