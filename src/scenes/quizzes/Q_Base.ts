import { SCRIPT } from "../../script";
import { Language, QUIZ_LANGUAGE } from "../../settings";
import { playAudioSequence, renderSingleComponent } from "../../utils";
import Base from "../Base";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Q_Base extends Base {
	constructor(key: string) {
		super(key);
	}

	editorCreate(): void {
		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */
	preload(): void {
		const sceneScript = SCRIPT[this.scene.key];
		if (!sceneScript || !sceneScript.sections || sceneScript.sections.length === 0) return;

		const firstSection = sceneScript.sections[0];
		if (!firstSection.quizVariants) return;
		
		let lang = QUIZ_LANGUAGE[this.scene.key];
		if (!lang) {
			lang = Math.random() < 0.5 ? Language.English : Language.Spanish;
			QUIZ_LANGUAGE[this.scene.key] = lang;
		}

		const langSuffix = lang === Language.English ? 'e' : 's';
		const questionId = this.scene.key.toLowerCase().replace("_", "");
		this.load.audio(`${questionId}${langSuffix}`, `assets/transcript/quizzes/audio/${questionId}${langSuffix}.wav`);
		this.load.audio(`${questionId}-answer-${langSuffix}`, `assets/transcript/quizzes/audio/${questionId}-answer-${langSuffix}.wav`);
	}

	create(): void {
		super.create();
		const sceneScript = SCRIPT[this.scene.key];
		if (!sceneScript || !sceneScript.sections || sceneScript.sections.length === 0) return;

		const firstSection = sceneScript.sections[0];
		if (!firstSection.quizVariants) return;

		let lang = QUIZ_LANGUAGE[this.scene.key];
		const components = firstSection.quizVariants[lang];
		
		components.forEach(comp => renderSingleComponent(this, comp, !!firstSection.playedOnce));
		
		if (!!!firstSection.playedOnce) {
			this.events.emit("disableForwardNav");
			const questionId = this.scene.key.toLowerCase().replace("_", "");
			const langSuffix = lang === Language.English ? 'e' : 's';
			playAudioSequence(this, [`${questionId}${langSuffix}`, `${questionId}-answer-${langSuffix}`], () => {}, 500);

		}
	}
	/* END-USER-CODE */
}
