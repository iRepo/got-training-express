import housesData from "../../DB/houses.json";
import { House } from "../types";
import { parseHouseName } from "../validations";

const houses: House[] = housesData as House[];

//read all houses
export const getAllHouses = () => houses;

//real by id
export const findById = (id: number): House | null => {
  const house = houses.find((h) => h.id === id);
  return house ? house : null;
};

export const editHouseName = (id: number, newName: string): House | null => {
  const house = houses.find((h) => h.id === id);
  if (house) {
    house.houseName = parseHouseName(newName);
  }
  return house ? house : null;
};
