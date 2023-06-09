import { Http2ServerRequest } from "http2";
import { EnumTripDirection } from "./../../../../schemas/travels/travels";
import { EnumPassengerType } from "./../../../travel/ilsa-passenger-v2/schemas/int-passenger.interface";

export interface IntIlsaTicketSummaryDataPair {
  label: string;
  value: string;
}

export interface IntTravelLabels {
  locator: string;
  purchaser: string;
  tripDeparture: string;
  tripReturn: string;
  train: string;
  trainCode?: string;
  seat: string;
  tarrif: string;
  amount: string;
  points: string;
  cardDiscounts: string;
  ticketNumber: string;
  downloadTickets: string;
  accessories: string;
  services: string;
  complement: string;
  linkText: string;
  ratingText: string;
  complementTitle: string;
  email: string;
  phone: string;
  edit: string;
  bookingStatus?: string;
  bookingStatusShort?: string;
  cancelledStatus?: string;
}

export interface IntPassengerTravelData {
  id: string;
  name: string;
  firstSurname: string;
  email: string;
  secSurname: string;
  phoneNumber: string;
  prefixNumber: string;
  documentType: string;
  documentNumber: string;
  disabilityType: boolean;
  passengerType?: EnumPassengerType;
}

export interface IntTravel {
  type: EnumTripDirection;
  uicDepartureStation: string;
  uicArrivalStation: string;
  travelDate: string;
  durationTravel: string;
  departureDateTime: string;
  arrivalDateTime: string;
  serviceName?: string;
  travel?: IntTravel[];
}

export interface IntProducts {
  itemId: string;
  points: number;
  passengerId: string;
  code: string;
  cardDescount: string;
  ticketNumber: string;
  incluideAddons: string[];
  requestedServices: IntIlsaTicketSummaryDataPair[];
  addonsReservation: IntIlsaTicketSummaryDataPair[];
  seat: IntSeat;
  price: string | number;
  originalPrice: string | number;
  type?: string;
}
export interface IntTravelData {
  statusReserved: "active" | "noActive";
  bookingNumber: string;
  type: EnumTripDirection;
  passengers: IntPassengerTravelData[];
  travel: IntTravel[];
  products: IntProducts[];
}

export interface IntSeat {
  carriage: string;
  number: string;
}

export interface IntStations {
  connectedStations: string[];
  name: string;
  shortCode: string;
  timezone: string;
  uicStationCode: string;
}

class CreateFileDropProvider implements vscode.DocumentDropEditProvider {
  async provideDocumentDropEdits(_document: vscode.textDocument, _position: vscode.Position. dataTranfer:any){
    const pngFile = dataTranfer.get('image/png')?.asFile();
    if(!pngFile){
      return;
    }
  }
}
// Read file
// This results in the entire file content being copied over the extension host.
const contents = await pngFile.data();
const path = vscode.Uri.joinPath( vscode.workspace.workspaceFolders![0].uri, 'image.png');