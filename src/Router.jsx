import {SupabaseProvider} from "./context/SupabaseContext.jsx";
import MainLayout from "./layout/MainLayout.jsx";
import Editor from "./components/flashcard/Editor.jsx";
import Trainer from "./components/flashcard/Trainer.jsx";
import LandingPage from "./components/flashcard/LandingPage.jsx";
import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";

function Router() {
    return (
        <SupabaseProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route path='/' element={<LandingPage />} />
                        <Route path='/learn' element={<Trainer />} />
                        <Route path='/editor' element={<Editor />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </SupabaseProvider>
    )
}

export default Router