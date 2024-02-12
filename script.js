const article = document.querySelector('.main__question')
const menu = document.querySelector('.header__burger')
const burgerImg = document.querySelector('.header__burger img')
const nav = document.querySelector('.header__nav')
const styles = window.getComputedStyle(nav)
const popUp = document.querySelector('.pop-up')
const items = document.querySelectorAll('.main__item')
const cross = document.querySelector('.pop-up__cross')

// when page downloaded
if (window.innerWidth < 1201) {
	// article
	article.textContent = 'Мы поможем справиться с расстройствами и зависимостями любой тяжести'
	article.style = 'margin-left: 0px; text-align: left; max-width: 75%; color: #FFFFFF;'

	// bg
	const block = document.querySelector('.main__problems')
	const bg = document.createElement('div')

	bg.id = 'bg'
	bg.style = 'width: 100%; height: 100%; position: absolute; left: 0px; top: 0px; content: ""; background-color: #7c7ce3; z-index: -1;'
	bg.style.left = `${(Math.floor(window.innerWidth - block.offsetWidth) / 2) * -1}px`
	bg.style.width = `${window.innerWidth - (window.innerWidth - document.documentElement.clientWidth)}px`

	block.append(bg)
}

if (window.innerWidth < 993) {
	article.style.maxWidth = '100%'
}

if (window.innerWidth < 577) {
	const phone = document.querySelector('.header__phone')
	nav.appendChild(phone)
}

// event resize
addEventListener('resize', e => {
	if (window.innerWidth < 1201) {
		// article
		article.textContent = 'Мы поможем справиться с расстройствами и зависимостями любой тяжести'
		article.style = 'margin-left: 0px; text-align: left; max-width: 75%; color: #FFFFFF;'

		if (document.querySelector('#bg')) {
			// bg
			const block = document.querySelector('.main__problems')

			bg.style.left = `${(Math.floor(window.innerWidth - block.offsetWidth) / 2) * -1}px`
			bg.style.width = `${window.innerWidth - (window.innerWidth - document.documentElement.clientWidth)}px`
		} else {
			const block = document.querySelector('.main__problems')
			const bg = document.createElement('div')

			bg.id = 'bg'
			bg.style = 'width: 100%; height: 100%; position: absolute; left: 0px; top: 0px; content: ""; background-color: #7c7ce3; z-index: -1;'
			bg.style.left = `${(Math.floor(window.innerWidth - block.offsetWidth) / 2) * -1}px`
			bg.style.width = `${window.innerWidth - (window.innerWidth - document.documentElement.clientWidth)}px`

			block.append(bg)
		}
	} else {
		// article
		article.innerHTML = 'С какими проблемами <span class="main__highlight">сложно справиться?</span>'
		article.style = ' text-align: right; margin-left: auto; max-width: 429px;'

		const span = document.querySelector('.main__highlight')
		span.style = 'font-weight: 700; color: #7c7ce3;'

		// bg
		if (document.querySelector('#bg')) {
			document.querySelector('#bg').remove()
		}
	}

	const nav = document.querySelector('.header__nav')
	const styles = window.getComputedStyle(nav)

	if (window.innerWidth < 993) {
		article.style.maxWidth = '100%'

		menu.style = 'display: flex;'

		// bg menu
		if (styles.display == 'block') {
			document.querySelector('#bgMenu').remove()
			document.querySelector('#noActiveBg').remove()
		}

		// burgerMenu
		nav.style = 'display: none'
		document.body.style.overflow = 'visible'

		// burger / cross
		burgerImg.src = 'img/burger.svg'
		menu.style = 'display: flex; align-items: center; margin-left: 20px; z-index: 3; top: 20px;'
	}

	if (window.innerWidth > 993 && styles.display == 'none') {
		nav.style = 'display: flex'
		menu.style = 'display: none;'
	}

	if (window.innerWidth < 577 && nav.lastChild.tagName != 'A') {
		const phone = document.querySelector('.header__phone')
		nav.appendChild(phone)
	} else if (window.innerWidth > 577 && nav.lastChild.tagName == 'A') {
		const phone = document.querySelector('.header__phone')
		nav.after(phone)
	}
})

menu.addEventListener('click', e => {
	if (styles.display == 'none') {
		nav.style = 'display: block'

		// bg menu
		const bgMenu = document.createElement('div')
		bgMenu.id = 'bgMenu'
		const noActiveBg = document.createElement('div')
		noActiveBg.id = 'noActiveBg'

		bgMenu.style = `position: fixed; top: 0px; left: 0px; width: ${window.innerWidth < 577 ? '100%' : '50%'}; height: 100%; background-color: #7c7ce3; z-index: 2`
		noActiveBg.style = 'position: fixed; top: 0px; left: 0px; width: 100%; height: 100%; background-color: #2b2b2b; z-index: 1; opacity: 0.5'

		document.body.append(bgMenu, noActiveBg)
		document.body.style.overflow = 'hidden'

		// burger / cross
		burgerImg.src = 'img/cross.svg'
		menu.style = `margin-left: 0px; position: fixed; left: ${
			window.innerWidth < 577 ? Math.floor(window.innerWidth - burgerImg.width - 20) : Math.floor(window.innerWidth / 2 - burgerImg.width - 20)
		}px`
	} else if (styles.display == 'block') {
		nav.style = 'display: none'

		// bg menu
		document.querySelector('#bgMenu').remove()
		document.querySelector('#noActiveBg').remove()

		document.body.style.overflow = 'visible'

		// burger / cross
		burgerImg.src = 'img/burger.svg'
		menu.style = 'display: flex; align-items: center; margin-left: 20px; z-index: 3; top: 20px;'
	}
})

items.forEach(item => {
	item.addEventListener('click', () => {
		popUp.style.display = 'block'
		document.body.style.overflow = 'hidden'
	})
})

cross.addEventListener('click', () => {
	popUp.style.display = 'none'
	document.body.style.overflow = 'visible'
})
