# Repository cleanup report

## Baseline

Audited on 2026-09-21 on `main`, starting at `1507d19`. The only initial worktree change was generated `dist/index.html` (hashed asset references). Its complete original `dist/` directory and patch were saved outside the repository before building at `/var/folders/93/72vmg86164ggkvnttj9f7kp40000gp/T/ghostcar-cleanup-6fj6jahh/`. This preserves the user's original generated output separately from verification builds.

Environment: Node v26.9.0, npm 11.19.1, macOS; Chromium execution available. CI remains configured for Node 20.

| Command | Baseline result |
| --- | --- |
| `npm ci` | Passed; 211 packages installed |
| `npm run lint` | Passed |
| `npm run format:check` | Failed on six existing application files |
| `npm test` | Passed, 26 tests |
| `npm run build` | Passed; 23 files, 2,708,693 bytes in freshly generated `dist/` |
| `npm run test:e2e` | 11 passed, one failed; same result on repeat |

Formatting failures: `src/components/HeaderToolbar.jsx`, `ComparisonSelectors.jsx`, `ReplayStage.jsx`, `TelChart.jsx`, and `src/modals/KeysModal.jsx`, `PresetsModal.jsx`. No application formatting was changed.

The browser failure was the 3D round-trip test collecting HTTP 504 `Outdated Optimize Dep` errors. Playwright's default configuration reused a pre-existing Vite process on port 5173. That process was left untouched; a fresh server on port 5174 passed all tests after cleanup.

Existing warnings: npm reported nine vulnerabilities (one low, one moderate, seven high) and install-script notices for esbuild, two platform versions of fsevents, and sharp. Playwright emitted DEP0205 and NO_COLOR/FORCE_COLOR warnings. The model prebuild printed prune diagnostics and `Kept existing f1car.glb: 117.2 kB <= 118.3 kB`. No dependency upgrades or audit fixes were attempted.

## Removed from source control

All removals below were classified **SAFE TO REMOVE** after checking tracked files, references in application code, scripts, tests, configuration, workflow and documentation.

| Item | Classification | Evidence and action |
| --- | --- | --- |
| `node_modules/` (3,409 tracked entries) | D: generated artifact | Reproducible from the lockfile with `npm ci`; scripts consume installed packages, not committed copies. Untracked the complete directory, including bin links and the old gh-pages cache gitlink. Locally installed dependencies remain available and ignored. |
| `dist/index.html` (only tracked dist file) | D: generated artifact | Workflow builds from source and uploads `dist/`; Vite regenerates the full directory. Original dirty output backed up, then untracked; final generated output remains local and ignored. |
| `.idea/.gitignore`, `.idea/ghostcar.iml`, `.idea/modules.xml`, `.idea/vcs.xml` | E: local development artifact | Generic WebStorm module/VCS wiring and local exclusions; no shared code styles or team inspection settings. Untracked these four files, preserving local IDE state. |
| `laststeps.txt` | F: historical/scratch file | Long incremental refactor handoff with completed instructions and stale deployment prompts. Architecture is already documented; durable cancellation, restore, caching and testing guidance consolidated into `AGENTS.md`. June release evidence remains in `docs/`. |
| `nextsteps.txt` | F: historical/scratch file | General AI writing/operating prompt, no project tasks or unique technical knowledge. Removed. |
| `patch-remove-map-smooth-cars.sh` | F: obsolete one-off patch | No caller or active documentation instructions. Targets the former monolithic renderer in `F1PhantomCars.jsx`; LiveMap/showMap are absent and rendering is now in `src/scene/`. Not all proposed numeric substitutions match today's behavior, so this is a superseded patch, not proof all transformations were applied. Removed without running it. |

Also removed the obsolete `deploy` npm script and `gh-pages` devDependency. Removed unused `@eslint/js`: there are no imports or dynamic/config/script uses, and `eslint.config.js` explicitly uses only `eslint-plugin-react-hooks` and `globals`. A clean install and lint pass verify removal. npm pruned 44 lockfile package entries; all retained entries are exactly unchanged, including versions, integrity and resolved URLs.

The root visual report and `artifacts/visual-rework/` were **moved**, not discarded: `docs/visual-rework/README.md` and `docs/visual-rework/screenshots/`. All 29 screenshot files are byte-identical. Historical screenshot paths were updated in the report.

Two ignored, untracked OS files, `src/.DS_Store` and `src/hooks/.DS_Store`, were deleted locally. No tracked OS files were found outside installed dependencies.

## Preserved deliberately

| Item | Classification | Reason |
| --- | --- | --- |
| `public/f1car.glb` (120,044 bytes) | A: required source asset; MUST KEEP | Runtime URL uses Vite `BASE_URL` in `src/scene/buildCars.js`; prebuild optimizer also requires it. |
| `public/logo.png` (1,555,500 bytes) | A: required source asset; MUST KEEP | Header/footer receive it from `F1PhantomCars.jsx`; HTML uses it for icons and social metadata. Large, but changing its size/encoding is outside hygiene scope. |
| `public/f1-stories-logo.svg` (1,155 bytes) | C: documented asset; NEEDS REVIEW before removal | README documents it; no current runtime consumer found. A distinct SVG, not a byte duplicate of the PNG. Kept because lack of static references alone is insufficient. |
| `scripts/optimize-f1car.mjs` | B: required tooling; MUST KEEP | Called by `prebuild`; glTF-transform packages and meshoptimizer are used here. |
| All remaining dependencies | A/B: required source/tooling | React/ReactDOM and Three.js imports, Vite/plugin configuration, Playwright tests, ESLint/hooks/globals, Prettier commands, and model optimization imports account for every remaining direct dependency. |
| `src/assets/fonts/` and licenses | A: required assets/legal documentation; MUST KEEP | Locally loaded font subsets and accompanying licenses. |
| Visual report and 29 screenshots (8,882,472 image bytes) | C: useful documentation; retain pending archival review | Documented design references and QA evidence, including intermediate comparisons. Not Playwright golden snapshots or build inputs; now grouped under `docs/visual-rework/`. No undocumented deletion of evidence. |
| June release inventory/finalization | C: useful historical documentation | Preserve bug-fix and release evidence; clearly marked historical, with current deployment links. |
| `.claude/settings.local.json` and local IDE state | E: local artifacts | User-local settings retained on disk and ignored explicitly. |

