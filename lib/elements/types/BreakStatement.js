import Statement from '../Statement';

export default class BreakStatement extends Statement {

    // TODO: Requires a loop.
    // TODO: In case of a label, requires label.

    constructor(childNodes) {
        super('BreakStatement', childNodes);
    }

    _acceptChildren(children) {
        children.passToken('Keyword', 'break');

        let label = null;
        if (!children.isEnd) {
            children.skipSameLineNonCode();
            if (children.isToken('Punctuator', ';')) {
                children.passToken();
            } else {
                label = children.passNode('Identifier');
                children.skipNonCode();
                children.skipSemicolon();
            }
        }

        children.assertEnd();

        this._label = label;
    }

    get label() {
        return this._label;
    }
}
