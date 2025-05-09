#!/bin/bash

shopt -s nullglob

for file in *.wav; do
    base="${file%.wav}"

    # Replace spaces with dashes and convert to lowercase
    clean_name=$(echo "$base" | tr ' ' '-' | tr '[:upper:]' '[:lower:]')

    new_name="${clean_name}.wav"

    if [[ "$file" != "$new_name" ]]; then
        echo "Renaming '$file' → '$new_name'"
        mv "$file" "$new_name"
    fi
done
