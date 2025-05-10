#!/bin/bash

for i in $(seq 6 32); do
  uuid=$(uuidgen)
  cat <<EOF > P_$i.json
{
    "id": "$uuid",
    "sceneType": "SCENE",
    "settings": {
        "exportClass": true,
        "autoImport": true,
        "superClassName": "P_Base",
        "preloadPackFiles": [],
        "createMethodName": "editorCreate",
        "sceneKey": "P_$i",
        "compilerOutputLanguage": "TYPE_SCRIPT",
        "borderWidth": 1728,
        "borderHeight": 1117
    },
    "displayList": [],
    "plainObjects": [],
    "meta": {
        "app": "Phaser Editor - Scene Editor",
        "url": "https://phaser.io/editor",
        "contentType": "phasereditor2d.core.scene.SceneContentType",
        "version": 5
    }
}
EOF
done
