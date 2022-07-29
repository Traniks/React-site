import {Component} from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css"

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: "Mr.Van", salary: 300, increase: false, like: true, id: 1},
                {name: "Danny Lee", salary: 200, increase: true, like: false, id: 2},
                {name: "Billy Herrington", salary: 1000, increase: false, like: false, id: 3}
            ]
        }
        this.maxId = 4
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            like: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }

    render() {
        const allSlaves = this.state.data.length;
        const fistingSlaves = this.state.data.filter(item => item.increase).length;
        return (
            <div className="app">
                <AppInfo 
                allSlaves={allSlaves}
                fistingSlaves={fistingSlaves}/>

                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>

                <EmployeesList 
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}/>
                <EmployeesAddForm 
                onAdd={this.addItem}/>
            </div>
        );
    }

}

export default App;