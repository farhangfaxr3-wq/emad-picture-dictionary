# Third-party lexical data

The generated vocabulary batches `batch009.ts` through `batch027.ts` incorporate
definitions, examples, parts of speech, and selected pronunciation records from
**Open English WordNet 2025**, produced by the Open English WordNet community.
Open English WordNet is derived from Princeton WordNet and is licensed under
Creative Commons Attribution 4.0 together with the underlying WordNet license.

- Project: https://en-word.net/
- Release: https://en-word.net/downloads
- License: https://github.com/globalwordnet/english-wordnet/blob/main/LICENSE.md

The selection order is based on **Princeton Core WordNet**, a ranking of 5,000
salient word senses derived from corpus frequencies.

- Project: https://wordnet.princeton.edu/
- Core list: https://wordnetcode.princeton.edu/standoff-files/core-wordnet.txt

Changes made for this application:

- selected distinct learner-facing headwords not already in the catalogue;
- normalized underscores and spacing;
- added sentence-final punctuation and capitalization where needed;
- mapped lexical domains to the site's existing learning topics;
- assigned low-confidence, provisional CEFR bands for educator review;
- used the site's speech engine when a source pronunciation is unavailable;
- marked all new visual records as pending rather than attaching an unrelated image.

No Open English WordNet entry is added directly to the scored Level Test. New
vocabulary remains subject to educator review through the existing review workflow.
