var tblist=document.getElementById('tbl');

tblist.addEventListener("click",removeItem);
function removeItem(e){
  if(e.target.classList.contains("fa-trash")){
  e.target.parentElement.parentElement.parentElement.remove();
  }
}
