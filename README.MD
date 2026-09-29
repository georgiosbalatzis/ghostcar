# Ghost Car Lab

Το **Ghost Car Lab** είναι ένα interactive εργαλείο σύγκρισης γύρων Formula 1 από το **F1 Stories**.  
Στόχος του project είναι να μετατρέπει τα ωμά telemetry δεδομένα σε μια εμπειρία που θυμίζει τηλεοπτική ανάλυση, data story και digital product μαζί: δύο ή και περισσότερα μονοθέσια στην ίδια πίστα, ίδιο timeline, ίδια γραμμή αναφοράς, ξεκάθαρο delta και άμεση ανάγνωση της διαφοράς.

Η εφαρμογή είναι φτιαγμένη για:

- γρήγορο lap-to-lap comparison
- storytelling γύρω από iconic μάχες και preset στιγμές
- embed χρήση σε άρθρα ή landing pages
- αξιοπρεπή εμπειρία σε desktop, mobile και low-power συσκευές

Το Ghost Car είναι μια σελίδα του **f1stories.gr** σε ύφος «Data Desk», όπως οι Βαθμολογίες: η μπάρα πλοήγησης του site, τίτλος `GHOST CAR.`, κόκκινη λωρίδα, χαρτί ως προεπιλογή (και σκούρο θέμα), IBM Plex Sans και Barlow Condensed. Το σχέδιο και η πορεία της αναδιάταξης βρίσκονται στο [REWORK_TASKS.md](REWORK_TASKS.md).

## Τι προσφέρει

- **Αναπαράσταση σε πραγματικό χρόνο**: κάθε μονοθέσιο κινείται με τα δικά του timestamps, οπότε ο ταχύτερος γύρος προηγείται και τερματίζει πρώτος
- **2D χάρτης κυριαρχίας** (προεπιλογή): η πίστα χρωματίζεται με τον οδηγό που κερδίζει χρόνο σε κάθε σημείο
- **3D Ghost Car** με κάμερες τροχιάς, παρακολούθησης, από ψηλά και κινηματογραφική
- **Διαφορά χρόνου στο ίδιο σημείο της πίστας**, ελεγμένη απέναντι στους επίσημους χρόνους τομέων
- **Τηλεμετρία** (ταχύτητα, γκάζι, φρένο) στον άξονα απόστασης του γύρου, με σύρσιμο για μετακίνηση
- **Αγωνιστικό δελτίο**: κατάταξη, ζωντανές τιμές, διαφορές ανά τομέα
- **Κατατακτήριες σεζόν**: οι δύο οδηγοί σε κάθε Γκραν Πρι της χρονιάς
- **Επιλεγμένες συγκρίσεις** για γρήγορη φόρτωση εμβληματικών στιγμών
- **Κοινοποιήσιμα URLs**, **ενσωμάτωση σε iframe**, **αποθηκευμένες συγκρίσεις**, **κάρτα κοινοποίησης** και **εικόνα πίστας**
- **Αυτόματη προβολή** (showreel) των επιλεγμένων συγκρίσεων
- **Χαρτί / σκούρο θέμα**, όπως στο f1stories.gr

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
5. αποδίδει το replay σε 2D ή 3D
6. τρέχει όλους τους οδηγούς σε ένα κοινό ρολόι (από 0 έως τον πιο αργό γύρο), τον καθένα με τα δικά του timestamps
7. υπολογίζει τη διαφορά χρόνου στο ίδιο σημείο της πίστας και ποιος κερδίζει πού, εφόσον τα δεδομένα συμφωνούν με τους επίσημους χρόνους τομέων

Το αποτέλεσμα δεν είναι απλώς ένα chart. Είναι ένα synchronized replay layer με data overlays.

## Κοινό και use cases

Το Ghost Car Lab έχει σχεδιαστεί για:

- συντάκτες και δημιουργούς περιεχομένου του F1 Stories
- social/media storytelling γύρω από pole laps, duels και iconic sessions
- άρθρα γνώμης ή ανάλυσης με embed comparisons
- fans που θέλουν να δουν πού κερδίζεται ή χάνεται ο χρόνος
- gamma χρήστες σε κινητό που χρειάζονται ελαφρύτερη αναπαραγωγή

## Βασικά features

### 1. Η σελίδα

