const ayat =[{question:"وَإِذْ قَالَ مُوسَىٰ لِقَوْمِهِ إِنَّ اللَّهَ يَأْمُركُمْ أَن تَذْبَحُوا ( ........)", answer:"بقرة"},
    {question: "فَالْتَقَمَهُ (........) وَهُوَمُلِيمٌ", answer: "الحوت"},
    {question: "وَتَفَقَّدَ الطَّيْرَ فَقَالَ مَالِيَ لَا أَرَى (.........) أَمْ كَانَ مِنَ الْغَائِبِينَ", answer: "الهدهد"}, 
   {question: "فَبَعَثَ ٱللَّهُ (......) يَبْحَثُ فِى ٱلْأَرْضِ لِيُرِيَهُۥ كَيْفَ يُوَٰرى سَوْءَةَ أَخِيهِ", answer: "غرابا"},
   {question:"قَالَ إِنِّي لَيَحْزُنُنِي أَن تَذْهَبُوا بِهِ وَأَخَافُ أَن يَأْكُلَهُ (........) وَأَنتُمْ عَنْهُ غَافِلُونَ", answer: "الذئب"},
 {question:"يأَيُّهَا (........) ادْخُلُوا مَسَاكِنَكُمْ لَا يَحْطِمَنَّكُمْ سُلَيْمَانُ وَجُنُودُهُ وَهُمْ لَايشعرون", answer: "النمل"},
  {question:"أَلَمْ تَرَى كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَابِ (. ......)", answer: "الفيل"},
  {question:"فَأَلْقَىٰ عَصَاهُ فَإِذَا هِيَ (.......) مُّبِينٌ", answer: "ثعبان"},
  {question:"َفَلا يَنْظُرُونَ إِلَى (......)ِ كَيْفَ خُلِقَتْ", answer: "الإبل"},
  {question:"فَأَلْقَاهَا فَإِذَا هِيَ (.......) تَسْعَىٰ", answer: "حية"}, 
  {question:"مَثَلُ الَّذِينَ اتَّخَذُوا مِنْ دُونِ اللَّهِ أَوْلِيَاءَ كَمَثَلِ (. ......) اتَّخَذَتْ بَيْتًا", answer: "العنكبوت"}, 
  {question:"فَرَاغَ إِلَىٰ أَهْلِهِ فَجَاءَ بِ (......) سَمِينٍ", answer: "عجل"},
  {question:"يَوْمَ يَكُونُ النَّاسُ كَ (.......) الْمَبْثُوثِ", answer: "الفراش"}, 
  {question:"قَالُوا نَفْقِدُ صُوَاعَ الْمَلِكِ وَلِمَن جَاءَ بِهِ حِمْلُ (......)ٍ وَأَنَا بِهِ زَعِيمٌ", answer: "بعير"},
 {question:"ِنَّ اللَّهَ لَا يَسْتَحْيِي أَن يَضْرِبَ مَثَلًا مَّا (......) فَمَافَوْقَهَا", answer: "بعوضة"},
 {question:"قالَ هِيَ عَصايَ أَتَوَكَّؤُا عَلَيْها وَأَهُشُّ بِها عَلى(.......) وَلِيَ فِيها مَآرِبُ أُخْرى", answer: "غنمي"},
   {question:"فَلَمَّا عَتَوْا عَنْ مَا نُهُوا عَنْهُ قُلْنَا لَهُمْ كُونُوا (......) خَاسِئِينَ", answer:"قردة"},
   {question: "فَمَثَلُهُۥ كَمَثَلِ ( .......) إِن تَحْمِلْ عَلَيْهِ يَلْهَثْ أَوْ تَتْرُكْهُ يَلْهَث", answer:"الكلب"},
   {question:"مَثَلُ الَّذِينَ حُمِّلُوا التَّوْرَاةَ ثُمَّ لَمْ يَحْمِلُوهَا كَمَثَلِ ( .......)ِ يَحْمِلُ أَسْفَارًا", answer:"الحمار"},
   {question:"قَالَ إِنَّهُ يَقُولُ إِنَّها(......)لَّا فَارِضٌ وَلَا بِكْرٌ عَوَانٌ بَيْنَ ذَٰلِكَ", answer:"بقرة"},
   {question:"فَقَالَ لَهُمْ رَسُولُ اللَّهِ (......) اللَّهِ وَسُقْيَاهَا", answer:"ناقة"},
   {question:"حُرِّمَتْ عَلَيْكُمُ الْمَيْتَةُ وَالدَّمُ وَلَحْمُ (......) وَمَا أُهِلَّ لِغَيْرِ اللَّهِ بِهِ", answer:"الخنزير"},
   {question:"وَأَرْسَلَ عَلَيْهِمْ (......) أَبَابِيلَ", answer:"طيرا"},
   {question:"(......) فَرَّتْ مِن ", answer:"قسورة"},
   {question:"..جَعَلَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا وَمِنَ  (......) أَزْوَاجًا..", answer:"الأنعام"}
];

