import { StandardResponse } from './standards';

export interface GridColum {
  sharkSpecies: string;
  sharkLength: string;
  sharkWeight: string;
  locationName: string;
  incidenceDateTime: string;
}

export interface GetAllIncidentesResp
  extends StandardResponse<GetAllIncidentes[]> {}
export interface GetAllIncidentes {
  Id: string;
  ChipNumber: string;
  MicrocontrollerSerialNumber: string;
  IncidenceDateTime: string;
  Shark: {
    Id: string;
    Species: string;
    Length: string;
    Weight: string;
    Sex: string;
    CreationDateTime: string;
    ChangeDateTime: string;
  };
  Microcontroller: {
    Id: string;
    IdLocation: string;
    SerialNumber: string;
    Model: string;
    Status: string;
    CreationDateTime: string;
    ChangeDateTime: string;
  };
  Location: {
    Id: string;
    Name: string;
    CreationDateTime: string;
    ChangeDateTime: string;
  };
}
