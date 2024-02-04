import { create } from "zustand";

export interface UserStoreInterface {
  id: string;
  accountId: string;
  puuid: string;
  name: string;
  profileIconId: number;
  revisionDate: number;
  summonerLevel: number;
  leagueId: string;
  queueType: string;
  tier: string;
  rank: string;
  summonerId: string;
  summonerName: string;
  leaguePoints: number;
  wins: number;
  losses: number;
  veteran: false;
  inactive: false;
  freshBlood: false;
  hotStreak: false;
  setData: <T extends Partial<UserStoreInterface>>(data: T) => void;
}

const defaultValues: Omit<UserStoreInterface, "setData"> = {
  id: "",
  accountId: "",
  puuid: "",
  name: "",
  profileIconId: 0,
  revisionDate: 0,
  summonerLevel: 0,
  leagueId: "",
  queueType: "",
  tier: "",
  rank: "",
  summonerId: "",
  summonerName: "",
  leaguePoints: 0,
  wins: 0,
  losses: 0,
  veteran: false,
  inactive: false,
  freshBlood: false,
  hotStreak: false,
};

export const userStore = create<UserStoreInterface>((set) => ({
  ...defaultValues,
  setData: <T extends Partial<UserStoreInterface>>(data: T) => set(data),
}));
