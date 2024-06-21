var NewItem =document.getElementById("todo-input");
var list = document.getElementById("todo-list");
var btnAdd = document.getElementById("add-item");
var btnUpdate = document.getElementById("update-item");
var CurrentInputValue='';

 function NewElementInput(){
  var newListElement=document.createElement("li");
    var textNode=document.createTextNode(CurrentInputValue);
    newListElement.appendChild(textNode);
    newListElement.id="item" + (list.childElementCount + 1);
    list.appendChild(newListElement);
 }
NewItem.addEventListener("input",function(e){
CurrentInputValue=e.target.value;
});
 btnAdd.addEventListener("click",function(){
  if(CurrentInputValue !== undefined && CurrentInputValue !== "" && CurrentInputValue !==null){
    newListElement= NewElementInput();
    console.log(newListElement)
    console.log(list.childElementCount);
    NewItem.value='';
    CurrentInputValue='';}
 });
btnUpdate.addEventListener("click",function(){
  var Replaced=NewElementInput();
  var FirstElement=list.firstElementChild;
  list.replaceChild(Replaced ,FirstElement);
});