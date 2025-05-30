const btns = document.querySelectorAll('.tab-btn')
const about = document.querySelector('.about')
const articles = document.querySelectorAll('.content')

about.addEventListener('click', (e)=>{
    const id = e.target.dataset.id; //accesing to the id using dataset attribute placed on the buttons
    
    if(id){//if id is no undefined
        removeActiveClass(btns) //Remove active class of all buttons
        setActiveTab(e.target) //Add active class in the clicked button
        showArticle(id) // Show the article with the same button id clicked and hide the others
    }
})


function removeActiveClass(elements){
     elements.forEach((el)=>el.classList.remove('active'));//iterates all buttons and remove the active class
}

function setActiveTab(button){
    button.classList.add('active'); // Add the active class only in the clicked button
}

function showArticle(id){
    articles.forEach((article)=>{
        article.classList.toggle('active', article.id === id) //Iterates all articles, then if the clicked one has the same id add the active class, else remove it
    })
}