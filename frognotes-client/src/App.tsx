import Home from '@/pages/Home';

import { useRoutes } from 'react-router-dom';
import Note from '@/pages/Note';
import { ModeToggle } from './components/ui/mode-toggle';

function App() {
    const element = useRoutes([
        {
            path: '/',
            element: <Home />,
        },
        {
            path: '/createnote',
            element: <Note />,
        },
    ]);

    return (
        <div className="relative ">
            <ModeToggle />
            {element}
        </div>
    );
}

export default App;
