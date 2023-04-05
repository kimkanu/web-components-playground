# Web Components + Twind + View Transitions API in MPA

Chrome's current (111.0.5563.146) implementation of View Transitions API is buggy as `::view-transition-new(hello)` does not appear so that the waving emojis are not transiting into each other.

```
pnpm build

vite v4.2.0 building for production...
✓ 13 modules transformed.
dist/index.html                          2.45 kB
dist/subdir/index.html                   2.45 kB
dist/decorators/twind.js                 0.42 kB │ gzip: 0.30 kB
dist/twind.config.js                     0.43 kB │ gzip: 0.25 kB
dist/components/waving-emoji.js          0.61 kB │ gzip: 0.41 kB
dist/_virtual/modulepreload-polyfill.js  0.71 kB │ gzip: 0.40 kB
dist/components/simple-greeting.js       0.78 kB │ gzip: 0.49 kB
✓ built in 194ms
```
