/* global it, describe */
import assert from 'assert';
import jsdom from 'jsdom';
import videosOnPageCounter from '../js/videosOnPage';
import Element from '../js/element';

const { JSDOM } = jsdom;
const { document } = (new JSDOM('!<DOCTYPE HTML><div>test</div>')).window;
global.document = document;
global.window = document.defaultView;
const elem = new Element();
document.body.appendChild(elem.getElem());
const randomBetween = (max, min) => min + Math.random() * (max + 1 - min);
describe('Videos on page', () => {
  it('less then 768', () => {
    const answer = videosOnPageCounter(randomBetween(320, 768));
    assert.deepEqual(answer, 1);
  });
  it('less then 1300, bigger than 768', () => {
    const answer = videosOnPageCounter(randomBetween(768, 1300));
    assert.deepEqual(answer, 2);
  });
  it('bigger then 1300', () => {
    const answer = videosOnPageCounter(randomBetween(1300, 2600));
    assert.deepEqual(answer, 4);
  });
});
describe('Video element structure', () => {
  it('has 4 child nodes', () => {
    const answer = document.body.querySelectorAll('div')[1].children.length;
    assert.deepEqual(answer, 5);
  });
});
