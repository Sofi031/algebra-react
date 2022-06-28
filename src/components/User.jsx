import { Avatar } from "./Avatar";

export function User(props){
    return(
        <>
            <Avatar src={props.src} alt={props.alt}></Avatar>
            <p>{props.username}</p>
        </>
        
        )
}