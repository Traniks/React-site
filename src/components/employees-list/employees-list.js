import EmployeesListItem from "../employees-list-item/employees-list-item";
import "./employees-list.css";

const EmployeesList = ({data, onDelite}) => {

    const elements = data.map(item => {
        const {id, ...itemprops} = item
        return (
            <EmployeesListItem 
                key={id} 
                {...itemprops}
                onDelite={() => onDelite(id)} />
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;