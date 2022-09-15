// put this js file into public/js Then import a <script> on the handlebar for projectpage.

// setup blcok(data, points, and labels)


// //function that render the pie chart to page()
function createPieChart(){
    const pieSiceSize = 5
    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Done'],
        datasets: [{
            label: '# of Votes',
            // can set this a default value ie const pieSiceSize = 10
            data: [pieSiceSize, pieSiceSize, pieSiceSize,pieSiceSize],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    
    };
    // option block
        const options = {
            plugins: {
                legend:{
                    display: false
                }
            }
        };
    //config block
    const config = {
        type: 'pie',
        data,
        options: {}
    
    };
    //render block(prints to page)
    const myChart = new Chart(
        document.getElementById('myChart'),
        config
    );
    //inside of function two variable that are going to create the two values
    const tasksDone = is_done = false;
    const tasksTodo = is_done = true;
    //const tasksToodo = is_done = false;
    //const tasksDone = is_done = true;
}

// //function that is going to mark task as done
//     //change the is_done boolean from false to true
//     //call function to render pie chart
// //

// //function that will mark a task as not done
//     //change the boolean is_done from true to false
//     //call function to render piechart


