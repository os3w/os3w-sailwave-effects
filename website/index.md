# os3w Sailwave Effects

> Effects for [Sailwave](https://www.sailwave.com/) sailing results and scoring
> software including alternative calulation of series results.

## Getting started

1. Download the file for the effect(s) you want:

   - <a href="./dist/CountOnlyQualifiers.js" download>CountOnlyQualifiers.js</a>

   - <a href="./dist/CountOnlyQualifyingRaces.js" download>CountOnlyQualifyingRaces.js</a>

2. Copy it to the Sailwave effects folder. You can open this up within Sailwave
   by choosing \
   Setup → Global options → Folders → My script files → View folder content.

3. Add the effect when publishing from Sailwave by choosing the Effects button
   from the final screen before publication where the destination and file name
   are selected.

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
[Count Only Qualifiers](#md:count-only-qualifiers) effect.

- In rule Rule 90.3(a) the words "one boat" are replaced with "one boat that
  qualifies for the series in accordance with Rule A2.2".

**Use with caution** this effect does not currently alter the number of
discards to take account of races that have been excluded as not sailed.
