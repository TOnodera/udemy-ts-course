import { Scoreable } from './interfaces.js';
import Foods from './foods.js';

export default class Score implements Scoreable{
    private static instance: Score;
    private constructor(){}
    get totalScore(){
        const foods = Foods.getInstance();
        return foods.activeElementsScore.reduce((total,score)=>total+score, 0);
    }
    render(){
        document.querySelector('.score__number')!.textContent = String(this.totalScore);
    }
    static getInstance(){
        if(!Score.instance){
            Score.instance = new Score();
        }
        return Score.instance;
    }
}