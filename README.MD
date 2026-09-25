# Ghost Car Lab

Το **Ghost Car Lab** είναι ένα interactive εργαλείο σύγκρισης γύρων Formula 1 από το **F1 Stories**.  
Στόχος του project είναι να μετατρέπει τα ωμά telemetry δεδομένα σε μια εμπειρία που θυμίζει τηλεοπτική ανάλυση, data story και digital product μαζί: δύο ή και περισσότερα μονοθέσια στην ίδια πίστα, ίδιο timeline, ίδια γραμμή αναφοράς, ξεκάθαρο delta και άμεση ανάγνωση της διαφοράς.

Η εφαρμογή είναι φτιαγμένη για:

- γρήγορο lap-to-lap comparison
- storytelling γύρω από iconic μάχες και preset στιγμές
- embed χρήση σε άρθρα ή landing pages
- αξιοπρεπή εμπειρία σε desktop, mobile και low-power συσκευές

Το visual system, η χρωματική λογική και ο συνολικός χαρακτήρας του UI ακολουθούν τη γλώσσα του **f1stories.gr**.

## Τι προσφέρει

- **3D Ghost Car σύγκριση** με πραγματικά location και car telemetry δεδομένα
- **2D low-power replay mode** για συσκευές ή περιβάλλοντα όπου το WebGL δεν είναι ιδανικό
- **Telemetry panel** με speed, throttle, brake, sector progression, speed traps και tire-related ενδείξεις
- **Head-to-head ιστορικό** μεταξύ δύο οδηγών για μια σεζόν
- **Season dashboard** με συνολική εικόνα από qualifying head-to-head γύρους
- **Preset battles** για γρήγορη φόρτωση εμβληματικών στιγμών
- **Shareable URLs** ώστε κάθε comparison να ανοίγει με συγκεκριμένο session, οδηγούς και laps
- **Embed mode** για ενσωμάτωση σε iframe
- **Gallery** αποθηκευμένων συγκρίσεων στο browser
- **Showreel mode** για autoplay preset παρουσιάσεις
- **Light / Dark theme**

## Τι ακριβώς κάνει ο χρήστης

Ο χρήστης επιλέγει:

- σεζόν
- Grand Prix / meeting
- session
- οδηγό 1 και οδηγό 2
- συγκεκριμένο lap για κάθε οδηγό

Μετά το app:

1. ανακτά τα laps και τα stints από το OpenF1
2. βρίσκει τα σωστά timestamps έναρξης και λήξης για κάθε γύρο
3. φορτώνει location + car telemetry streams
4. κανονικοποιεί τη γεωμετρία της πίστας
5. αποδίδει το replay σε 3D ή 2D
6. συγχρονίζει το timeline όλων των οδηγών στο ίδιο progress bar

Το αποτέλεσμα δεν είναι απλώς ένα chart. Είναι ένα synchronized replay layer με data overlays.

## Κοινό και use cases

Το Ghost Car Lab έχει σχεδιαστεί για:

- συντάκτες και δημιουργούς περιεχομένου του F1 Stories
- social/media storytelling γύρω από pole laps, duels και iconic sessions
- άρθρα γνώμης ή ανάλυσης με embed comparisons
- fans που θέλουν να δουν πού κερδίζεται ή χάνεται ο χρόνος
- gamma χρήστες σε κινητό που χρειάζονται ελαφρύτερη αναπαραγωγή

## Βασικά features

### 1. 3D scene replay

Η 3D προβολή δίνει την πιο εντυπωσιακή εμπειρία:

- ghost cars πάνω σε εξομαλυμένη χάραξη πίστας
- διαφορετικά camera modes
- live progress
- color-coded οδηγοί και teams
- overlay delta και sector comparison

Το 3D stage φορτώνεται lazy ώστε να μη βαραίνει άσκοπα το initial load.

### 2. 2D replay fallback

Για mobile, battery saver ή αδύναμα GPUs, υπάρχει **2D SVG replay**:

- χωρίς WebGL κόστος
- με ίδιο timeline
- με live progress dots
- με πρόσβαση στα ίδια telemetry / stats / laps εργαλεία

Η 2D λειτουργία δεν είναι secondary hack. Είναι κανονικό playback mode.

### 3. Telemetry panel

Το δεξί panel ή το mobile tab προβάλει:

- ταχύτητα
- throttle
- brake
- gear / DRS indicators
- elevation summary
- cumulative sector delta
- speed traps
- tire degradation proxy

Ο στόχος είναι γρήγορη ανάγνωση, όχι raw engineering overload.

### 4. Presets

Τα presets δίνουν ένα editorial layer πάνω από τα δεδομένα:

- iconic μάχες
- qualifying laps
- sprint στιγμές
- race highlights

