import { League, Market } from "./Event";

export interface Events {
  markets: Market[],
  locations: Locations[],
  sport: {
    id: string,
    order: number,
    name: string,
    seasonal: boolean
  },
  league: League
}

export interface Locations {
  id: string,
  name: string,
  leagues: Leagues[],
  order: number
}

export interface Leagues extends League {
  eventDateGroups: EventGroup[]
}

export interface EventGroup {
  date: string,
  events: Event[]
}