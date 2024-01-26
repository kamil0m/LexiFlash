import ListFlashcards from "./components/flashcard/ListFlashcards.jsx";
import Trainer from "./components/flashcard/Trainer.jsx";
import Test from "./components/flashcard/Test.jsx";
import {SupabaseProvider} from "./context/SupabaseContext.jsx";
import MainLayout from "./layout/MainLayout.jsx";
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
                        <Route path='/' element={<ListFlashcards />} />
                        <Route path='/learn' element={<Trainer />} />
                        <Route path='/test' element={<Test />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </SupabaseProvider>
    )
}

export default Router