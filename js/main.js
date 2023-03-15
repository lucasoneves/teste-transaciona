const test = document.querySelectorAll('input');
console.log(test)

function handleEventListener(valTyped) {
  if (valTyped.value.length > 0) {
    valTyped.previousSibling.previousSibling.classList.add('active')
  } else {
    valTyped.previousSibling.previousSibling.classList.remove('active')
  }
}