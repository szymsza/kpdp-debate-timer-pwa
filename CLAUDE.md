# kpdp-debate-timer-pwa

Preact + TypeScript PWA debate timer. Two modes: **linear** (carousel-based, one slot at a time) and **classic** (all slots visible, manual selection).

## Dev

```
npm install
npm run dev   # http://localhost:8081
```

## Key structure

- `src/config.ts` — speech times and prep times configuration (edit here for timing changes)
- `src/store/` — Redux-style store: `types.ts` (action types), `reducer.ts` (all state transitions), `initialStore.ts`
- `src/components/ModeLinear/` — linear mode UI; `TimeSlotsCarousel/` is the swipeable card carousel
- `src/components/ModeClassic/` — classic mode UI
- `src/screens/` — top-level screen components (Timer, Settings, About)

## Linear mode flow

`getLinearTimeSlots()` (in `ModeLinear/getters.ts`) builds the ordered flat list of all slots (speakers + prep times interleaved). `linearActiveSlotIndex` in the store tracks the current position.

- Tap paused card → start timer (`TOGGLE_PAUSED_TIMER`)
- Tap running card → advance to next slot (`INCREMENT_LINEAR_ACTIVE_SLOT_INDEX`)
- Swipe right on carousel → go back to previous slot (`DECREMENT_LINEAR_ACTIVE_SLOT_INDEX`), pauses the restored slot

## Timings (KPDP format)

- All speakers (constructive + closing): 6 min
- Prep time (both sides): 5 min
- Cross questions: 3 min
