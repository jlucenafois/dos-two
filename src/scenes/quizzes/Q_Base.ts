
// You can write more code here

/* START OF COMPILED CODE */

import { SCRIPT } from "../../script";
import { Language, QUIZ_LANGUAGE } from "../../settings";
import { playAudioSequence, renderSingleComponent } from "../../utils";
import Base from "../Base";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Q_Base extends Base {

	constructor(key: string) {
        super(key);

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }		

	editorCreate(): void {

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */
	preload(): void {
		const sceneScript = SCRIPT[this.scene.key];
		if (!sceneScript || !sceneScript.quizVariants) return;
		
		let lang = QUIZ_LANGUAGE[this.scene.key];
		console.log(lang)
		if (!lang) {
			lang = Math.random() < 0.5 ? Language.English : Language.Spanish;
			QUIZ_LANGUAGE[this.scene.key] = lang;
		}
	
		const langSuffix = QUIZ_LANGUAGE[this.scene.key] === Language.English ? 'e' : 's';
		const questionId = this.scene.key.toLowerCase().replace("_", "");
		this.load.audio(`${questionId}${langSuffix}`, `assets/transcript/quizzes/audio/${questionId}${langSuffix}.wav`);
		this.load.audio(`${questionId}-answer-${langSuffix}`, `assets/transcript/quizzes/audio/${questionId}-answer-${langSuffix}.wav`);
	}
	// Write your code here

	create() {
		
		// TODO: if playedOnce, return static quiz
		this.renderedComponents = [];
		const sceneScript = SCRIPT[this.scene.key];
		if (!sceneScript || !sceneScript.quizVariants) return;
	
		// Reuse stored quiz language
		let lang = QUIZ_LANGUAGE[this.scene.key];
		const components = sceneScript.quizVariants[lang];
		components.forEach(comp => renderSingleComponent(this, comp));
		
		this.events.emit("disableForwardNav");
		const langSuffix = lang === Language.English ? 'e' : 's';
		playAudioSequence(this, [`q1${langSuffix}`, `q1-answer-${langSuffix}`], () => {}, 500);
		super.create();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
