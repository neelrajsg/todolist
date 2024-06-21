var AddItem =document.getElementById("add-item");
var UpdateItem =document.getElementById("update-item");
var RemoveItem=document.getElementById("remove-item");
var InputBox=document.getElementById("todo-input");
var list = document.getElementsById("todo-list");
var CurrentInputValue='';

AddItem.addEventListener("click",function(e){
    var newListElement = document.createElement("li");
    var TextNode=document.createTextNode(CurrentInputValue);
    newListElement.appendChild(TextNode);
    newListElement.id="item";
});