Χωρίς φορτωμένη σύγκριση, η σελίδα δείχνει τον τίτλο, τη φόρμα (σεζόν → Γκραν Πρι → σκέλος → οδηγοί και γύροι, 2 έως 4 οδηγοί) και έναν σύνδεσμο προς τις επιλεγμένες συγκρίσεις. Με φορτωμένη σύγκριση, έχει τέσσερις καρτέλες όπως οι Βαθμολογίες του site: **Αναπαράσταση**, **Τομείς**, **Γύροι**, **Κατατακτήριες σεζόν**. Η κόκκινη λωρίδα δείχνει την κατάσταση: φόρτωση (με ακύρωση), θέση αναπαραγωγής και τελική διαφορά.

### 2. Αναπαράσταση

- βασικά στοιχεία: ταχύτερος, τελική διαφορά, μεγαλύτερο κέρδος τομέα, μέγιστη ταχύτητα
- η πίστα σε 2D (προεπιλογή) ή 3D, με ετικέτες οδηγών στο ύφος του site
- αναπαραγωγή σε πραγματικό χρόνο, με S1/S2/S3 στη μπάρα από τους επίσημους χρόνους του ταχύτερου
- το Αγωνιστικό δελτίο με ζωντανές τιμές και διαφορές ανά τομέα
- `02 / Τηλεμετρία`: ταχύτητα, γκάζι, φρένο και διαφορά χρόνου στον άξονα απόστασης

### 3. Διαφορά ανά σημείο και κυριαρχία πίστας

Τα δείγματα θέσης όλων των οδηγών προβάλλονται στη γραμμή του οδηγού Α, ώστε η ίδια απόσταση να είναι το ίδιο σημείο της πίστας. Οι επίσημοι χρόνοι τομέων είναι το μέτρο: η μετατόπιση ρολογιού κάθε οδηγού υπολογίζεται από αυτούς, και τα γραφήματα εμφανίζονται μόνο όταν τα δεδομένα συμφωνούν (±0,1 s σε κάθε γραμμή τομέα). Όταν δεν συμφωνούν, ο άξονας γίνεται χρόνος, το γράφημα διαφοράς κρύβεται και η σελίδα λέει γιατί. Λεπτομέρειες: [src/domain/gap.js](src/domain/gap.js) και [REWORK_TASKS.md](REWORK_TASKS.md) (Φάση 5).

### 4. 3D

Το 3D φορτώνεται lazy, στα χρώματα του θέματος, με κάμερες τροχιάς, παρακολούθησης, από ψηλά και κινηματογραφική. Αν το WebGL δεν είναι διαθέσιμο, η σελίδα συνεχίζει σε 2D με ένα σύντομο μήνυμα.

### 5. Τομείς, Γύροι, Κατατακτήριες σεζόν

- **Τομείς**: επίσημοι χρόνοι τομέων, σύνοψη γύρου και μεγάλος χάρτης κυριαρχίας
- **Γύροι**: όλοι οι έγκυροι γύροι κάθε οδηγού· η αλλαγή φορτώνεται μόνο όταν την εφαρμόσεις
- **Κατατακτήριες σεζόν**: ο καλύτερος γύρος των Α και Β σε κάθε Γκραν Πρι, σταδιακά, με cache και ακύρωση

### 6. Κοινοποίηση και ενσωμάτωση

Σύνδεσμος, ενσωμάτωση σε iframe, αποθήκευση στον browser, κάρτα κοινοποίησης (1200×630, στο ύφος του site) και εικόνα πίστας (αυτόνομο SVG).

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

Το `F1PhantomCars.jsx` κάνει μόνο orchestration: data hooks, URL restore, κύκλο φόρτωσης και ποια επιφάνεια εμφανίζεται (builder, workspace ή embed). Η παρουσίαση ζει στα features. Η τρέχουσα αρχιτεκτονική βρίσκεται στο [docs/rework/architecture.md](docs/rework/architecture.md)· το [docs/redesign-v2/architecture.md](docs/redesign-v2/architecture.md) είναι ιστορικό.

Hooks δεδομένων και ροής:

- selector state / URL restore / lap loading: [src/hooks/useComparisonSelectors.js](src/hooks/useComparisonSelectors.js)
- replay loading, cancellation και load-time snapshot (`replay.meta`): [src/hooks/useReplayLoader.js](src/hooks/useReplayLoader.js)
- ρολόι αναπαραγωγής σε δευτερόλεπτα, ταχύτητα, loop και touch scrub: [src/hooks/usePlaybackController.js](src/hooks/usePlaybackController.js)
- σύγκριση κατατακτήριων σεζόν (πρώην H2H και season dashboard): [src/hooks/useSeasonComparison.js](src/hooks/useSeasonComparison.js)
- preset orchestration: [src/hooks/usePresetLoader.js](src/hooks/usePresetLoader.js)
- σύνδεσμος, αποθηκευμένες συγκρίσεις και εξαγωγή εικόνας: [src/hooks/useShareAndGallery.js](src/hooks/useShareAndGallery.js)

