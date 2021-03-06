import Statement from '../Statement';

export default class ReturnStatement extends Statement {

    // TODO: Requires a function.

    constructor(childNodes) {
        super('ReturnStatement', childNodes);
    }

    _acceptChildren(children) {
        children.passToken('Keyword', 'return');

        let argument = null;
        if (!children.isEnd) {
            children.skipSameLineNonCode();
            if (children.isToken('Punctuator', ';')) {
                children.passToken();
            } else {
                argument = children.passExpression();
                children.skipNonCode();
                children.skipSemicolon();
            }
        }

        children.assertEnd();

        this._argument = argument;
    }

    get argument() {
        return this._argument;
    }
}
