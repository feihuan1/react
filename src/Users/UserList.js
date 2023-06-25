import Card from "../UI/Card";

import classes from "./UserList.module.css";

export default function UserList (props) {


    return(
        <Card className={classes.users}>
           <ul>
                {props.users.map((user,index) => (
                    <li key={index}>
                        {user.username} ({user.age} years old)
                    </li>
                ))}
           </ul>
        </Card>
    )
}