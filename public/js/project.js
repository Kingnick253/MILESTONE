const projectFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#projectTitle').value.trim();
    const description = document.querySelector('#projectDescription').value.trim();
    
  
    if (title && description) {
        const response = await fetch('/api/projects', {
          method: 'POST',
          body: JSON.stringify({ title, description}),
          headers: { 'Content-Type': 'application/json' },
        });
    
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to create new Project.');
      }
    }
  };
  
  document
    .querySelector('#create_project')
    .addEventListener('click', projectFormHandler);