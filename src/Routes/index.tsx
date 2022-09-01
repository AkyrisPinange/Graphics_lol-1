import {BrowserRouter, Routes as ReactRoutes, Route, Navigate} from 'react-router-dom';
import Home from '@Pages/Home';

export default function Routes () : JSX.Element {
    return <BrowserRouter>
    <ReactRoutes>
        <Route path="/" element={<Navigate to="/app"/>} />
        <Route path="/app" element={<Home />}/>
    </ReactRoutes>
</BrowserRouter>;
};