Έτσι ο χρήστης δεν χρειάζεται να χτίσει comparison από το μηδέν για να δει κάτι ενδιαφέρον.

### 5. H2H και Season views

Για δύο οδηγούς μπορείς να ζητήσεις:

- **H2H view**: σε ποια GP βρέθηκε μπροστά ο καθένας
- **Season dashboard**: συνολικό qualifying delta ανά meeting

Αυτές οι προβολές γίνονται incremental, cache-άρονται και ακυρώνονται αν ο χρήστης αλλάξει tab ή setup.

### 6. Share, gallery και embed

Το app υποστηρίζει:

- shareable deep links
- local gallery αποθηκευμένων συγκρίσεων
- social card export
- embed iframe code

Αυτό επιτρέπει χρήση του εργαλείου και ως internal newsroom utility και ως public-facing content component.

## Υποστηριζόμενα χρόνια και sessions

Αυτή τη στιγμή το app εκθέτει άμεσα χρόνια από **2023 έως 2026**, με default το **2025**.

Σημειώσεις:

- το **2026** αντιμετωπίζεται ως early / partial season
- τα presets για το **2026** είναι απενεργοποιημένα μέχρι να υπάρχει σταθερή διαθεσιμότητα δεδομένων
- υποστηρίζονται sessions όπως `Qualifying`, `Race`, `Sprint`, `Sprint Qualifying`, `Sprint Shootout`, `Practice 1`, `Practice 2`, `Practice 3`

Η πραγματική διαθεσιμότητα εξαρτάται πάντα από το **OpenF1 API**.

## Τεχνολογικό stack

- **React 18**
- **Vite**
- **Three.js**
- plain React state / hooks, χωρίς εξωτερικό state manager
- **GitHub Pages Actions** για static deployment

Δεν υπάρχει backend. Όλο το app είναι client-side και βασίζεται σε public data fetching.

## Αρχιτεκτονική με μία ματιά

### Κύριο entry

- [src/main.jsx](src/main.jsx)
- [src/F1PhantomCars.jsx](src/F1PhantomCars.jsx)

Το `F1PhantomCars.jsx` κάνει μόνο orchestration: data hooks, URL restore, κύκλο φόρτωσης και ποια επιφάνεια εμφανίζεται (builder, workspace ή embed). Η παρουσίαση ζει στα features. Η πλήρης αρχιτεκτονική, το state model και ο πίνακας μετακίνησης λειτουργιών βρίσκονται στο [docs/redesign-v2/architecture.md](docs/redesign-v2/architecture.md).

Hooks δεδομένων και ροής:

- selector state / URL restore / lap loading: [src/hooks/useComparisonSelectors.js](src/hooks/useComparisonSelectors.js)
- replay loading, cancellation και load-time snapshot (`replay.meta`): [src/hooks/useReplayLoader.js](src/hooks/useReplayLoader.js)
- playback timeline, speed, loop και touch scrub: [src/hooks/usePlaybackController.js](src/hooks/usePlaybackController.js)
- σύγκριση κατατακτήριων σεζόν (πρώην H2H και season dashboard): [src/hooks/useSeasonComparison.js](src/hooks/useSeasonComparison.js)
- preset orchestration: [src/hooks/usePresetLoader.js](src/hooks/usePresetLoader.js)
- σύνδεσμος, αποθηκευμένες συγκρίσεις και εξαγωγή εικόνας: [src/hooks/useShareAndGallery.js](src/hooks/useShareAndGallery.js)

### Core modules

- [src/api.js](src/api.js): wrappers προς OpenF1, retries, cancellation-aware backoff, response cache, development request telemetry
- [src/helpers.js](src/helpers.js): normalization, interpolation, formatting και URL helpers
- [src/constants.js](src/constants.js): ομάδες, presets, camera labels
- [src/domain/](src/domain): pure helpers για laps, drivers, replay validation, circuit metadata και OpenF1 availability copy
- [src/services/](src/services): OpenF1 replay stream και preset data orchestration

### Παρουσίαση

- [src/styles/](src/styles): design tokens (`data-theme` + CSS variables) και βασικά primitives
- [src/components/ui/](src/components/ui): Dialog (native `<dialog>`), Menu (Popover API), Tabs, Icon
- [src/app/](src/app): headers, keyboard shortcuts, showreel, document metadata
- [src/features/comparison/](src/features/comparison): builder σύγκρισης και επιλεγμένες συγκρίσεις
- [src/features/replay/](src/features/replay): stage (2D `TrackMap`, lazy 3D), legend, transport, replay model
- [src/features/analysis/](src/features/analysis): rail με Ζωντανά, Τηλεμετρία, Τομείς, Γύροι
- [src/features/insights/](src/features/insights), [src/features/sharing/](src/features/sharing): σεζόν, ενσωμάτωση, αποθηκευμένες συγκρίσεις

