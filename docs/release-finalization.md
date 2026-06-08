# Release Finalization Decision

Date: 2026-06-08

## Decision

The release candidate is commit-ready for source control. The automated verification gate passed on 2026-06-08 in this workspace.

Deployment should remain gated until the manual smoke checks in `docs/deployment-checklist.md` are either completed by a human/operator or explicitly waived for an automated-only release.

## Commit Recommendation

Use the grouped inventory in `docs/release-change-inventory.md` and commit the full Phase 7 hardening set together.

Suggested commit message:

```text
Harden Ghost Car sharing and release readiness
```

## Automated Gate

Status: passed on 2026-06-08.

Required commands:

```bash
npm run format
npm run lint
npm run format:check
npm test
npm run build
npm run test:e2e
npm audit --audit-level=moderate
```

Expected non-blocking warnings:

- `npm run build` may print `Kept existing f1car.glb: 117.2 kB <= 118.3 kB`.
- `npm run test:e2e` may print Node `DEP0205` and `NO_COLOR` / `FORCE_COLOR` warnings.

## Manual Smoke Status

Manual smoke evidence is not recorded in this pass.

Before deploy, record or explicitly waive:

- Desktop smoke: production preview shell, selector flow, replay load, theme readability, modal close behavior.
- Mobile smoke: narrow viewport, no horizontal overflow, tab navigation, 2D touch scrub behavior.
- Embed smoke: `?embed=1` shell, valid shared URL with `embed=1`, iframe sizing.
- Share URL restore smoke: valid shared URL restores encoded state; invalid/stale encoded values show clear Greek messages.

## Deploy Gate

Do not run `npm run deploy` until:

1. The automated gate has passed on the release candidate.
2. Manual smoke evidence is recorded or consciously waived.
3. No release-blocking console errors, unreadable UI states, broken navigation, or silent shared-link restore failures are present.
