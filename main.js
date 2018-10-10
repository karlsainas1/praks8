let numberImput = document.getElementById('numberInput');
let response =  document.getElementById('response');

numberImput.addEventListener('input', event =>{

 
      let number = numberInput.value;
      
      if(number != ''){
    
        
          fetch('http://numbersapi.com/'+number)
                .then(response => response.text())
                    .then(data => {
       
                    response.innerText = data;
     })
      
          
    
      }
    
    
})
                             
                             
                             
                             
                             
                             
   
                             
                             
                             
                             
                             
    /* fetch('http://numbersapi.com/'+number)
        .then(response => response.text())
        .then(data => {
         
          factText.innerText = data;
          
          
          */