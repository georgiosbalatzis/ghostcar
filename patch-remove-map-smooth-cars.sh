#!/bin/bash
# ═══════════════════════════════════════════════════════════
# patch-remove-map-smooth-cars.sh
# 1. Removes LiveMap component & all Map View references
# 2. Improves car movement smoothness
# Run from project root: bash patch-remove-map-smooth-cars.sh
# ═══════════════════════════════════════════════════════════

FILE="src/F1PhantomCars.jsx"
if [ ! -f "$FILE" ]; then echo "❌ $FILE not found"; exit 1; fi

cp "$FILE" "${FILE}.bak"
echo "🏎️  Backup created: ${FILE}.bak"

# ═══════════════════════════════════
# PART 1: REMOVE MAP VIEW
# ═══════════════════════════════════

# 1a. Remove the entire LiveMap component (~100 lines)
#     Uses the unique "F1 TV Live Timing Map View" comment as start,
#     and the unique "width={900} height={900}" canvas line as a near-end marker
sed -i '/F1 TV Live Timing Map View/,/width={900} height={900}/d' "$FILE"
# Clean the remaining }); and blank line after the deleted block
# (The }); closing the memo is left behind — remove first standalone }); after deletion point)

# 1b. Remove ALL lines containing showMap (state, button, overlay, gesture, checks)
sed -i '/showMap/d' "$FILE"

echo "✅ Map View removed"

# ═══════════════════════════════════
# PART 2: SMOOTHER CAR MOVEMENT
# ═══════════════════════════════════

# 2a. Increase trail max points for smoother trails: 120 → 200
sed -i 's/const max = 120,/const max = 200,/' "$FILE"

# 2b. Smoother trail alpha decay: 0.97 → 0.985
sed -i "s/trail.alphas\[i\] = trail.alphas\[i - 1\] \* 0.97/trail.alphas[i] = trail.alphas[i - 1] * 0.985/" "$FILE"

# 2c. Smoother camera lerp: 0.08 → 0.05 (less snappy, more cinematic)
sed -i 's/camera.position.lerp(camTargetPos.current, 0.08)/camera.position.lerp(camTargetPos.current, 0.05)/' "$FILE"

# 2d. Use a closer look-ahead for car orientation (smoother turning): 0.005 → 0.003
sed -i "s/const p2 = lerp(pts, Math.min(1, t + 0.005))/const p2 = lerp(pts, Math.min(1, t + 0.003))/" "$FILE"

# 2e. Reduce camera shake intensity for smoother follow cam
sed -i 's/(Math.random() - 0.5) \* 0.12/(Math.random() - 0.5) * 0.06/' "$FILE"
sed -i 's/(Math.random() - 0.5) \* 0.08/(Math.random() - 0.5) * 0.04/' "$FILE"

# 2f. Smoother playback tick — use 0.012 base speed instead of 0.015
sed -i 's/const n = p + dt \* 0.015 \* spd/const n = p + dt * 0.012 * spd/' "$FILE"

echo "✅ Car smoothness improved"
echo ""
echo "📋 Also replace:"
echo "   • src/helpers.js → new version with Catmull-Rom interpolation"
echo "   • src/constants.js → if not already updated"
echo ""
echo "🔄 To revert: cp ${FILE}.bak $FILE"
