$(document).ready(function(){
    $("div#des").hide();
    $("img#design,div#des").click(function(){
        $("div#des,img#design").toggle();
    })
    $("div#dev").hide();
    $("img#development,div#dev").click(function(){
        $("div#dev,img#development").toggle();
    })
    $("div#prod").hide();
    $("img#product,div#prod").click(function(){
        $("div#prod,img#product").toggle();
    })
})

function handleSubmit() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    console.log(name)
    console.log(email)
    console.log(message)
    
    
}
  
  handleSubmit()
  document.getElementById("btn").addEventListener("click",function(){
  alert("We have received your message.Thank you for reaching out")
     
  
 })

