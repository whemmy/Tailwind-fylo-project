const themeToggleBtn = document.querySelector('#theme-toggle')
const themeToggleDark = document.querySelector('#theme-toggle-dark-icon')
const themeToggleLight = document.querySelector('#theme-toggle-light-icon')


if (
 localStorage.getItem('color-theme') === 'dark' ||
 (!('color-theme' in localStorage) &&
  window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
 // show Light icon
 themeToggleLight.classList.remove('hidden')
} else {
 themeToggleDark.classList.remove('hidden')
}

themeToggleBtn.addEventListener('click', toggleMode)


function toggleMode() {
 //Toggle icon
 themeToggleDark.classList.toggle('hidden')
 themeToggleLight.classList.toggle('hidden')

 if (localStorage.getItem('color-theme')) {
  //if light, make dark and save in local storage
  if (localStorage.getItem('color-theme') === 'light') {
   document.documentElement.classList.add('dark')
   localStorage.setItem('color-theme', 'dark')
  } else {
   document.documentElement.classList.remove('dark')
   localStorage.setItem('color-theme', 'light')

  }
 } else {
  // if not in localStorage
  if (document.documentElement.classList.contains('dark')) {
   document.documentElement.classList.remove('dark')
   localStorage.setItem('color-theme', 'light')

  } else {
   document.documentElement.classList.add('dark')
   localStorage.setItem('color-theme', 'dark')

  }
 }
}
