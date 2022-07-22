import "./app-filter.css"

const AppFilter = () => {
    return (
        <div className="btn-group">
            <button
                className="btn btn-light"
                type="button">
                    Все slaves
            </button>
            <button
                className="btn btn-outline-light"
                type="button">
                    Все slaves на звание Dungeon master
            </button>
            <button
                className="btn btn-outline-light"
                type="button">
                    Все slaves c 300$
            </button>
        </div>
    )
}

export default AppFilter;