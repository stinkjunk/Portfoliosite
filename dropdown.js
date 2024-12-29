const dropdowns = document.querySelectorAll('article.dropdown');
dropdowns.forEach(dropdown => {
    const dropbtn = dropdown.querySelector('.dropbtn');
    const content = dropdown.querySelector('.content');
    const top = dropdown.querySelector('.top');
    dropbtn.addEventListener('click', dropDownClick)
    function dropDownClick() {
        content.classList.toggle("active");
        if (content.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + 'px';
        } else {
            content.style.maxHeight = '0';
        }
        dropbtn.classList.toggle("active");
        top.classList.toggle("active");
        
    }

});