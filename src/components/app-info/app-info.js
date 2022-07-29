import "./app-info.css"

const AppInfo = ({allSlaves, fistingSlaves}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудноков в CumПании</h1>
            <h2>Общее число slaves: {allSlaves}</h2>
            <h2>Fisting получат: {fistingSlaves}</h2>
        </div>
    )
}

export default AppInfo;