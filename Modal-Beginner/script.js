var openBtn = document.querySelector("#open-btn");
var modal = document.querySelector('.modal-container');
var closeBtn = document.querySelector('#close-btn')

openBtn.addEventListener('click', ()=>{
    modal.style.display = "block";
})

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if(e.target === modal){
    modal.style.display = "none";
  }
});
