let input = document.getElementById('input');
let button = document.getElementById('button1');
let container = document.getElementById('container1');
let containerResult = document.getElementById('placeholder1');

button.addEventListener('click', () => {


try{

    if(input.value === ""){
    
        div.style.display = 'none'
        delete1.style.display = 'none'

    
    }

    let div = document.createElement('div')
    div.textContent = input.value
    div.classList.add('result')
    containerResult.append(div)
    
     let delete1 = document.createElement('button');
     delete1.textContent ='❌'
    
     delete1.classList.add('newBtn')
     containerResult.append(delete1)
    input.value = ""


     delete1.addEventListener('click', () => {

  div.style.display = 'none'
        delete1.style.display = 'none'



     })

}
catch(error){

    
}





})