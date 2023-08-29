let subMenuBg = document.querySelector('.sub_menu_bg')
let menuItems = document.querySelectorAll('ul.menu>li')
let subMenus = document.querySelectorAll('ul.sub_menu')

function bgTranslate(id) {
  subMenuBg.style.height = `${subMenus[id].offsetHeight + 18}px`
  subMenuBg.style.left = `${id * 132}px`
}

menuItems.forEach((item, id) => {
  item.addEventListener('mouseover', () => {
    subMenuBg.classList.toggle('active')
    bgTranslate(id)
  })
  item.addEventListener('mouseout', () => {
    subMenuBg.classList.toggle('active')
    // subMenuBg.style.height = `0px`
  })
})