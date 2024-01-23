import {BrowserRouter, Route, Routes} from "react-router-dom";
import Flashcard from "./components/flashcard/Flashcard.jsx";
import {SupabaseProvider} from "./context/SupabaseContext.jsx";
import MainLayout from "./layout/MainLayout.jsx";

function Router() {
    return (
        <SupabaseProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainLayout/>}>
                        <Route index element={<Flashcard/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </SupabaseProvider>
    )
}

export default Router