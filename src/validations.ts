import { Gender, HouseName, NewCharacterEntry } from "./types";

const isString = (param: any): boolean => typeof param === "string";

export const isHouseName = (houseNameFromRequest: any): boolean =>
  Object.values(HouseName).includes(houseNameFromRequest);

const isGender = (genderFromRequest: any): boolean =>
  Object.values(Gender).includes(genderFromRequest);

const parseStringParams = (stringParam: any, paramName: string): string => {
  if (!isString(stringParam))
    throw new Error(`Incorrect or missing ${paramName}`);
  return stringParam;
};

export const parseHouseName = (houseNameFromRequest: any): HouseName => {
  if (!isHouseName(houseNameFromRequest))
    throw new Error("Incorrect or missing house");
  return houseNameFromRequest;
};

const parseGender = (genderFromRequest: any): Gender => {
  if (!isGender(genderFromRequest))
    throw new Error("Incorrect or missing gender");
  return genderFromRequest;
};

export const toNewCharacterEntry = (characterFromRquest: any) => {
  const newCharacter: NewCharacterEntry = {
    firstName: parseStringParams(characterFromRquest.firstName, "firstName"),
    lastName: parseStringParams(characterFromRquest.lastName, "lastName"),
    fullName: parseStringParams(characterFromRquest.fullName, "fullName"),
    title: parseStringParams(characterFromRquest.title, "title"),
    gender: parseGender(characterFromRquest.gender),
    house: parseHouseName(characterFromRquest.house),
    sentence: parseStringParams(characterFromRquest.sentence, "sentence"),
    playedBy: parseStringParams(characterFromRquest.playedBy, "playedBy"),
  };

  return newCharacter;
};
