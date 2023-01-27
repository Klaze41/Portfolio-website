
function Darkmode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
const phrases = ["ウエブ開発", "バックエンド", "フロントエンド"];
const element = document.getElementById("typewritter");

let sleepTime = 100;

let curPhraseIndex = 0;

const writeLoop = async () => {
    while (true){
        let curWord = phrases[curPhraseIndex];
        
        for (let i = 0; i < curWord.length; i++){
            element.innerText = curWord.substring(0,i+1);
            await sleep(sleepTime);
        }
        await sleep(sleepTime*12);

        for (let i = curWord.length; i>0; i--){
            element.innerText = curWord.substring(0,i-1);
            await sleep(sleepTime);
        }
        await sleep(sleepTime*6);

        if (curPhraseIndex === phrases.length-1){
            curPhraseIndex = 0;
        } else {
            curPhraseIndex++;
        }

    }
};
writeLoop();