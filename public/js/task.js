const taskFormHandler = async (event) => {
    event.preventDefault();
  
    const taskTitle = document.querySelector('#Task Title').value.trim();
    const taskDescription = document.querySelector('#Task Description').value.trim();
    
  
    if (taskTitle && taskDescription) {
      const response = await fetch('/api/tasks', {
        method: 'POST',
        body: JSON.stringify({ taskTitle,taskDescription}),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to create new task.');
      }
    }
  };
  
  document
    .querySelector('.task')
    .addEventListener('Next', taskFormHandler);