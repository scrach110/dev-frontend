import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { PersonasPage } from '../pages/personaPages/PersonaPage';
import { AutosPage } from '../pages/autoPages/AutosPage';
import { EditarPersonaPage } from '../pages/personaPages/EditarPersonaPage';
import { PersonaValues } from '../pages/personaPages/PersonaValues';
import { AgregarPersonaPage } from '../pages/personaPages/AgregarPersonaPage';

export const AppRouter = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Home />} />
            <Route path="/persona/all" element={<PersonasPage />} />
            <Route path="/autos" element={<AutosPage />} />
            <Route path="/persona/:id" element={<PersonaValues />} />
            <Route path="/persona/:id/edit" element={<EditarPersonaPage />} />
            <Route path="/persona/add" element={<AgregarPersonaPage />} />
        </>
    )
);
