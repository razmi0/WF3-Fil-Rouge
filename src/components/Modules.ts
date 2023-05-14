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
import Header from "./Header.js";
import Main from "./Main/Main.js";
import Section from "./Main/Section.js";
import Button from "./Main/Button.js";
import Card from "./Main/Card.js";


// Importation des fonctions utilitaires
//--


import { addAllButtonsEvents } from "../events/main.js";
import  { addAllNavEvents }  from '../events/header.js';
import { stringFormat } from "../utils/data-validation.js";
import { initComponents } from "../utils/body-render.js";


// Importation types
//--


import { ButtonElements, SectionElements } from "../interface/index-types.js";


//-----------------------------------//
//----------EXPORTATION--------------//
//-----------------------------------//



// Exportation Classes
//--
export { StaticData, Header, Main, Button, Section, Card };

// Exportation fonctions utilitaires
//--
export { addAllButtonsEvents, addAllNavEvents, stringFormat, initComponents };

// Exportation types
//--
export { ButtonElements, SectionElements };

