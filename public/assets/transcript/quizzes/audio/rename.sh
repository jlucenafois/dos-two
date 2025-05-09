#!/bin/bash

for file in *.wav; do
	# Lowercase and remove .wav for processing
	base=$(basename "$file" .wav)

	# Normalize: remove spaces around dashes
	normalized=$(echo "$base" | sed -E 's/[[:space:]]*-[[:space:]]*/-/g')

	# Extract components
	question=$(echo "$normalized" | grep -oE 'Q[0-9]+')
	part=$(echo "$normalized" | grep -oE 'Answer' || echo "")
	lang=$(echo "$normalized" | grep -oE '(English|Spanish)')

	# Format parts
	qnum=$(echo "$question" | tr '[:upper:]' '[:lower:]')
	langcode=$(echo "$lang" | cut -c1 | tr '[:upper:]' '[:lower:]')

	if [[ $normalized == Congratulations* ]]; then
		# Special case for Congratulations files
		newname="congratulations-$langcode.wav"
	elif [[ -n $qnum ]]; then
		if [[ -n $part ]]; then
			newname="${qnum}-answer-${langcode}.wav"
		else
			newname="${qnum}${langcode}.wav"
		fi
	else
		echo "Skipping unrecognized file: $file"
		continue
	fi

	echo "Renaming '$file' → '$newname'"
	mv "$file" "$newname"
done

