# os3w Sailwave Effects

> Effects for Sailwave sailing results and scoring software.

## Quick start

Follow the instructions at https://os3w.github.io/os3w-sailwave-effects/

## Result modifying effects

These effects only modify the scores and rankings that are **displayed** in a
browser (providing JavaScript is not disabled), the results stored in the html
file output by Sailwave are unchanged.

Because of this, using these effects for the publication of final results as an
html file is **not recommended** and you should either:

- implement the alternative scoring rules in the Sailwave file (e.g. by deleting
  non-qualifying competitors) and publish the results without the effect; or

- double-check the scoring and ranking applied by the effect in a browser and
  then save as a PDF file for publication.

### Count Only Qualifiers

This is designed to implement the following changes to RRS 2020-2024:

- Rule A2.2 is replaced with the following: "A2.2 A boat that has come to the
  starting area for at least [(20% of the total number of races sailed in the
  series) + 1, rounded down] qualifies for the series and she shall be scored
  for the whole series."

- Rule A5.3 shall apply and is amended after the final comma as follows: "and a
  boat that did not come to the starting area shall be scored points for the
  finishing place one more than the greater of the number of boats qualifying
  for the series and the number that came to the starting area."

### Count Only Qualifying Races

This is designed to implement the following change to RRS 2020-2024 **in
addition to** the changes above for the
[Count Only Qualifiers](#count-only-qualifiers) effect.

- In rule Rule 90.3(a) the words "one boat" are replaced with "one boat that
  qualifies for the series in accordance with Rule A2.2".

**Use with caution** this effect does not currently alter the number of
discards to take account of races that have been excluded as not sailed.

## Development

Download and install.

```console
$ git clone https://github.com/os3w/os3w-sailwave-effects.git
$ npm install
```

Lint and format.

```console
$ npm run lint:fix
```

Unit tests (need work and more coverage).

```console
$ npm run test:unit
```

Build.

```console
$ npm run build
```

Docs.

```console
$ npm run docs
```
