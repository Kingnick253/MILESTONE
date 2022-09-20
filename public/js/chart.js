const bOne = document.getElementById("btnOne");
const bTwo = document.getElementById("btnTwo");
const bThree = document.getElementById("btnThree");
const bFour = document.getElementById("btnFour");
const bFive = document.getElementById("btnFive");
const pieChart = document.getElementById("pieChart");
const defaultVals = ["red", "red", "red", "red", "red"];
const pieSiceSize = [5,5,5,5,5];
let myChart = '';




        //function that render the pie chart to page
          function createPieChart() {
            const ctx = document.getElementById('myChart').getContext('2d');
                myChart = new Chart(ctx, {
                    type: 'pie',
                    data: {
                        labels: ["Tasks 1", "Tasks 2", "Tasks 3", "Tasks 4", "Tasks 5"],
                        datasets: [{
                            label: 'Number of Tasks',
                            data: pieSiceSize,
                            backgroundColor: defaultVals,
                            borderColor: ["black", "black", "black", "black", "black"],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        responsive: true,
                        plugins: {
                        legend: {
                            display: false,
                        },
                        },
                    },
                });
              //This function will update the pie chart with the users data taking from the data base.
            function updateChart() {
              async function fetchData() {
                const response = await fetch("/api/tasks");
                // wait until the request is complete
                const datapoints = await response.json();
                console.log(datapoints);
                return datapoints;
                
              }
              fetchData().then((datapoints) => {
                const title = datapoints.map(function (index) {
                  return index.title;
                });
            
                // const description = datapoints.map(function (index) {
                //   return index.description;
                // });
            
                console.log(title);
                
                myChart.config.data.labels = title;
                
              
                myChart.update();
              });
            }

            const datapoints = updateChart();
            console.log(datapoints);
            
          }
          // Event listner to create pieChart
          pieChart.addEventListener("click", createPieChart);
          // Each these functions will change a specific slice of on the pieChart to green(So when the user is done with the task they can log there progession.) 
          function updateBtnOne(){
            myChart.data.datasets[0].backgroundColor.splice(0,1, "green");
            myChart.update();
          }
          function updateBtnTwo(){
            myChart.data.datasets[0].backgroundColor.splice(1,1, "green");
            myChart.update();
          }
          function updateBtnThree(){
            myChart.data.datasets[0].backgroundColor.splice(2,1, "green");
            myChart.update();
          }
          function updateBtnFour(){
            myChart.data.datasets[0].backgroundColor.splice(3,1, "green");
            myChart.update();
          }
          function updateBtnFive(){
            myChart.data.datasets[0].backgroundColor.splice(4,1, "green");
            myChart.update();
          }