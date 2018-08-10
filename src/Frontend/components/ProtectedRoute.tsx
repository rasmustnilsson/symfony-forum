import * as React from 'react'
import { Route, Redirect } from 'react-router-dom'

export default (props: any) => {
    return <Route { ...props } render={() => {
        if(props.auth.isAuthenticated) return <props.protectedProp />
        return <Redirect to='/login' />
    }} />
}