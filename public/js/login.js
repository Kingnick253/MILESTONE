const loginFormHandler = async (event) => {
  //event.preventDefault();

  const username = document.querySelector('#username').value.trim();
  const password = document.querySelector('#password').value.trim();

  console.log(username);
  console.log(password);

  if (username && password) {
    try{const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in.');
    }} catch(err){
      console.log(err);
    }
  }
};

console.log(document
  .querySelector('#submit')
);

document
  .querySelector('#submit')
  .addEventListener('click', loginFormHandler);
