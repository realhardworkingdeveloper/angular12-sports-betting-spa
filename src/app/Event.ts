export interface Event {
  isLive: boolean,
  sportId: string,
  id: string,
  linkedId: string,
  fixture: {
    startDate: string,
    type: string,
    participants: Participants[],
    league: League
  },
  markets: Market[],
  topLeagues: any[],
  marketsTotal: number,
  isHighlighted: boolean,
  willBeLive: boolean,
  picksTotal: number,
  visualizationInfo: {
    betRadar: {
      eventId: string
    }
  }
}

export interface League {
  id: string,
  name: string,
  order: number,
  iconId?: string,
  seasonOriented: boolean,
  eventless: boolean,
  locationName?: string,
  locationId?: string,
  locationOrder?: number
}

export interface Participants {
  id: string,
  name: string,
  position: string
}

export interface Market {
  marketId: string,
  bl: number,
  name: string,
  picks: Pick[],
  order: number,
  isValid: boolean
}

export interface Pick {
  id: string,
  name: string,
  odds?: number,
  order: number,
  status: number
}

export interface Quota {
  event: Event,
  pick: Pick
}