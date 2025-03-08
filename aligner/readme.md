# Whisper Timestamped Transcription

This script transcribes an audio file using `whisper_timestamped` and outputs a JSON file containing timestamped words.

## Requirements
- I'm using python 3.10.11

## Usage
Install required dependencies:
```bash
pip install whisper_timestamped
```

Run the script with:
```bash
python script.py <path_to_audio_file> <file_stem> <output_dir>
```
Example:
```bash
python script.py example.wav transcript output
```
This will:
- Save a copy of `example.wav` in the `output/` folder as `transcript.wav`
- Generate `output/transcript.json` containing timestamped words

## Output Format
The JSON file will contain:
```json
{
    "words": [
        {
            "text": "Hello",
            "start": 0.5,
            "end": 1.2,
            "isHighlighted": false
        },
        ...
    ]
}
```