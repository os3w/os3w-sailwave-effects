// import { expect } from 'chai';

import { readFileSync } from 'node:fs';
import { JSDOM } from 'jsdom';

import { parseResultsHtml } from '../../src/html';
import {
  checkIsSailedResult,
  SailedResult,
  cameToStartingArea,
} from '../../src/results/result';

const content = readFileSync(
  './examples/results-v2-groups-all-races.html',
  'utf8',
);
const { document } = new JSDOM(content).window;
const results = parseResultsHtml(document);

describe('Results file functions', function () {
  describe('Group results parsing', function () {
    it('should calculate number qualifed in a group', function () {
      const handicapGroup = results.groups[3];
      expect(handicapGroup.id).toBe('handicap');
      expect(handicapGroup.qualifiedCount).toBe(4);
      const allInGroup = results.groups[0];
      expect(allInGroup.id).toBe('all_in_handicap');
      expect(allInGroup.qualifiedCount).toBe(15);
    });
  });

  describe('Single result parsing', function () {
    it('should parse an ordinary result', function () {
      const group = results.groups[3];
      expect(group.id).toBe('handicap');

      const result = checkIsSailedResult(
        group.competitors[0].results[3],
      ) as SailedResult;
      expect(cameToStartingArea(result.code)).toBe(true);
      expect(result.score).toBe(1);
      expect(result.code).toBe(null);
      expect(result.isDiscard).toBe(false);
    });

    it('should parse an OOD result', function () {
      const group = results.groups[2];
      expect(group.id).toBe('enterprise');

      const result = group.competitors[0].results[0] as SailedResult;
      expect(cameToStartingArea(result.code)).toBe(false);
      expect(result.score).toBe(1.3);
      expect(result.code).toBe('OOD');
      expect(result.isDiscard).toBe(false);
    });

    it('should parse a DNF', function () {
      const group = results.groups[0];
      expect(group.id).toBe('all_in_handicap');

      const result = group.competitors[4].results[7] as SailedResult;
      expect(cameToStartingArea(result.code)).toBe(true);
      expect(result.score).toBe(12);
      expect(result.code).toBe('DNF');
      expect(result.isDiscard).toBe(false);
    });

    it('should parse a discarded DNF', function () {
      const group = results.groups[3];
      expect(group.id).toBe('handicap');

      const result = group.competitors[1].results[7] as SailedResult;
      expect(cameToStartingArea(result.code)).toBe(true);
      expect(result.score).toBe(4);
      expect(result.code).toBe('DNF');
      expect(result.isDiscard).toBe(true);
    });
  });
});
