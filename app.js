const btns = document.querySelectorAll('.tab-btn')
const about = document.querySelector('.about')
const aboutContent = document.querySelector('.about-content')

const articles = document.querySelectorAll('.content')

about.addEventListener('click', (e)=>{
    const id = e.target.dataset.id; //accesing to the id using dataset attribute placed on the buttons
    if(id){ //if the id exists (not undefined)
         /* Remove 'active' class of buttons */
         btns.forEach((btn)=>{
            btn.classList.remove('active') //Remove the active class for all buttons
            e.target.classList.add('active') //add the active class to the clicked button
         })
         /* hide other articles */
         articles.forEach((article)=>{
            if(id === article.id){
                article.classList.add('active')
            }else{
                article.classList.remove('active')
            }
         })
    }
    
})