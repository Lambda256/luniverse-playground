export {}

declare global {
  interface TraceItemsResponse {
    code: string,
    data: {
      events: {
        count: string,
        page: number,
        rpp: number,
        items: TraceItem[]
      }
    }
  }
  
  interface TraceItemResponse {
    code: string,
    data: {
      event: TraceItem
    }
  }

  interface TraceItem {
    eventId: string,
    objectId: string,
    traceProgramId: string,
    eventTxId: string,
    tx: TraceTX,
    timestamp: string,
    userName: string,
    eventName: string,
    data: string,
    createdBy: {
      accountId: string,
      iamUserId: string
    },
    createdAt: string
  }

  interface TraceTX {
    txId: string,
    status: string,
    result: boolean,
    fromAddress: string,
    inputs: string,
    receipt: string
  }

  interface ItemData {
    eventId?: string;
    id: string;
    image: number;
    owner: string;
    vin: string;
    plateNumber: string;
    model: string;
    year: number;
    mileage: number;
    description?: string;
    txHash?: string;
  }

  interface GetItemAxiosParams {
    eventName: string,
    userName?: string,
    objectId: string,
  }
}