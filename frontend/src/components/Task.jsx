import "../styles/manage_task.css"
const Task = ({title,description,status}) => {
  console.log(status);
  
  
  return (
    <div className={`task ${status?"completed":"not_completed"}`} >
      <span className="detail_1 details">{title}</span>
    {description && <p>{description}</p>}
     {status?"":<button className="status_btn btn">Completed</button>}
      {!status?"":<button className="dlt_btn btn">Remove</button>}
    </div>
  )
}

export default Task