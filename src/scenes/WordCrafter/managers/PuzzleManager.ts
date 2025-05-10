export interface PuzzleConfig {
    isEnglishFirst: boolean;
    quizMode: 'after' | 'before' | 'alternating';
    content: { image: string; english: string; spanish: string };
}

export interface PuzzleStep {
    word: string;
    quiz: boolean;
    isEnglishPreferred: boolean;
}

export class PuzzleManager {
    private steps: PuzzleStep[] = [];
    private currentIndex: number = 0;
    private config: PuzzleConfig;
    
    constructor(config: PuzzleConfig) {
        this.config = config;
        this.steps = this.generatePuzzleSteps();
    }
    
    getCurrentStep(): PuzzleStep {
        return this.steps[this.currentIndex];
    }
    
    advanceToNextStep(): boolean {
        this.currentIndex++;
        return this.currentIndex < this.steps.length;
    }
    
    getComponentRenderings(dualShape: any, step: PuzzleStep) {
        const { englishShape, spanishShape } = dualShape;
        const isEnglishPreferred = step.isEnglishPreferred;
        
        // Determine shapes
        const preferredShape = isEnglishPreferred ? englishShape : spanishShape;
        const alternateShape = isEnglishPreferred ? spanishShape : englishShape;
        
        // Determine text content
        const wordMap = {
            quiz: {
                primary: isEnglishPreferred ? "English" : "Spanish",
                secondary: isEnglishPreferred ? "Spanish" : "English"
            },
            normal: {
                primary: isEnglishPreferred ? this.config.content.english : this.config.content.spanish,
                secondary: isEnglishPreferred ? this.config.content.spanish : this.config.content.english
            }
        };
        
        const mode = step.quiz ? 'quiz' : 'normal';
        const { primary: primaryWord, secondary: secondaryWord } = wordMap[mode];
        
        return { preferredShape, alternateShape, primaryWord, secondaryWord };
    }
    
    private generatePuzzleSteps(): PuzzleStep[] {
        const { isEnglishFirst, quizMode, content } = this.config;
        
        // Get words for first and second language
        const firstLangWord = isEnglishFirst ? content.english : content.spanish;
        const secondLangWord = isEnglishFirst ? content.spanish : content.english;
        
        // Determine when quiz mode is active
        const beforeQuiz = quizMode === 'before' || quizMode === 'alternating';
        const afterQuiz = quizMode === 'after' || quizMode === 'alternating';
        
        return [
            // First language
            { word: firstLangWord, quiz: beforeQuiz, isEnglishPreferred: isEnglishFirst },
            // Second language
            { word: secondLangWord, quiz: beforeQuiz, isEnglishPreferred: !isEnglishFirst },
            // First language with quiz
            { word: firstLangWord, quiz: afterQuiz, isEnglishPreferred: isEnglishFirst },
            // Second language with quiz
            { word: secondLangWord, quiz: afterQuiz, isEnglishPreferred: !isEnglishFirst }
        ];
    }
}