const correctResponses = [
    "ما شاء الله! إجابة صحيحة، زادك الله علمًا وهدى. 🌟",
    "أحسنت! وفقك الله وسدد خطاك. 🤲",
    "رائع! استمر في هذا الأداء المميز. 💪",
    "جزاك الله خيرًا على هذا الجهد المبارك. 🌹",
    "بوركت جهودك! زادك الله فهمًا وحكمة. 🌼"
];  

// initialisation
let currentQuestionIndex = 0;
let score = 0;

// selection des elements HTML
const questionEl = document.getElementById("ayat-section");
const answerInput = document.getElementById("answer");
const submitButton = document.getElementById("submit");
const scoreEl = document.getElementById("Score");
const feedbackEl = document.getElementById("feedback");

// fonction d'affichage 
function displayQuestion() {
    questionEl.textContent = ayat[currentQuestionIndex].question;
    answerInput.value = ""; 
}

//afficher la premiere question
displayQuestion();


// verifier la reponse
function checkAnswer() {
    const userAnswer = answerInput.value.trim();
    const correctAnswer = ayat[currentQuestionIndex].answer;

    if (userAnswer === correctAnswer) {
        score++;
        const randomMessage = correctResponses[Math.floor(Math.random() * correctResponses.length)];
        feedbackEl.textContent = randomMessage;
        feedbackEl.style.color = "green";
    }else {
        feedbackEl.textContent = ` صلِّ على النبي ﷺ , الاجابة هي: 🌸 : ${correctAnswer}.`;
        feedbackEl.style.color = "red";
    }

    // passer a la question suivante ou terminer le quiz
    currentQuestionIndex++;
    if (currentQuestionIndex < ayat.length) {
        displayQuestion();
    } else {
        endQuiz();
    }

    // mettre a jour le score
    scoreEl.textContent = `Score: ${score}`;
}

// terminer le quiz
function endQuiz() {
    questionEl.textContent = "Quiz Completed";
    answerInput.style.display = "none";
    submitButton.style.display = "none"; 
    scoreEl.style.display = "none";
    feedbackEl.style.display="none"

    const congratsMessage = document.createElement("p");
    congratsMessage.textContent = `Congratulations! You win ${score} TUX 🐧🎉`;
    congratsMessage.style.color="#D5C4A1"
    congratsMessage.style.fontSize = "20px";
    congratsMessage.style.textAlign = "center";
    document.body.appendChild(congratsMessage);

    // afficher un message 
    const tuxImage = document.createElement("img");
    tuxImage.src = "punguin.png"; 
    tuxImage.alt = "Tux le pingouin";
    tuxImage.style.width = "150px";
    tuxImage.style.marginLeft = "550px";
    tuxImage.style.transform="translateY(-15%)"
    document.body.appendChild(tuxImage);

}

//l'evenement de clic
submitButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission
    checkAnswer();
});
