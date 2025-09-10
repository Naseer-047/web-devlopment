 function onSubmit(){
         let userName = document.getElementById('username').value;
         let password = document.getElementById('password').value;

         if (userName==='admin' && password==='123') {
         alert('login sucessful')
          document.getElementById('msg')
        msg.innerText=' ✅Login success full';
          msg.style.color='green'
            document.getElementById('box').style.display = 'none';
            document.getElementById('cb').style.display = 'block';
            document.getElementById('use').innerText=userName;
            document.getElementById('pass').innerText=password;
         } else {
           
            document.getElementById('msg')
        msg.innerText='❌ Wrong Username or Password';
          msg.style.color='red'

        
         
         }
         
        }
      