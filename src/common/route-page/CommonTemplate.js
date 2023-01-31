
import { Fragment } from "react"
import { Route, Routes } from "react-router"
import { Layout } from "./Layout"


export default function CommonTemplate(props) {
    //Gắn lại giá trị Layout để set điều kiện hiển thị
    let SwapPages = Layout

    return (
        <Routes>
            {props.value.map((page, index) => {
                const Page = page.element
                if (page.layout === null) {
                    SwapPages = Fragment
                    return <Route
                        key={index}
                        path={page.path}
                        element={
                            <SwapPages>
                                <Page />
                            </SwapPages>
                        } />
                } else {
                    return <Route
                        key={index}
                        path={page.path}
                        element={
                            <SwapPages>
                                <Page />
                            </SwapPages>
                        } />
                }
            })}
        </Routes>
    )
}
