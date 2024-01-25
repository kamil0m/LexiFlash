import ListFlashcards from "./components/flashcard/ListFlashcards.jsx";
import Trainer from "./components/flashcard/Trainer.jsx";
import {SupabaseProvider} from "./context/SupabaseContext.jsx";
// import MainLayout from "./layout/MainLayout.jsx";
import {
    BrowserRouter,
    Route,
    Routes,
    Link,
    NavLink
} from "react-router-dom";

function Router() {
    return (
        <SupabaseProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<ListFlashcards />} />
                    <Route path='learn' element={<Trainer />} />
                </Routes>
            </BrowserRouter>
        </SupabaseProvider>
    )
}

export default Router