### 3D / rendering layer

- [src/features/replay/SceneStage3D.jsx](src/features/replay/SceneStage3D.jsx)
- [src/hooks/useScene.js](src/hooks/useScene.js) και [src/scene/](src/scene)

Το rendering layer:

- στήνει scene, camera και renderer
- φορτώνει το `f1car.glb`
- κρατάει το 3D playback συγχρονισμένο με το `progRef`
- καθαρίζει resources όταν το scene ξαναχτίζεται ή αποσυνδέεται

## Ροή δεδομένων

Η λογική του app ακολουθεί την εξής σειρά:

1. `fetchMeetings(year)`
2. `fetchSessions(meeting_key)`
3. `fetchDrivers(session_key)`
4. `fetchLaps(session_key, driver_number)`
5. `fetchStints(session_key, driver_number)`
6. `fetchLocation(...)`
7. `fetchCarData(...)`

Από εκεί και μετά:

- τα location δεδομένα κανονικοποιούνται σε κοινή πίστα
- γίνεται ανίχνευση direction / circuit flip
- τα telemetry arrays γίνονται downsample όπου χρειάζεται
- το playback ελέγχεται από κοινό `prog` / `progRef`

## Mobile, performance και resilience

Το project έχει ήδη ενσωματωμένες αρκετές αποφάσεις για σταθερότητα:

- lazy loading για 3D scene και modals
- 2D low-power mode αντί για αποκλειστική εξάρτηση από WebGL
- cleanup timers και abort controllers για να μην μένουν orphaned loads
- scoped touch scrubbing ώστε να μη συγκρούεται με όλο το document
- dynamic viewport handling με `100dvh` υποστήριξη
- caching για comparison requests
- cancellation-aware retries στο API layer

Παρόλα αυτά υπάρχουν ακόμη φυσικά όρια:

- το `three` bundle παραμένει μεγάλο
- το `public/f1car.glb` είναι ουσιαστικό asset cost
- η ποιότητα των δεδομένων εξαρτάται πλήρως από την upstream πηγή

## Τοπική εγκατάσταση

### Προϋποθέσεις

- Node.js 20.19+ (ή 22.13+ / 24+ για το υπάρχον ESLint tooling)
- npm

### Εγκατάσταση

```bash
npm ci
```

### Development server

```bash
npm run dev
```

### Production build

```bash
npm run build
```

### Τοπικό preview του production build

```bash
npm run preview
```

## Διαθέσιμα scripts

Από το [package.json](package.json):

- `npm run dev`: εκκίνηση Vite development server
- `npm run lint`: ESLint έλεγχος
- `npm run format`: scoped Prettier write για τα αρχεία που έχουν ενταχθεί στο formatting baseline
- `npm run format:check`: scoped Prettier check
- `npm test`: Node unit tests
- `npm run test:e2e`: Playwright smoke tests
- `npm run build`: production build στο `dist/`
- `npm run preview`: preview του production build
- `npm audit --audit-level=moderate`: dependency audit gate για release

## Deployment

Η authoritative source branch είναι η `main`. Το [.github/workflows/deploy.yml](.github/workflows/deploy.yml) εκτελεί σε κάθε push στη `main`:

```text
main → npm ci → npm run build → dist/ → GitHub Pages artifact
```

Το workflow χρησιμοποιεί `actions/configure-pages`, `actions/upload-pages-artifact` και `actions/deploy-pages`. Το Vite base παραμένει `/ghostcar/`. Τα `node_modules/` και `dist/` παράγονται τοπικά/στο CI και δεν ανήκουν στο source control.

Η branch `gh-pages` είναι ιστορική και δεν οδηγεί το τρέχον production deployment. Το παλιό `npm run deploy` έχει αφαιρεθεί. Η branch διατηρείται για ξεχωριστή απόφαση του maintainer.

Πριν από release, ακολούθησε το [deployment checklist](docs/deployment-checklist.md). Για σύντομο developer onboarding δες το [AGENTS.md](AGENTS.md).

## Embed χρήση

Η εφαρμογή υποστηρίζει iframe embedding με query parameter:

```text
?embed=1
```

Παράγεται έτοιμο iframe snippet από το UI. Το embed mode:

- κρύβει κομμάτια του full shell
- προσαρμόζει layout και controls
- δίνει compact replay + tabs για telemetry / stats / laps / season / H2H

## Deep linking

Το app κωδικοποιεί το current state στο URL, ώστε να μπορεί να γίνει restore του comparison.

Ενδεικτικά parameters:

