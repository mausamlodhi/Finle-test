import React from "react";

interface ComponentProps {
    text:String;
    submit?: ()=> void;
    click?: ()=>void;
    data?: boolean|string
}
const Test:React.FC<ComponentProps>=(props)=>{

    return <>
        <div>
            <span>
                Hello
            </span>
            <br />
            <hr/>
            <button>Click button</button>
        </div>
    </>
};
export default Test;