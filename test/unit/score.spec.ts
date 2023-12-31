// import { expect } from 'chai';

import { readFileSync } from 'node:fs';
import { JSDOM } from 'jsdom';

import { parseResultsHtml } from '../../src/html';
import { checkIsSailedResult, SailedResult } from '../../src/results/result';

import { rescoreQualifiers } from '../../src/effect/scoring';

import { getDiscardIndexes } from '../../src/results/scoring';

const content = readFileSync(
  './examples/results-v2-groups-all-races.html',
  'utf8',
);
const { document } = new JSDOM(content).window;
const results = parseResultsHtml(document);

describe('Rescoring', function () {
  it('should rescore individual races for the handicap group', function () {
    const group = results.groups[3];
    expect(group.id).toBe('handicap');

    const result = checkIsSailedResult(
      group.competitors[0].results[2],
    ) as SailedResult;
    expect(result.score).toBe(7);

    rescoreQualifiers(group);
    expect(result.score).toBe(5);
  });

  it('should rescore individual races for the all-in group', function () {
    const group = results.groups[0];
    expect(group.id).toBe('all_in_handicap');

    const result = checkIsSailedResult(
      group.competitors[0].results[0],
    ) as SailedResult;
    expect(result.score).toBe(29);

    rescoreQualifiers(group);
    expect(result.score).toBe(16);
  });

  describe('Calculating discards', function () {
    it('should calculate discards correctly', function () {
      const scores = [16, 1, 1, 5, 2, 1, 1, 8, 5, 1];
      const discards = getDiscardIndexes(scores, 4);
      expect(discards).toEqual([0, 7, 3, 8]);
    });
  });
});
