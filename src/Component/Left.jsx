import React from "react";

function Left(props){
    console.log(props.datas);
    return(
        <div className="left">
        {props.datas.map((data,index)=> { 



        return(
            <div  className="detail" id={"col"+index}>
            <h3>{data.heading}</h3>
            <h1>{data.subHeading}</h1>
            <p>{data.description}</p>
        </div>
        )

    }
        ) }  
        
        </div>
    

    );
}

export default Left;