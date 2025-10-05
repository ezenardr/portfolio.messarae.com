import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { routes } from './allRoutes'
import Layout from '../Layout/Index'

const Routing = () => {
    return (
        <React.Fragment>
            <Routes>
                {(routes || []).map((item, key:number) => (
                    <Route key={key} path={item.path} element={
                        <Layout> 
                            {item.component}
                        </Layout>
                    } />
                ))}
            </Routes>
        </React.Fragment>
    )
}

export default Routing


