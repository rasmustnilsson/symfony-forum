import * as React from 'react'

export default (props: Category) => {
  return (
    <div>
        <div className="card col">
            <div className="card-body">
                <h5 className="card-title">{ props.name }</h5>
                <span className="card-text">{ props.description }</span>
            </div>
        </div>
    </div>
  )
}