- `y` / `year`
- `mk` για `meeting_key`
- `sk` για `session_key`
- `d1`, `d2`, `d3`, `d4`
- `l1`, `l2`, `l3`, `l4`
- `nd` για πλήθος οδηγών
- `tv`, `cam`, `vz` για view / camera / visualization mode
- `th`, `spd`, `lp`, `tab` για theme, speed, loop και ενεργό tab
- `embed`

Αυτό επιτρέπει:

- share σε social ή messaging
- editorial linking από άρθρα
- reproducible comparisons

Αν ένα παλιό ή χειροποίητο URL δείχνει σε meeting, session, οδηγό ή γύρο που δεν υπάρχει πια στα διαθέσιμα OpenF1 δεδομένα, το app εμφανίζει σαφές μήνυμα αντί να αποτυγχάνει σιωπηλά.

## Τοπική αποθήκευση στον browser

Η εφαρμογή χρησιμοποιεί `localStorage` για μικρές προτιμήσεις και convenience state:

- `f1s-theme`: επιλογή light/dark
- `f1s-track-view`: τελευταία επιλογή 2D/3D
- `f1s-gallery`: αποθηκευμένες συγκρίσεις

Δεν αποθηκεύονται προσωπικά δεδομένα χρήστη.

## Keyboard shortcuts

Το app υποστηρίζει shortcuts για γρήγορη χρήση σε desktop:

- `Space`: play / pause
- `R`: reset στην αρχή
- `T`: εναλλαγή Ζωντανά / Τηλεμετρία στο rail ανάλυσης
- `V`: toggle 2D / 3D
- `C`: cycle camera mode
- `L`: loop on / off
- `←` / `→`: scrub
- `D`: theme toggle
- `?`: keyboard help
- `Esc`: close overlays

## Assets

### Public assets

- [public/f1car.glb](public/f1car.glb): 3D μοντέλο μονοθεσίου
- [public/logo.png](public/logo.png): εικόνα για social metadata (`og:image`) μόνο· η σελίδα δεν τη φορτώνει
- [public/favicon-64.png](public/favicon-64.png), [public/apple-touch-icon.png](public/apple-touch-icon.png): μικρά εικονίδια που παράγονται από το logo
- [public/f1-stories-logo.svg](public/f1-stories-logo.svg): local logo asset

### SEO / metadata

Το [index.html](index.html) περιλαμβάνει:

- page title
- meta description
- Open Graph tags
- Twitter card fields
- structured data

## Σχεδιαστική κατεύθυνση

Το design system ακολουθεί τη λογική του F1 Stories:

- καθαρή τυπογραφία
- έντονες, ελεγχόμενες accent αποχρώσεις
- dark και light παραλλαγές
- data-first ιεραρχία
- όσο χρειάζεται motion, όχι decorative θόρυβο

Η βασική παλέτα και τα semantic tokens ορίζονται στο [src/constants.js](src/constants.js).

## Ποιότητα δεδομένων και περιορισμοί

Το Ghost Car Lab βασίζεται σε **OpenF1** δεδομένα. Αυτό σημαίνει ότι:

- η διαθεσιμότητα διαφέρει ανά session και χρονιά
- κάποια laps μπορεί να μην έχουν πλήρη timestamp ή location density
- κάποια comparison views μπορεί να είναι άδεια όταν λείπουν upstream δεδομένα
- οι very recent σεζόν μπορεί να είναι μερικώς διαθέσιμες

Το app προσπαθεί να αποτυγχάνει με ασφαλή τρόπο:

- εμφανίζει loading / error states
- πέφτει σε 2D όπου χρειάζεται
- ακυρώνει requests που δεν έχουν πια νόημα

## Γιατί υπάρχει αυτό το project

Το Ghost Car Lab δεν είναι απλώς demo Three.js ούτε ένα telemetry viewer.  
Είναι προϊόν περιεχομένου:

- συνδέει data με narrative
- κάνει τις διαφορές ανάμεσα σε δύο γύρους οπτικά κατανοητές
- δίνει στο F1 Stories ένα reusable analysis format
- υποστηρίζει και editorial χρήση και public distribution

## Επόμενα βήματα

Πιθανά επόμενα βήματα για εξέλιξη:

- περαιτέρω splitting του μεγάλου `three` vendor chunk
- επιπλέον optimization στο 3D asset pipeline
- πιο πλούσιο embed configuration
- export / snapshot flows φιλικότερα για mobile
- περισσότερα preset story packs
- server-side caching ή precomputation για βαριές season συγκρίσεις

## Αποποίηση

Το project δεν αποτελεί επίσημο προϊόν της Formula 1 ή των ομάδων της.  
Τα δεδομένα αντλούνται από το **OpenF1 API** και η παρουσίασή τους γίνεται μέσα από το προϊόν και το editorial ύφος του **F1 Stories**.
