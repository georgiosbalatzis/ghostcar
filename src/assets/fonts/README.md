# Editorial type

These are the same WOFF2 subsets served by f1stories.gr on 20 September 2026:

- IBM Plex Sans 400–600, Latin and Greek: `/assets/fonts/ibm-plex-sans-400-600.woff2` and `/assets/fonts/ibm-plex-sans-400-600-greek.woff2`
- Barlow Condensed 700: `/assets/fonts/barlow-condensed-700.woff2`

IBM Plex Sans is the interface and Greek text face. Barlow Condensed is restricted to the Latin wordmark and opening display headline. Both are distributed under the accompanying SIL Open Font Licenses. Source license copies: the `google/fonts` repository, `ofl/ibmplexsans/OFL.txt` and `ofl/barlowcondensed/OFL.txt`.

Total WOFF2 transfer is approximately 71 kB, replacing the previous external Google Fonts stylesheet and font requests. Vite fingerprints the files; `font-display: swap` keeps text available during loading.
