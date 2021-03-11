

function Plan(props) {
    return <>
        
            <div className="row">
                <li className="text-white shadow p-2 my-2 col-sm-9">
                    {props.value}
                </li>
                <button onlick={ ()=>{props.sendData(props.id) }} className="btn btn-danger my-2 col-sm-2 offset-1">X</button>
          </div>
        
    </>
}


export default Plan;