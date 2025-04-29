import { AutoApi } from '../apiBase/AutoApi';

export const DeleateAuto = async (idAuto: string) => {
    const response = await AutoApi.delete(`/${idAuto}`);

    return response.status;
};
