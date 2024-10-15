
const Alert = (response) => {
    //console.log(response.msg.message);
    let status = response.msg.status;
    if(status == 1){
        return (
            <div>
                <div className="alert alert-success" role="alert">{ response.msg.message }</div>
                <br/>
            </div>
        );
    }else if(status == 0){
        return (
            <div>
                <div className="alert alert-danger" role="alert">{ response.msg.message }</div>
                <br/>
            </div>
        );
    }else{
        return (
            <div>

            </div>
        );
    }
    
}

export default Alert;