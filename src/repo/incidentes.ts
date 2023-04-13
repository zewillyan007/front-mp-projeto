import { api } from 'src/boot/axios';
import { GetAllIncidentesResp } from './models/incidentes';
import { AxiosResponse } from 'axios';

export async function getAllIncidentes() {
  let resp: AxiosResponse<GetAllIncidentesResp>;

  try {
    resp = await api.get<GetAllIncidentesResp>(
      'http://ec2-3-14-134-94.us-east-2.compute.amazonaws.com:5900/incidences'
    );
  } catch (error) {
    // code

    return null;
  }

  return resp;
}