`src/`, `public/`, tests, app HTML, Vite configuration, model tooling and deployment workflow have no content changes. `test-results/` remains generated/ignored. No other project backup, patch, temporary JSON, stale snapshot, duplicate model, or debug-log candidate was found outside generated/local directories. All three public assets have distinct hashes.

## Generated files

`.gitignore` now explicitly covers installed dependencies, root build output, WebStorm state, local Claude settings, existing `*.local` files, macOS/Windows metadata, coverage, Playwright reports/results, npm debug logs and the model optimizer's specific temporary file. It does not blanket-ignore JSON, images, patches or documentation evidence.

`package-lock.json`, public assets, font licenses and build tooling remain committed source inputs. The pre-existing `.prettierignore` remains unchanged.

## Documentation

- Added concise `AGENTS.md`: commands, architecture, deployment, generated-file rules, and behavior invariants recovered from scratch history.
- Updated README installation to `npm ci`, Node requirements to match existing tooling, production deployment, logo inventory and developer-guide link. Replaced machine-specific absolute file links with repository-relative links; preserved the surrounding Greek documentation.
- Updated the deployment checklist to the Actions path, reproducible install and ignored build output.
- Added historical-context banners to June release documents rather than rewriting old deployment evidence as current facts.
- Moved the visual report/screenshots under `docs/visual-rework/` and updated paths.
- Added this report. No source-code reorganization was performed.

## Deployment

**Authoritative source branch: `main`. Authoritative production method: `.github/workflows/deploy.yml`, GitHub Pages Actions.**

```text
push to main
  → npm ci
  → npm run build (including model prebuild)
  → dist/
  → actions/configure-pages
  → actions/upload-pages-artifact
  → actions/deploy-pages
```

The workflow and Vite `/ghostcar/` base are unchanged. The existing `gh-pages` branch appears legacy: the June historical record and local remote-tracking ref identify `82cb7c7`, while the current workflow never checks it out. Removed the obsolete npm deployment script/dependency because there is no evidence of an intentionally supported second current production path. No branch was deleted, merged, rewritten, pushed or otherwise updated. Remote state was not fetched or changed; no deployment was performed.

## Before / After

- Before: 3,547 tracked entries, 69,263,509 bytes of Git blobs at HEAD (excluding gitlink content).
- After: 132 intended tracked entries, approximately 11.3 MB of source/assets/documentation. The visual evidence is retained, not counted as deleted content.
- 3,417 obsolete/generated tracked entries removed; two new documents added; 30 documentation files relocated.
- Fresh installed package count: 211 → 167. No retained dependency versions changed.
- Fresh production output: 23 files and 2,708,693 bytes both before and after, with identical SHA-256 hashes for every file.

These figures describe the source tree, not `.git` history or the total local working directory. Historical blobs and branches are intentionally untouched.

## Verification

After deleting local `dist/`, ran:

| Exact command | Result |
| --- | --- |
| `npm ci` | Passed, 167 packages installed; same nine vulnerability findings |
| `npm run lint` | Passed |
| `npm run format:check` | Same six baseline formatting failures; no additional files |
| `npm test` | Passed, 26 tests |
| `npm run build` | Passed; complete dist regenerated; model unchanged |
| `npm run test:e2e` | Same baseline failure against pre-existing port 5173 server, 11/12 passed |
| `npm run test:e2e -- --config /tmp/ghostcar-cleanup-playwright.config.mjs` | Passed, 12/12 Chromium tests on a fresh isolated port 5174 server |
| `node node_modules/vite/bin/vite.js preview --host 127.0.0.1 --port 4174 --strictPort` | Preview started; all 23 `/ghostcar/` file URLs returned HTTP 200 and content hashes matching local output; verification process stopped afterward |
| `git diff --check` and `git diff --cached --check` | Passed |

The temporary Playwright config imports the unchanged repository config and overrides only absolute paths, server port, strict-port startup and server reuse. No test assertions were modified. Shell, responsive replay, share/embed, invalid-link fallback and 3D/2D round-trip tests all pass in that isolated run.

Additional Python checks compared the complete build hash manifests, public asset presence, screenshot bytes against HEAD, and all retained lockfile entries. Final diff review confirmed no changes in `src/`, `public/`, `index.html`, Vite, `.github/`, `scripts/`, `test/` or `e2e/`. Logs are saved outside source control as `/tmp/ghostcar-baseline-*.log` and `/tmp/ghostcar-final-*.log`.

## Remaining cleanup candidates

- Decide separately whether to delete the legacy `gh-pages` branch. It has been preserved as requested.
- Review whether the documented SVG logo and historical visual evidence should be archived or retired. They remain because their documentation value is clear and deletion is not necessary to the working build.
- Fix the six existing formatting failures in a separate source-formatting change if desired.
- Review the nine existing npm vulnerability findings separately; dependency upgrades were explicitly out of scope.
- Restart the user's old Vite process when convenient to clear its stale optimizer responses. This cleanup did not stop it or change the test configuration.
- Physical-device/live-API/manual release checks remain governed by the deployment checklist. This hygiene pass verifies deterministic Chromium behavior and identical production output, not a new production deployment.
