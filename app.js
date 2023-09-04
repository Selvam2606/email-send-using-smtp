const fname=document.getElementById('fname');
const lname=document.getElementById('lname');
const email=document.getElementById('email');
const message=document.getElementById('message');
const phone=document.getElementById('phone');
const submit=document.getElementsByClassName('form-contact')[0];
 
submit.addEventListener('submit',(e)=>{
     e.preventDefault();
     //console.log("clicked");
     let ebody = `
     <h1>First Name: </h1>${fname.value}
     <br>
     <h1>Last Name: </h1>${lname.value}
     <br>
     <h1>phone: </h1>${phone.value}
     <br>
     <h1>Message: </h1>${message.value}
     `;

     Email.send({
          SecureToken : "56bc1845-ed55-402b-a3ee-4a00e8ebf567",
          To : 'abc@gmail.com',
          From : "xyz@gmail.com",
          Subject : "Testing email"+email.value,
          Body : ebody
      }).then(
          //console.log("Clicked");
        message => alert("mesage sucessfully send")
      );
});  