import React from 'react';
import { Line, Pie } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs';


class App extends React.Component {

    
    constructor(props) {

        super(props);

        this.state = {
            items: [],
            isLoaded: false
        }

    }

  
    componentDidMount() {

        fetch('https://radiant-cliffs-37619.herokuapp.com/user/allUsers')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json,
                    isLoaded: true, 
                })
            }).catch((err) => {
                console.log(err);
            });
        
          
    }

   
    render() {

        const { isLoaded, items } = this.state;

        var data = this.state.items;
        var genders = this.state.items.map(item => item.gender);
        var birth = this.state.items.map(item => item.birthYear);

        var male = 0;
        var female = 0;
        var others = 0;
        for (let i = 0; i < genders.length; i++) {
          if (genders[i]=== 'Male' || genders[i]==='male') male++ ;
          else if(genders[i]==='Female' || genders[i]=== 'female') female++;
          else others++;
          

        }
      
        var young= 0;
        var old = 0;
        var senior = 0;
        for(let i = 0; i < birth.length; i++){
          if(18 <= 2021-birth[i] <= 44) young++;
          if(45 <= 2021-birth[i] <= 60) old++;
          if(2021-birth[i]>60) senior++;
        }



        return (
            <div className="App">
{/* 
                <Pie
                data = {{
                  labels: ['Male', 'Female', 'Others'],
                  datasets: [
                    {
                      label: 'Gender count',
                      data: [male, female, others],
                      backgroundColor: ['red','blue', 'green'],
                      borderColor: ['red', 'blue', 'green'],
                      borderWidth: 1,
                    },
                  ]


                }}
                height={300}
                width={10}
                options={{
                  maintainAspectRatio: false,

                }}
                />
 */}

                <Doughnut 
                data = {{
                  labels: ['18-44', '45-60' ,'60+'],
                  datasets: [
                    {
                      label: 'Age distribution',
                      data: [young, old, senior],
                      backgroundColor: ['red','blue', 'green'],
                      borderColor: ['red', 'blue','green'],
                      borderWidth: 1,
                    },
                  ]


                }}
                height={300}
                width={100}
                options={{
                  maintainAspectRatio: false,


                }}/>
                
                
                
            </div>

        );

                      
      }
    
    


    
}



export default App;