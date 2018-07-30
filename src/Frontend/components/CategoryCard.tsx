import * as React from 'react'
import { Link } from 'react-router-dom'

export default (props: Categoryable) => {
  return (
    <div>
        <li className="list-group-item">
            <Link to={'/category/' + props.name} className="card-title">{ props.name }</Link>&nbsp;
            <span className="card-text">{ props.description }</span>&nbsp;
            <span className="card-text">{ props.postCount }</span>
        </li>
    </div>
  )
}
