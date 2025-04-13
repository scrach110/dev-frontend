import React from 'react';
import { AutoModel } from '../../model/AutoModel';

export const AutoRow: React.FC<{ auto: AutoModel }> = ({ auto }) => {
    return (
        <tr>
            <td>{auto.marca}</td>
            <td>{auto.modelo}</td>
            <td>{auto.año}</td>
            <td>{auto.patente}</td>
        </tr>
    );
};
