import "./app-filter.css"

const AppFilter = (props) => {
    const buttonsData = [
        {name: "all", label: "Все сотрудники", colored: false},
        {name: "rise", label: "Все slaves на звание Dungeon master", colored: false},
        {name: "300$", label: "Все slaves c 300$", colored: true}
    ];

    const buttons = buttonsData.map(({name, label, colored}) => {
        const active = props.filter === name;
        const clazz = active ? "btn-light" : "btn-outline-light";
        return (
            <button
                className={`btn ${clazz}`}
                type="button"
                key={name}
                onClick={() => props.onFilterSelect(name)}>
                    {label}
            </button> 
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;