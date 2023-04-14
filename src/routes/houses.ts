import { Router } from "express";
import * as housesService from "../services/housesService";
import { HouseName } from "../types";

export const housesRouter = Router();

//Create a middleware to check bearer token
housesRouter.use((req, res, next) => {
  const auth = req.headers.authorization;
  if (auth !== "Bearer HASNC12MNS90K") {
    res.status(401).send("Unauthorized");
  }
  next();
});

housesRouter.get("/", (_req, res) => {
  res.status(200).json(housesService.getAllHouses());
});

housesRouter.get("/:id", (req, res) => {
  const house = housesService.findById(+req.params.id);

  if (!house) return res.status(404).send("House not found 😢");

  res.status(200).json(house);
});

housesRouter.patch("/:id", (req, res) => {
  if (!Object.values(HouseName).includes(req.body.houseName))
    return res.status(400).send("House name not valid");
  const house = housesService.editHouseName(+req.params.id, req.body.houseName);

  if (!house) return res.status(404).send("House not found 😢");

  res.status(200).json(house);
});

//HASNC12MNS90K -> token
//req.headers.authorization -> obtener auth de la request
//Bearer HASNC12MNS90K -> El auth de la request tiene que ser igual a esta cadena
