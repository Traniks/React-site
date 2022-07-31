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
                {name: "Mr.Van", salary: 300, increase: true, rise: true, id: 1},
                {name: "Danny Lee", salary: 200, increase: false, rise: false, id: 2},
                {name: "Billy Herrington", salary: 1000, increase: false, rise: false, id: 3}
            ],
            term: "",
            filter: "all"
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

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSeacrh = (term) => {
        this.setState({term})
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case "rise":
                return items.filter(item => item.rise)
            case "300$":
                return items.filter(item => item.salary >= 300)
            default:
                return items
        }
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    render() {
        const {data, term, filter} = this.state
        const allSlaves = data.length;
        const fistingSlaves = data.filter(item => item.increase).length;
        const visibleData = this.filterPost(this.searchEmp(data, term), filter);

        return (
            <div className="app">
                <AppInfo 
                allSlaves={allSlaves}
                fistingSlaves={fistingSlaves}/>

                <div className="search-panel">
                    <SearchPanel
                    onUpdateSeacrh={this.onUpdateSeacrh}/>
                    <AppFilter filter={filter}
                    onFilterSelect={this.onFilterSelect}/>
                </div>

                <EmployeesList 
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}/>
                <EmployeesAddForm 
                onAdd={this.addItem}/>
            </div>
        );
    }

}

export default App;