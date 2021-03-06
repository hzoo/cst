import {parseAndGetStatement} from '../../../utils';
import {expect} from 'chai';

describe('SwitchStatement', () => {
    it('should return correct type', () => {
        expect(parseAndGetStatement('switch(0){}').type).to.equal('SwitchStatement');
    });

    it('should accept expression in parentheses', () => {
        var statement = parseAndGetStatement('switch ( ( true ) ) {};');
        expect(statement.discriminant.type).to.equal('Literal');
        expect(statement.discriminant.value).to.equal(true);
        expect(statement.cases).to.deep.equal([]);
    });

    it('should accept single case', () => {
        var statement = parseAndGetStatement('switch ( true ) { case 1 : x; break; }');
        expect(statement.discriminant.type).to.equal('Literal');
        expect(statement.discriminant.value).to.equal(true);
        var case1 = statement.cases[0];
        expect(case1.test.type).to.equal('Literal');
        expect(case1.test.value).to.equal(1);
        expect(case1.consequent[0].type).to.equal('ExpressionStatement');
        expect(case1.consequent[0].expression.type).to.equal('Identifier');
        expect(case1.consequent[0].expression.name).to.equal('x');
        expect(case1.consequent[1].type).to.equal('BreakStatement');
    });

    it('should accept single default', () => {
        var statement = parseAndGetStatement('switch ( true ) { default: x; break; }');
        expect(statement.discriminant.type).to.equal('Literal');
        expect(statement.discriminant.value).to.equal(true);
        var case1 = statement.cases[0];
        expect(case1.test).to.equal(null);
        expect(case1.consequent[0].type).to.equal('ExpressionStatement');
        expect(case1.consequent[0].expression.type).to.equal('Identifier');
        expect(case1.consequent[0].expression.name).to.equal('x');
        expect(case1.consequent[1].type).to.equal('BreakStatement');
    });

    it('should accept case with parentheses', () => {
        var statement = parseAndGetStatement('switch ( true ) { case ( 1 ) : x; break; }');
        expect(statement.discriminant.type).to.equal('Literal');
        expect(statement.discriminant.value).to.equal(true);
        var case1 = statement.cases[0];
        expect(case1.test.type).to.equal('Literal');
        expect(case1.test.value).to.equal(1);
        expect(case1.consequent[0].type).to.equal('ExpressionStatement');
        expect(case1.consequent[0].expression.type).to.equal('Identifier');
        expect(case1.consequent[0].expression.name).to.equal('x');
        expect(case1.consequent[1].type).to.equal('BreakStatement');
    });

    it('should accept single default', () => {
        var statement = parseAndGetStatement('switch ( true ) { case 1 : x; break; }');
        expect(statement.discriminant.type).to.equal('Literal');
        expect(statement.discriminant.value).to.equal(true);
        var case1 = statement.cases[0];
        expect(case1.test.type).to.equal('Literal');
        expect(case1.test.value).to.equal(1);
        expect(case1.consequent[0].type).to.equal('ExpressionStatement');
        expect(case1.consequent[0].expression.type).to.equal('Identifier');
        expect(case1.consequent[0].expression.name).to.equal('x');
        expect(case1.consequent[1].type).to.equal('BreakStatement');
    });

    it('should accept multiple cases', () => {
        var statement = parseAndGetStatement('switch ( true ) { case 1 : x; break; case 2 : break; }');
        expect(statement.discriminant.type).to.equal('Literal');
        expect(statement.discriminant.value).to.equal(true);
        var case1 = statement.cases[0];
        expect(case1.test.type).to.equal('Literal');
        expect(case1.test.value).to.equal(1);
        expect(case1.consequent[0].type).to.equal('ExpressionStatement');
        expect(case1.consequent[0].expression.type).to.equal('Identifier');
        expect(case1.consequent[0].expression.name).to.equal('x');
        expect(case1.consequent[1].type).to.equal('BreakStatement');
        var case2 = statement.cases[1];
        expect(case2.test.type).to.equal('Literal');
        expect(case2.test.value).to.equal(2);
        expect(case2.consequent[0].type).to.equal('BreakStatement');
    });

    it('should accept multiple cases with default', () => {
        var statement = parseAndGetStatement('switch ( true ) { case 1 : x; break; case 2 : break; default: ; }');
        expect(statement.discriminant.type).to.equal('Literal');
        expect(statement.discriminant.value).to.equal(true);
        var case1 = statement.cases[0];
        expect(case1.test.type).to.equal('Literal');
        expect(case1.test.value).to.equal(1);
        expect(case1.consequent[0].type).to.equal('ExpressionStatement');
        expect(case1.consequent[0].expression.type).to.equal('Identifier');
        expect(case1.consequent[0].expression.name).to.equal('x');
        expect(case1.consequent[1].type).to.equal('BreakStatement');
        var case2 = statement.cases[1];
        expect(case2.test.type).to.equal('Literal');
        expect(case2.test.value).to.equal(2);
        expect(case2.consequent[0].type).to.equal('BreakStatement');
        var case3 = statement.cases[2];
        expect(case3.test).to.equal(null);
        expect(case3.consequent[0].type).to.equal('EmptyStatement');
    });
});
