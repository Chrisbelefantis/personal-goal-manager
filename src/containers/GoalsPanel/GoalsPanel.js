import React, { Component } from 'react'
import classes from './GoalsPanel.module.css'
import GoalSet from '../../components/GoalDisplay/GoalSet/GoalSet'

class GoalsPanel extends Component {

    state = {

        categories: [
            {
                title: "Finance",
                content: [
                    {
                        title: "Do taxes",
                        isChecked: false,
                        isExpanded: false,
                        id: 1
                    },
                    {
                        title: "Invest to Stock Market",
                        isChecked: false,
                        isExpanded: false,
                        id: 2
                    },
                    {
                        title: "Invest to Stock Market",
                        isChecked: false,
                        isExpanded: false,
                        id:3
                    }
                ],
            }
            ,
            {
                title: "Job",
                content: [
                    {
                        title: "Finish Project Review",
                        isChecked: false,
                        isExpanded: false,
                        id:4
                    }
                    ,
                    {
                        title: "Start React Project",
                        isChecked: false,
                        isExpanded: false,
                        id:5
                    }
                ]
            }
        ]
        ,
        count: 5
    };



    goalCheckToggle=(category,id)=>{

        let categoryIndex = this.state.categories.findIndex(categ=>{
            return categ.title === category
        });
     
        let goalIndex = this.state.categories[categoryIndex].content.findIndex(goal=>{
            return goal.id === id
        });

        let categories = [...this.state.categories];

        categories[categoryIndex].content[goalIndex].isChecked = !categories[categoryIndex].content[goalIndex].isChecked
        
        this.setState({
            categories: categories
        });
   

    };

    goalExpandToggle=(category,id)=>{

        let categoryIndex = this.state.categories.findIndex(categ=>{
            return categ.title === category
        });
     
        let goalIndex = this.state.categories[categoryIndex].content.findIndex(goal=>{
            return goal.id === id
        });

        let categories = [...this.state.categories];

        categories[categoryIndex].content[goalIndex].isExpanded = !categories[categoryIndex].content[goalIndex].isExpanded
        
        this.setState({
            categories: categories
        });


    }


    render(){
    
        let content =  this.state.categories.map(categ=>{ 
            return (
                    <GoalSet 
                    key = {categ.title}
                    category = {categ.title}
                    goals = {categ.content}
                    checked={this.goalCheckToggle}
                    expanded={this.goalExpandToggle}/>
                );
        });


        return(
            <div className={classes.GoalsPanel}>
                {content}
            </div>

        );

    }

}


export default GoalsPanel;