const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username').value.trim();
<<<<<<< HEAD
    //const email = document.querySelector('#email-signup').value.trim();
=======
    const email = document.querySelector('#email').value.trim();
>>>>>>> 0788302e69899d136de05810e59534707a0ed8d8
    const password = document.querySelector('#password').value.trim();
  
    if (username && password ) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/home');
      } else {
        alert('Failed to signup.');
      }
    }
  };
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);