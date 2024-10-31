const pressData=(data)=>{

    output.value+=data

}


const clearData=()=>{
    output.value=""
    output.placeholder="0"
}


const backData=()=>{
    output.value=output.value.slice(0,-1)
}


const showResult=()=>{
    try{
        output.value=eval(output.value)
    }
    catch{
        output.value=""
        output.placeholder="invalid output"
    }
    finally{
        console.log("finally block");
        console.log("task completed");
        
        
    }
}


