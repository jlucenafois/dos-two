import whisper_timestamped
import argparse
import json
import os
import shutil

def parse_args():
    parser = argparse.ArgumentParser(description="Transcribe an audio file and save the timestamped words in JSON format.")
    parser.add_argument("audio_file", help="Path to the input audio file")
    parser.add_argument("file_stem", help="File stem for output naming")
    parser.add_argument("output_dir", help="Path to the output directory", default="output")
    return parser.parse_args()

def main():
    # Parse command-line arguments
    args = parse_args()
    input_audio_file = args.audio_file
    file_stem = args.file_stem
    output_dir = args.output_dir

    # Define output directory
    os.makedirs(output_dir, exist_ok=True)  # Ensure output directory exists

    # Clone the audio file into the output directory
    wav_output_file = os.path.join(output_dir, f"{file_stem}.wav")
    shutil.copy(input_audio_file, wav_output_file)

    # Load Whisper model
    print("Loading model...")
    model = whisper_timestamped.load_model("base")  # Choose model size
    print("Finished loading model")

    # Transcribe the audio file
    result = whisper_timestamped.transcribe(model, wav_output_file)

    # Extract and format words with timestamps (excluding confidence field)
    words = [
        {
            "text": word["text"],
            "start": word["start"],
            "end": word["end"],
            "isHighlighted": False,
        }
        for segment in result["segments"]
        for word in segment["words"]
    ]

    # Save the processed transcription to a JSON file
    json_output_file = os.path.join(output_dir, f"{file_stem}.json")
    with open(json_output_file, "w", encoding="utf-8") as f:
        json.dump({"words": words}, f, indent=4, ensure_ascii=False)

    print(f"Words-only transcription saved to {json_output_file}")

# Entry point
if __name__ == "__main__":
    main()