### Core modules

- [src/api.js](src/api.js): wrappers προς OpenF1, retries, cancellation-aware backoff, response cache, development request telemetry
- [src/helpers.js](src/helpers.js): normalization, interpolation, formatting και URL helpers
- [src/constants.js](src/constants.js): ομάδες, presets, camera labels
- [src/domain/](src/domain): pure helpers για laps, drivers, replay validation, circuit metadata και OpenF1 availability copy· [timing.js](src/domain/timing.js) (θέση κάθε οδηγού στο κοινό ρολόι) και [gap.js](src/domain/gap.js) (διαφορά ανά σημείο, κυριαρχία, γραμμές τομέων)
- [src/services/](src/services): OpenF1 replay stream και preset data orchestration

### Παρουσίαση

- [src/styles/](src/styles): tokens από το f1stories.gr (`data-theme`, χαρτί / σκούρο) και τα βασικά primitives (kicker, crumb, band, facts, κουμπιά, πεδία)
- [src/components/ui/](src/components/ui): Dialog (native `<dialog>`), Menu (Popover API), Tabs (με `aside` για ενέργειες), Icon
- [src/app/](src/app): μπάρα του site (`SiteMasthead`), τίτλος (`DeskHero`), κόκκινη λωρίδα και υποσέλιδο (`SignalBand`), ενέργειες σύγκρισης, keyboard shortcuts, showreel, metadata
- [src/features/comparison/](src/features/comparison): η φόρμα σύγκρισης και ο διάλογος επιλεγμένων συγκρίσεων
- [src/features/replay/](src/features/replay): stage (2D `TrackMap` με κυριαρχία, lazy 3D), transport, legend του embed, replay model και key facts
- [src/features/analysis/](src/features/analysis): οι καρτέλες (`Workspace`), Αγωνιστικό δελτίο, τηλεμετρία, τομείς, γύροι
- [src/features/insights/](src/features/insights), [src/features/sharing/](src/features/sharing): κατατακτήριες σεζόν, ενσωμάτωση, αποθηκευμένες συγκρίσεις, συντομεύσεις

### 3D / rendering layer

- [src/features/replay/SceneStage3D.jsx](src/features/replay/SceneStage3D.jsx)
- [src/hooks/useScene.js](src/hooks/useScene.js) και [src/scene/](src/scene)

Το rendering layer:

- στήνει scene, camera και renderer
- φορτώνει το `f1car.glb`
- τοποθετεί κάθε μονοθέσιο με τα δικά του timestamps στο κοινό ρολόι (`progRef` και `timingRef`)
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
- το playback ελέγχεται από κοινό ρολόι (`prog` = χρόνος / διάρκεια του πιο αργού γύρου)· κάθε οδηγός διαβάζεται στον δικό του χρόνο

## Mobile, performance και resilience

Το project έχει ήδη ενσωματωμένες αρκετές αποφάσεις για σταθερότητα:

- lazy loading για το 3D scene
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
- `npm run check:site`: ελέγχει αν το f1stories.gr άλλαξε τη μπάρα πλοήγησης, την παλέτα ή το λογότυπο που αντιγράφει το Ghost Car (χρειάζεται δίκτυο)
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

Παράγεται έτοιμο iframe snippet από το UI (Κοινοποίηση → Ενσωμάτωση). Το embed:

- δείχνει μόνο την πίστα (πάντα 2D), το legend με τη διαφορά και την αναπαραγωγή
- ακολουθεί το θέμα (`th`), χαρτί ως προεπιλογή· το snippet ορίζει το ίδιο χρώμα φόντου στο iframe
- έχει σύνδεσμο «Άνοιγμα στο F1 Stories Ghost Car» για την πλήρη σελίδα

## Deep linking

Το app κωδικοποιεί το current state στο URL, ώστε να μπορεί να γίνει restore του comparison.

Ενδεικτικά parameters:

