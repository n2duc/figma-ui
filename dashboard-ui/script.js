const allSideMenu = document.querySelectorAll('#sidebar .side-menu li a');
allSideMenu.forEach(item => {
    const li = item.parentElement;
    item.addEventListener('click', () => {
        allSideMenu.forEach(i => {
            i.parentElement.classList.remove('active');
        })
        li.classList.add('active');
    });
});

const menuBar = document.querySelector('.menu-btn');
const sideBar = document.getElementById('sidebar');

menuBar.addEventListener('click', () => {
    sideBar.classList.toggle('hidden');
})

const searchBtn = document.querySelector('.search-btn');
const searchBtnIcon = document.querySelector('.search-btn .bx');
const searchForm = document.querySelector('nav form');
searchBtn.addEventListener('click', (e) => {
    if (window.innerWidth < 576) {
        e.preventDefault();
        searchForm.classList.toggle('show');
        if (searchForm.classList.contains('show')) {
            searchBtnIcon.classList.replace('bx-search', 'bx-x');
        } else {
            searchBtnIcon.classList.replace('bx-x', 'bx-search');
        }
    }
})

if (window.innerWidth < 768) {
    sideBar.classList.add('hidden');
} else if (window.innerWidth > 576) {
    searchBtnIcon.classList.replace('bx-x', 'bx-search');
    searchForm.classList.remove('show');
}

window.addEventListener('resize', () => {
    if (this.innerWidth > 576) {
        searchBtnIcon.classList.replace('bx-x', 'bx-search');
        searchForm.classList.remove('show');
    }
})