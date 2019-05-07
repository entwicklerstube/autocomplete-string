import { expect } from 'chai';
import autocomplete from './index';

describe('autocomplete-string', () => {
	it('returns an object', () => {
		const res = autocomplete('', []);

		expect(res).to.be.a('object');
		expect(res).to.contain.keys('suggestion', 'suggestionIndex', 'completion');
	});

	it('returns the first matching suggestion with index', () => {
		const { suggestion, suggestionIndex } = autocomplete('foo', [
			'hello',
			'foobar',
			'foobaz'
		]);

		expect(suggestion).to.equal('foobar');
		expect(suggestionIndex).to.equal(1);
	});

	it('returns completion string', () => {
		const { completion } = autocomplete('foo', ['hello', 'foobar', 'foobaz']);

		expect(completion).to.equal('bar');
	});
});
