/* eslint-disable react/prop-types */
import './Post.css'

export function Post( props ) {
    return (
        <div>
            <strong>
                {props.autor}
            </strong>
            <p>{props.content}</p>
        </div>
    )

}