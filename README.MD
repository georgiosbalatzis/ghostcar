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
- **gh-pages** για static deployment

Δεν υπάρχει backend. Όλο το app είναι client-side και βασίζεται σε public data fetching.

## Αρχιτεκτονική με μία ματιά

### Κύριο entry

- [src/main.jsx](/Users/giorgos/WebstormProjects/ghostcar/src/main.jsx)
- [src/F1PhantomCars.jsx](/Users/giorgos/WebstormProjects/ghostcar/src/F1PhantomCars.jsx)

Το `F1PhantomCars.jsx` είναι πλέον κυρίως composition container. Συνδέει τα hooks, τα view models και τα presentational components χωρίς να κρατά όλη τη λεπτομέρεια του UI inline.

Κύριες ευθύνες που έχουν εξαχθεί:

- selector state / URL restore / lap loading στο [src/hooks/useComparisonSelectors.js](/Users/giorgos/WebstormProjects/ghostcar/src/hooks/useComparisonSelectors.js)
- replay loading, progress, cancellation και replay data στο [src/hooks/useReplayLoader.js](/Users/giorgos/WebstormProjects/ghostcar/src/hooks/useReplayLoader.js)
- playback timeline, speed, loop, countdown και touch scrub στο [src/hooks/usePlaybackController.js](/Users/giorgos/WebstormProjects/ghostcar/src/hooks/usePlaybackController.js)
- auxiliary modal/tab state στο [src/hooks/useAuxiliaryViews.js](/Users/giorgos/WebstormProjects/ghostcar/src/hooks/useAuxiliaryViews.js)
- H2H / season dashboard data loading στο [src/hooks/useAuxiliaryData.js](/Users/giorgos/WebstormProjects/ghostcar/src/hooks/useAuxiliaryData.js)
- preset orchestration στο [src/hooks/usePresetLoader.js](/Users/giorgos/WebstormProjects/ghostcar/src/hooks/usePresetLoader.js)
- share, gallery και screenshot helpers στο [src/hooks/useShareAndGallery.js](/Users/giorgos/WebstormProjects/ghostcar/src/hooks/useShareAndGallery.js)

### Core modules

- [src/api.js](/Users/giorgos/WebstormProjects/ghostcar/src/api.js): wrappers προς OpenF1, retries, cancellation-aware backoff, response cache, development request telemetry
- [src/helpers.js](/Users/giorgos/WebstormProjects/ghostcar/src/helpers.js): normalization, interpolation, formatting και URL helpers
- [src/constants.js](/Users/giorgos/WebstormProjects/ghostcar/src/constants.js): F1 palette, ομάδες, presets, camera labels και compatibility re-exports
- [src/theme.js](/Users/giorgos/WebstormProjects/ghostcar/src/theme.js): light/dark palette μέσω React context
- [src/domain/](/Users/giorgos/WebstormProjects/ghostcar/src/domain): pure helpers για laps, drivers, replay validation, circuit metadata και OpenF1 availability copy
- [src/services/](/Users/giorgos/WebstormProjects/ghostcar/src/services): OpenF1 replay stream και preset data orchestration
- [src/ui/styles.js](/Users/giorgos/WebstormProjects/ghostcar/src/ui/styles.js): shared UI tokens και style helpers

### 3D / rendering layer

- [src/components/SceneStage3D.jsx](/Users/giorgos/WebstormProjects/ghostcar/src/components/SceneStage3D.jsx)
- [src/hooks/useScene.js](/Users/giorgos/WebstormProjects/ghostcar/src/hooks/useScene.js)

Το rendering layer:

- στήνει scene, camera και renderer
- φορτώνει το `f1car.glb`
- κρατάει το 3D playback συγχρονισμένο με το `progRef`
- καθαρίζει resources όταν το scene ξαναχτίζεται ή αποσυνδέεται

### 2D / telemetry layer

- [src/components/TrackReplay2D.jsx](/Users/giorgos/WebstormProjects/ghostcar/src/components/TrackReplay2D.jsx)
- [src/components/TelemetryPanel.jsx](/Users/giorgos/WebstormProjects/ghostcar/src/components/TelemetryPanel.jsx)
- [src/components/TelChart.jsx](/Users/giorgos/WebstormProjects/ghostcar/src/components/TelChart.jsx)
- [src/components/MiniMap.jsx](/Users/giorgos/WebstormProjects/ghostcar/src/components/MiniMap.jsx)
- [src/components/SectorDelta.jsx](/Users/giorgos/WebstormProjects/ghostcar/src/components/SectorDelta.jsx)

