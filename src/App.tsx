import React from 'react';
import {Routes, Route} from "react-router-dom";

import ImageListPage from "./components/pages/ImageListPage";
import ImageDetailPage from "./components/pages/ImageDetailPage";

function App() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<ImageListPage/>}/>
                <Route path='/detail/:id' element={<ImageDetailPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
