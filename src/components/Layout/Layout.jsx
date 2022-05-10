import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import { Nav, Link, Wrapper } from './Layout.styled'

export const Layout = () => {
    return (
        <Wrapper>
            <Nav>
                <Link to="/">Home</Link>
                <Link to="/movies">Movies</Link>
            </Nav>
            <Suspense fallback="">
                <Outlet />
            </Suspense>
            <Toaster />
        </Wrapper>
    )
}