- `y` / `year`
- `mk` για `meeting_key`
- `sk` για `session_key`
- `d1`, `d2`, `d3`, `d4`
- `l1`, `l2`, `l3`, `l4`
- `nd` για πλήθος οδηγών
- `tv`, `cam`, `vz` για view / camera / visualization mode (το 2D είναι προεπιλογή, οπότε γράφεται μόνο `tv=3d`)
- `th`, `spd`, `lp`, `tab` για theme, speed, loop και καρτέλα (`sectors`, `laps`, `season`· παλιές τιμές όπως `telemetry` ή `stats` αντιστοιχίζονται αυτόματα)
- `embed`

Αυτό επιτρέπει:

- share σε social ή messaging
- editorial linking από άρθρα
- reproducible comparisons

Αν ένα παλιό ή χειροποίητο URL δείχνει σε meeting, session, οδηγό ή γύρο που δεν υπάρχει πια στα διαθέσιμα OpenF1 δεδομένα, το app εμφανίζει σαφές μήνυμα αντί να αποτυγχάνει σιωπηλά.

## Τοπική αποθήκευση στον browser

Η εφαρμογή χρησιμοποιεί `localStorage` για μικρές προτιμήσεις και convenience state:

- `f1s-theme`: επιλογή χαρτί/σκούρο (προεπιλογή: χαρτί)
- `f1s-track-view`: τελευταία επιλογή 2D/3D (προεπιλογή: 2D)
- `f1s-gallery`: αποθηκευμένες συγκρίσεις

Δεν αποθηκεύονται προσωπικά δεδομένα χρήστη.

## Keyboard shortcuts

Το app υποστηρίζει shortcuts για γρήγορη χρήση σε desktop:

- `Space`: play / pause
- `R`: reset στην αρχή
- `T`: μετάβαση στην τηλεμετρία
- `V`: toggle 2D / 3D
- `C`: cycle camera mode
- `L`: loop on / off
- `←` / `→`: 1 δευτερόλεπτο πίσω / μπροστά (διπλό `←`: 5 δευτερόλεπτα)
- `D`: theme toggle
- `?`: keyboard help
- `Esc`: close overlays

## Assets

### Public assets

- [public/f1car.glb](public/f1car.glb): 3D μοντέλο μονοθεσίου
- [public/logo.png](public/logo.png): εικόνα για social metadata (`og:image`) μόνο· η σελίδα δεν τη φορτώνει
- [public/favicon-64.png](public/favicon-64.png), [public/apple-touch-icon.png](public/apple-touch-icon.png): μικρά εικονίδια που παράγονται από το logo
- [public/logo-nav.webp](public/logo-nav.webp): το λογότυπο της μπάρας του f1stories.gr (2,7 kB)
- [public/f1-stories-logo.svg](public/f1-stories-logo.svg): local logo asset

### SEO / metadata

Το [index.html](index.html) περιλαμβάνει:

- page title
- meta description
- Open Graph tags
- Twitter card fields
- structured data

## Σχεδιαστική κατεύθυνση

Το Ghost Car ακολουθεί το ύφος των σελίδων δεδομένων του f1stories.gr:

- χαρτί `#f2eee4` ως προεπιλογή, σκούρο `#1b1a19`, κόκκινο σήματος `#ed4c32`
- IBM Plex Sans για κάθε ελληνικό κείμενο· Barlow Condensed μόνο για λατινικούς τίτλους (`GHOST CAR.`, `EVERY TENTH COUNTS.`, ακρωνύμια)
- λεπτές γραμμές, αριθμημένες ετικέτες ενοτήτων, γωνίες 2 px, χωρίς σκιές
- το χρώμα ομάδας είναι δεδομένο (γραμμές, κουκκίδες), ποτέ κείμενο

Τα tokens ορίζονται στο [src/styles/tokens.css](src/styles/tokens.css), με την πηγή τους από το site σημειωμένη στην κορυφή του αρχείου.

## Ποιότητα δεδομένων και περιορισμοί

Το Ghost Car Lab βασίζεται σε **OpenF1** δεδομένα. Αυτό σημαίνει ότι:

- η διαθεσιμότητα διαφέρει ανά session και χρονιά
- κάποια laps μπορεί να μην έχουν πλήρη timestamp ή location density
- κάποια comparison views μπορεί να είναι άδεια όταν λείπουν upstream δεδομένα
- οι very recent σεζόν μπορεί να είναι μερικώς διαθέσιμες

Το app προσπαθεί να αποτυγχάνει με ασφαλή τρόπο:

- εμφανίζει loading / error states
- πέφτει σε 2D όπου χρειάζεται
- κρύβει τη διαφορά ανά σημείο και την κυριαρχία όταν τα δεδομένα θέσης δεν συμφωνούν με τους χρόνους τομέων, και λέει γιατί
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
