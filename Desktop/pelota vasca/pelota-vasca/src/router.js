import { createBrowserRouter } from "react-router-dom";
import PrincipalPagina from "./paginas/principal/PrincipalPagina";
import ConvocatoriasPagina from "./paginas/convocatorias/ConvocatoriasPagina";

export default createBrowserRouter([
    {
        path: '/',
        element:<PrincipalPagina/>
    },
    {
        path:'/ConvocatoriasPagina',
        element:<ConvocatoriasPagina/>
    }
])