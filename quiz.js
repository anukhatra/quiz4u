const quiz = [
    {
    ques: 'Which of the following CSS property defines the different properties of all four sides of an element’s border in a single declaration?',
    a: 'border-collapse',
    b: 'border',
    c:'padding',
    d:'border-width',
    answer:'d'
},
{
    ques: 'How Can We Write Comment Along With CSS Code?',
    a: '/* Comment */',
    b: '<!-- comment -->',
    c:'// comment',
    d:'# comment',
    answer:'a'
},
{
    ques: 'Which of the following CSS selector is used ti define a style for unique element?',
    a: 'class',
    b: 'Id',
    c: 'name',
    d: 'text',
    answer:'b'
},
{
    ques: 'Which of the following CSS property is used to control the text size of an element ?',
    a: 'text-size',
    b: 'text-style',
    c: 'font-style',
    d: 'font-size',
    answer:'d'
},
{
    ques: 'Which of the following HTML tag is used to define an internal style sheet? ?',
    a: '<script>',
    b: '<css>',
    c:'<script>',
    d:'none',
    answer:'c'
},
]

const quiz_question = document.querySelector('#quiz_question');
const options = document.querySelectorAll(".options");
let quizResult = document.querySelector("#quizResult");
const option_a = document.querySelector('#option_a');
const option_b = document.querySelector('#option_b');
const option_c = document.querySelector('#option_c');
const option_d = document.querySelector('#option_d');
const submit_btn = document.querySelector('#submit');

let current_quest = 0;
let score = 0;

getQuestion();

function getQuestion(){
    deselectOptions();

    const current_quest_Data = quiz[current_quest];
    quiz_question.innerText = current_quest_Data.ques;
    option_a.innerText = current_quest_Data.a;
    option_b.innerText = current_quest_Data.b;
    option_c.innerText = current_quest_Data.c;
    option_d.innerText = current_quest_Data.d;
    
}
function getSelectedOption(){

    let answer = undefined;
    options.forEach((option)=>{

        if(option.checked){
            answer = option.id;
        }        
    });
    return answer;

}
function deselectOptions(){
    options.forEach((option)=>{
        option.checked = false;
    });
}

submit_btn.addEventListener("click",()=>{
    const answeroption = getSelectedOption();
 
    if(answeroption){
        if(answeroption === quiz[current_quest].answer){
            
            score++;
        }
    current_quest++;


  
        if(current_quest < quiz.length){
            getQuestion();
        }else{
            console.log(quizResult);
            
            quizResult.innerHTML = `<h2> Your score is: ${score}/${quiz.length}
            <button onclick="location.reload()">Reload</button>
            </h2>`;
        } 
    }
/*  */
   
})







