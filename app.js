const hamburgerButton = document.getElementById('hamburger')
var navList = document.getElementById('nav-list')
function toggleButton() {
    
    navList.classlist.toggle('show')
}


hamburgerButton.addEventListener('click', toggleButton)