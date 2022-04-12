const iSpinner = document.getElementById('iSpinner');
const iCRight = document.getElementById('iCRight');
let curBtn = document.getElementById('i1stBtn');
let curContent = document.getElementById('icr1');
curBtn.classList.add('active');
//
setTimeout(() => {
  iSpinner.remove();
  curContent.classList.add('active');
}, 2000);
//
document.addEventListener('click', (e) => {
  const clicked = e.target;
  if (clicked.hasAttribute('data-i') && clicked != curBtn) {
    // btn
    curBtn.classList.remove('active');
    curBtn = e.target;
    curBtn.classList.add('active');
    // content
    curContent.classList.remove('active');
    const targetId = clicked.getAttribute('data-i');
    curContent = document.getElementById('icr' + targetId);
    // action
    iCRight.appendChild(iSpinner);
    setTimeout(() => {
      iSpinner.remove();
      curContent.classList.add('active');
    }, 1000);
  }
});
