#!/bin/bash

# Folder containing the .wav files
AUDIO_DIR="../public/assets/transcript/story/audio"
# Output directory for results
OUTPUT_DIR="../public/assets/transcript/story/json"

# Make sure output directory exists
mkdir -p "$OUTPUT_DIR"

# Loop through all .wav files in the story folder
for filepath in "$AUDIO_DIR"/*.wav; do
    # Get just the filename without path and extension
    filename=$(basename -- "$filepath")
    stem="${filename%.*}"

    echo "Transcribing $filename → $stem.json"
    python run.py "$filepath" "$stem" "$OUTPUT_DIR"
done
