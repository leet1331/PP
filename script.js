const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const menu = document.querySelector("nav .container ul");

menuBtn.addEventListener('click', () => {
    menu.style.display='block';
    menuBtn.style.display='none';
    closeBtn.style.display='inline-block';
})

//hhding and showing menu

closeBtn.addEventListener('click', () => {
    menu.style.display='none';
    menuBtn.style.display='inline-block';
    closeBtn.style.display='none';
})

//highlighting the content of nav bar
 
const navItems=menu.querySelectorAll('li');

const changeActiveItem=() => {
    navItems.forEach(item => {
    const link= item.querySelector('a');
    link.classList.remove('active');

    
    }
    )
}

navItems.forEach(item => {
    const link= item.querySelector('a');
    link.addEventListener('click', () => {
        changeActiveItem();
        link.classList.add('active');

    })
})

//show more in  about section

const readMoreBtn=document.querySelector('.read-more');
const readMoreContent=document.querySelector('.read-more-content') ;
const showMore=document.querySelector('.show-more ')
readMoreBtn.addEventListener('click', () =>{
    readMoreContent.classList.toggle('show-content');
    if(readMoreContent.classList.contains('show-content')){
        readMoreBtn.textContent='Show Less';
    }
    else{
        readMoreBtn.textContent='Show More';
    }

})

/* skills*/

const skillItems=document.querySelectorAll('section.skills .skill');

skillItems.forEach(skill => {
    skill.querySelector('.head').addEventListener('click', () => {
        skill.querySelector('.items').classList.toggle('show-items');
    })
})

/* adding box shadow*/

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('show-box-shadow', window.scroll > 0);
})

























