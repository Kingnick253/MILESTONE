// put this js file into public/js Then import a <script> on the handlebar for projectpage.

const router = require("../controllers/home-routes");
fetch('/api/tasks')
    .then((response )=> response.json)
    .then((data) => {})

// setup blcok(data, points, and labels)
    let tasksDone = is_done = false;
    let tasksTodo = is_done = true;
    
// //function that render the pie chart to page()
function createPieChart(){
    const pieSiceSize = 5
    const data = {
        labels: ['Tasks 1', 'Tasks 2', 'Tasks 3', 'Tasks 4', 'Tasks 5'],
        datasets: [{
            label: '# of Votes',
            // can set this a default value ie const pieSiceSize = 10
            data: [pieSiceSize, pieSiceSize, pieSiceSize,pieSiceSize,pieSiceSize],
            backgroundColor: [
                'red',
                'red',
                'green',
                'green',
                'red',
                
            ],
            borderColor: [
                'black',
                'black',
                'black',
                'black',
                'black',
                
            ],
            borderWidth: 1
        }]

    };
    // option block
       
            
    //config block
    const config = {
        type: 'pie',
        data,
        options: {
            plugins: {
                legend:{
                    display: false
                }
            }
        
        }

    };
    //render block(prints to page)
    const myChart = new Chart(
        document.getElementById('myChart'),
        config
    );
    //inside of function two variable that are going to create the two values
    
    //const tasksToodo = is_done = false;
    //const tasksDone = is_done = true;
}

// //function that is going to mark task as done
    function tasksComplete(){
        tasksDone = false;

        createPieChart();

    }
//     //change the is_done boolean from false to true
//     //call function to render pie chart
// //

// //function that will mark a task as not done
    function tasksInProgess(){



        createPieChart();

    }
//     //change the boolean is_done from true to false
//     //call function to render piechart