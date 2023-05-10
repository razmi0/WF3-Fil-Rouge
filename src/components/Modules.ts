//-----------------------------------//
// Importation des Classes et fonctions utilitaires du module components
// path : src/components/ComponentsModule.ts
//--


//-----------------------------------//
//----------IMPORTATION--------------//
//-----------------------------------//

// Importation des Classes
//--

// From services
import StaticData from "../services/StaticData.js";

// From components
import Ressources from "./Classes/Main/Ressources.js";
import Header from "./Classes/Header.js";
import Body from "./Classes/Main/Body.js";
import Section from "./Classes/Main/Section.js";
import Button from "./Classes/Main/Button.js";
import Card from "./Classes/Main/Card.js";


// Importation des fonctions utilitaires
//--


import { addAllButtonsEvents } from "../events/main.js";
import  { addAllNavEvents }  from '../events/header.js';
import { stringFormat } from "../utils/data-validation.js";



// Importation types
//--


import { ButtonElements, SectionElements } from "../interface/index-types.js";


//-----------------------------------//
//----------EXPORTATION--------------//
//-----------------------------------//



// Exportation Classes
//--
export { StaticData, Header, Body, Button, Section, Ressources, Card };

// Exportation fonctions utilitaires
//--
export { addAllButtonsEvents, addAllNavEvents, stringFormat };

// Exportation types
//--
export { ButtonElements, SectionElements };