### Modal / auxiliary views

- [src/modals/PresetsModal.jsx](/Users/giorgos/WebstormProjects/ghostcar/src/modals/PresetsModal.jsx)
- [src/modals/StatsModal.jsx](/Users/giorgos/WebstormProjects/ghostcar/src/modals/StatsModal.jsx)
- [src/modals/LapsModal.jsx](/Users/giorgos/WebstormProjects/ghostcar/src/modals/LapsModal.jsx)
- [src/modals/H2HModal.jsx](/Users/giorgos/WebstormProjects/ghostcar/src/modals/H2HModal.jsx)
- [src/modals/DashModal.jsx](/Users/giorgos/WebstormProjects/ghostcar/src/modals/DashModal.jsx)
- [src/modals/EmbedModal.jsx](/Users/giorgos/WebstormProjects/ghostcar/src/modals/EmbedModal.jsx)
- [src/modals/GalleryModal.jsx](/Users/giorgos/WebstormProjects/ghostcar/src/modals/GalleryModal.jsx)
- [src/modals/TelemetryModal.jsx](/Users/giorgos/WebstormProjects/ghostcar/src/modals/TelemetryModal.jsx)
- [src/modals/KeysModal.jsx](/Users/giorgos/WebstormProjects/ghostcar/src/modals/KeysModal.jsx)
- [src/modals/TourOverlay.jsx](/Users/giorgos/WebstormProjects/ghostcar/src/modals/TourOverlay.jsx)

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

- Node.js 18+
- npm

### Εγκατάσταση

```bash
npm install
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

Από το [package.json](/Users/giorgos/WebstormProjects/ghostcar/package.json):

- `npm run dev`: εκκίνηση Vite development server
- `npm run lint`: ESLint έλεγχος
- `npm run format`: scoped Prettier write για τα αρχεία που έχουν ενταχθεί στο formatting baseline
- `npm run format:check`: scoped Prettier check
- `npm test`: Node unit tests
- `npm run test:e2e`: Playwright smoke tests
- `npm run build`: production build στο `dist/`
- `npm run preview`: preview του production build
- `npm run deploy`: publish του `dist/` μέσω `gh-pages`
- `npm audit --audit-level=moderate`: dependency audit gate για release

## Deployment

Το project είναι static-first και μπορεί να ανέβει εύκολα σε GitHub Pages.

Τυπική ροή:

```bash
npm run build
npm run deploy
```

Το repository χρησιμοποιεί ήδη το package `gh-pages`, οπότε το deployment παραμένει απλό και χωρίς backend βήμα.

Πριν από release ή publish, ακολούθησε το [deployment checklist](/Users/giorgos/WebstormProjects/ghostcar/docs/deployment-checklist.md).

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
- `f1s-toured`: αν έχει εμφανιστεί το onboarding / tour

Δεν αποθηκεύονται προσωπικά δεδομένα χρήστη.

## Keyboard shortcuts

Το app υποστηρίζει shortcuts για γρήγορη χρήση σε desktop:

- `Space`: play / pause
- `R`: reset στην αρχή
- `T`: toggle telemetry
- `V`: toggle 2D / 3D
- `C`: cycle camera mode
- `L`: loop on / off
- `←` / `→`: scrub
- `D`: theme toggle
- `?`: keyboard help
- `Esc`: close overlays

## Assets

### Public assets

- [public/f1car.glb](/Users/giorgos/WebstormProjects/ghostcar/public/f1car.glb): 3D μοντέλο μονοθεσίου
- [public/f1-stories-logo.svg](/Users/giorgos/WebstormProjects/ghostcar/public/f1-stories-logo.svg): local logo asset

### SEO / metadata

Το [index.html](/Users/giorgos/WebstormProjects/ghostcar/index.html) περιλαμβάνει:

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

Η βασική παλέτα και τα semantic tokens ορίζονται στο [src/constants.js](/Users/giorgos/WebstormProjects/ghostcar/src/constants.js).

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
