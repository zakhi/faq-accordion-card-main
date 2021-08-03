const questions = document.getElementsByClassName("question")

for (let question of questions) {
    question.addEventListener("click", () => question.parentNode.classList.toggle("open"))
}
