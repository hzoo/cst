import Expression from '../Expression';

export default class Identifier extends Expression {
    constructor(childNodes) {
        super('Identifier', childNodes);
    }

    _acceptChildren(children) {
        let name = children.passToken('Identifier').value;
        children.assertEnd();
        this._name = name;
    }

    isPattern: boolean = true;
    isAssignable: boolean = true;

    get name() {
        return this._name;
    }
}
