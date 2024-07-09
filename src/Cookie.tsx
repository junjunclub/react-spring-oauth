import React from "react";
import {withCookies, ReactCookieProps} from "react-cookie";


interface Props extends ReactCookieProps{}
const CookieComponent: React.FC<Props> = ({cookies}) =>{

    const createHandler = () =>{
        cookies?.set("cookie","hello");
    }
    return(
        <div>
            <button onClick={createHandler}>쿠키 생성</button>
            <p>{cookies?.get("cookie")?cookies?.get("cookie"):"쿠키없음"}</p>
        </div>
    );
}

export default withCookies(CookieComponent);