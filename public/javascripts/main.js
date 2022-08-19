const elBody = document.querySelector('.js-body')
const elNavItems = document.querySelectorAll('.js-nav-item')
const currentPage = elBody.dataset.page

// 判斷目前是哪一頁
elNavItems.forEach((elNavItem) => {
  const page = elNavItem.dataset.page

  if (currentPage === page) {
    elNavItem.classList.add('active')
  }
})
