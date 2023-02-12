import { Association } from "./association";
import { Nationalite } from "./nationalite";

export class Eleve {
  id?: number ;
  matricule?: String | null;
  nom?: String | null;
  prenom?: String | null;
  email?: String | null;
  ville?: String | null;
  mere?: String | null;
  pere?: String | null;
  adresse?: String | null;
  lieu?: String | null;
  tuteur?: String | null;
  telTuteur?: String | null;
  cp?: String | null;
  classe?: String | null;
  codeNiveau?: String | null;
  tel?: String | null;
  sexe?: String | null;
  etablissement?: String | null;
  dateNaissance?: Date | null;
  nationalite?: Nationalite;
  association?: Association;



}
