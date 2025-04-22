import { useEffect, useState } from 'react';
import { AutoModel } from '../../model/AutoModel';
import allAutos from '../../api/auto/AllAutos';
import { AutoTable } from '../../components/autoTable/AutoTable';

export const AutosPage = () => {
    const [autos, setAutos] = useState<AutoModel[]>([]);

    useEffect(() => {
        const fetchAutos = async () => {
            const autosData = await allAutos();
            setAutos(autosData);
        };
        fetchAutos();
    }, []);

    return (
        <div>
            <h2> Lista De Autos</h2>
            <AutoTable autos={autos} />
        </div>
    );
};
