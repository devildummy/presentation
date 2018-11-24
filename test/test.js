/* global it, describe */
import assert from 'assert';
import videosOnPageCounter from '../js/videosOnPage';

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
