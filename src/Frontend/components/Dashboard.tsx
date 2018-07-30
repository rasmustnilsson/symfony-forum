import * as React from 'react'

export default (props: AuthProps) => {

  const { username, roles, numberOfPosts, numberOfComments  } = props.auth.user

  return (
    <div>
      <h1>{ username } </h1>
      <pre>roles: { roles.join(', ') }</pre>
      <p>Number of posts: { numberOfPosts }</p>
      <p>Number of comments: { numberOfComments }</p>
    </div>
  )

}