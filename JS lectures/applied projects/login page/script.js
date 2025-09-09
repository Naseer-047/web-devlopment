 function onSubmit(){
         let userName = document.getElementById('username').value;
         let password = document.getElementById('password').value;

         if (userName==='xyz' && password==='x') {
         alert('login sucessful')
          document.getElementById('msg')
        msg.innerText=' ✅Login success full';
          msg.style.color='green'
            // document.getElementById('box').style.display = 'none';
         } else {
           
            document.getElementById('msg')
        msg.innerText='❌ Wrong Username or Password';
          msg.style.color='red'
         }
         
        }
      