**2/14-2/28**
- Fix code duplication (index insertion, updateGameState in every scene)
- Move updateUI to a dictionary: (event, arrow function)
- Prevent book flip when backtracking using arrows
- Check if back arrow functionality is correct. Should we store prev/next scene in game settings?

**Henry**
- When user click out of the window while the audio is playing, the audio pauses. When clicked back in, audio and subtitle get out of sync
- Prevent the audio from continue to play when the user move to another page
- refactor P_Base