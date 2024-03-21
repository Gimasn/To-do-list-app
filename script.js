

//menangkap objek input sebagai kolom ketikan
const inputBox = document.getElementById('input-box')


//menangkap objek ul sebagai wadah li(catatan)
const listContainer = document.getElementById('list-container')


//function event handler
function addTask(){
if (inputBox.value === ''){

alert('write something')

}else {

let li = document.createElement('li')

li.innerHTML = inputBox.value;
listContainer.appendChild(li);


let span = document.createElement('span')


span.innerHTML = "\u00d7";
li.appendChild(span);
}
 inputBox.value = '';
}

//end function

//function event handling checkout & delete
listContainer.addEventListener("click", function(e){
if (e.target.tagName === 'LI'){
e.target.classList.toggle("checked");

}else if (e.target.tagName === "SPAN"){

	e.target.parentElement.remove();
}


}, false);

//end function

//mulai code save data

function saveData(){
localStorage.setItem("data", listContainer.innerHTML)
}



 function showTask(){

lisContainer.innerHTML = localStorage.getItem("data")

 }


//akhir code save data