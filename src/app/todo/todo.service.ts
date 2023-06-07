import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {

   PLN_PLC = [
      {
        PLACECODE: 26,
        PLACELABEL: "Fundsettle",
        PLN_SVM: [
          {
            SVM: 16111801,
            ISIN: "LU0100749679",
            LABEL: "NEKR FD LIFESTYLE DYNAMICC",
            PLN: [
               {
                  CODE:"NEK01",
                  PLAN:8,
                  CANAL:"*",
                  AV:"A",
                  LIB:"Fonds Amenkor 8",
                  DATEV_EFFECTIVE:"0001-01-01",
                  PLAGE:[
                     {
                        BORNE:9999999999999.99,
                        FRAIS_BORDEREAU:0.00,
                        FRAIS_RETRAIT:0.00,
                        TYPE_COURTAGE:1,
                        COURTAGE:0.00,
                        MIN_COURTAGE:0.00,
                        TYPE_FRAIS_ETR:1,
                        FRAIS_ETRANGERS:2.00,
                        MIN_FRAIS_ETR:0.00
                     },
                     {
                        BORNE:0.00,
                        FRAIS_BORDEREAU:0.00,
                        FRAIS_RETRAIT:0.00,
                        TYPE_COURTAGE:0,
                        COURTAGE:0.00,
                        MIN_COURTAGE:0.00,
                        TYPE_FRAIS_ETR:0,
                        FRAIS_ETRANGERS:0.00,
                        MIN_FRAIS_ETR:0.00
                     },
                     {
                        BORNE:0.00,
                        FRAIS_BORDEREAU:0.00,
                        FRAIS_RETRAIT:0.00,
                        TYPE_COURTAGE:0,
                        COURTAGE:0.00,
                        MIN_COURTAGE:0.00,
                        TYPE_FRAIS_ETR:0,
                        FRAIS_ETRANGERS:0.00,
                        MIN_FRAIS_ETR:0.00
                     },
                     {
                        BORNE:0.00,
                        FRAIS_BORDEREAU:0.00,
                        FRAIS_RETRAIT:0.00,
                        TYPE_COURTAGE:0,
                        COURTAGE:0.00,
                        MIN_COURTAGE:0.00,
                        TYPE_FRAIS_ETR:0,
                        FRAIS_ETRANGERS:0.00,
                        MIN_FRAIS_ETR:0.00
                     },
                     {
                        BORNE:0.00,
                        FRAIS_BORDEREAU:0.00,
                        FRAIS_RETRAIT:0.00,
                        TYPE_COURTAGE:0,
                        COURTAGE:0.00,
                        MIN_COURTAGE:0.00,
                        TYPE_FRAIS_ETR:0,
                        FRAIS_ETRANGERS:0.00,
                        MIN_FRAIS_ETR:0.00
                     }
                  ]
               },
               {
                  CODE:"NEK01",
                  PLAN:8,
                  CANAL:"*",
                  AV:"V",
                  LIB:"Fonds Amenkor 8",
                  DATEV_EFFECTIVE:"0001-01-01",
                  PLAGE:[
                     {
                        BORNE:9999999999999.99,
                        FRAIS_BORDEREAU:0.00,
                        FRAIS_RETRAIT:0.00,
                        TYPE_COURTAGE:1,
                        COURTAGE:0.00,
                        MIN_COURTAGE:0.00,
                        TYPE_FRAIS_ETR:1,
                        FRAIS_ETRANGERS:0.00,
                        MIN_FRAIS_ETR:0.00
                     },
                     {
                        BORNE:0.00,
                        FRAIS_BORDEREAU:0.00,
                        FRAIS_RETRAIT:0.00,
                        TYPE_COURTAGE:0,
                        COURTAGE:0.00,
                        MIN_COURTAGE:0.00,
                        TYPE_FRAIS_ETR:0,
                        FRAIS_ETRANGERS:0.00,
                        MIN_FRAIS_ETR:0.00
                     },
                     {
                        BORNE:0.00,
                        FRAIS_BORDEREAU:0.00,
                        FRAIS_RETRAIT:0.00,
                        TYPE_COURTAGE:0,
                        COURTAGE:0.00,
                        MIN_COURTAGE:0.00,
                        TYPE_FRAIS_ETR:0,
                        FRAIS_ETRANGERS:0.00,
                        MIN_FRAIS_ETR:0.00
                     },
                     {
                        BORNE:0.00,
                        FRAIS_BORDEREAU:0.00,
                        FRAIS_RETRAIT:0.00,
                        TYPE_COURTAGE:0,
                        COURTAGE:0.00,
                        MIN_COURTAGE:0.00,
                        TYPE_FRAIS_ETR:0,
                        FRAIS_ETRANGERS:0.00,
                        MIN_FRAIS_ETR:0.00
                     },
                     {
                        BORNE:0.00,
                        FRAIS_BORDEREAU:0.00,
                        FRAIS_RETRAIT:0.00,
                        TYPE_COURTAGE:0,
                        COURTAGE:0.00,
                        MIN_COURTAGE:0.00,
                        TYPE_FRAIS_ETR:0,
                        FRAIS_ETRANGERS:0.00,
                        MIN_FRAIS_ETR:0.00
                     }
                  ]
               },
               {
                  CODE:"NEK03",
                  PLAN:8,
                  CANAL:"*",
                  AV:"A",
                  LIB:"Fonds Amenkor 8 - Staff",
                  DATEV_EFFECTIVE:"0001-01-01",
                  PLAGE:[
                     {
                        BORNE:9999999999999.99,
                        FRAIS_BORDEREAU:0.00,
                        FRAIS_RETRAIT:0.00,
                        TYPE_COURTAGE:1,
                        COURTAGE:0.00,
                        MIN_COURTAGE:0.00,
                        TYPE_FRAIS_ETR:1,
                        FRAIS_ETRANGERS:1.00,
                        MIN_FRAIS_ETR:0.00
                     },
                     {
                        BORNE:0.00,
                        FRAIS_BORDEREAU:0.00,
                        FRAIS_RETRAIT:0.00,
                        TYPE_COURTAGE:0,
                        COURTAGE:0.00,
                        MIN_COURTAGE:0.00,
                        TYPE_FRAIS_ETR:0,
                        FRAIS_ETRANGERS:0.00,
                        MIN_FRAIS_ETR:0.00
                     },
                     {
                        BORNE:0.00,
                        FRAIS_BORDEREAU:0.00,
                        FRAIS_RETRAIT:0.00,
                        TYPE_COURTAGE:0,
                        COURTAGE:0.00,
                        MIN_COURTAGE:0.00,
                        TYPE_FRAIS_ETR:0,
                        FRAIS_ETRANGERS:0.00,
                        MIN_FRAIS_ETR:0.00
                     },
                     {
                        BORNE:0.00,
                        FRAIS_BORDEREAU:0.00,
                        FRAIS_RETRAIT:0.00,
                        TYPE_COURTAGE:0,
                        COURTAGE:0.00,
                        MIN_COURTAGE:0.00,
                        TYPE_FRAIS_ETR:0,
                        FRAIS_ETRANGERS:0.00,
                        MIN_FRAIS_ETR:0.00
                     },
                     {
                        BORNE:0.00,
                        FRAIS_BORDEREAU:0.00,
                        FRAIS_RETRAIT:0.00,
                        TYPE_COURTAGE:0,
                        COURTAGE:0.00,
                        MIN_COURTAGE:0.00,
                        TYPE_FRAIS_ETR:0,
                        FRAIS_ETRANGERS:0.00,
                        MIN_FRAIS_ETR:0.00
                     }
                  ]
               },
               {
                  CODE:"NEK03",
                  PLAN:8,
                  CANAL:"*",
                  AV:"V",
                  LIB:"Fonds Amenkor 8 - Staff",
                  DATEV_EFFECTIVE:"0001-01-01",
                  PLAGE:[
                     {
                        BORNE:9999999999999.99,
                        FRAIS_BORDEREAU:0.00,
                        FRAIS_RETRAIT:0.00,
                        TYPE_COURTAGE:1,
                        COURTAGE:0.00,
                        MIN_COURTAGE:0.00,
                        TYPE_FRAIS_ETR:1,
                        FRAIS_ETRANGERS:0.00,
                        MIN_FRAIS_ETR:0.00
                     },
                     {
                        BORNE:0.00,
                        FRAIS_BORDEREAU:0.00,
                        FRAIS_RETRAIT:0.00,
                        TYPE_COURTAGE:0,
                        COURTAGE:0.00,
                        MIN_COURTAGE:0.00,
                        TYPE_FRAIS_ETR:0,
                        FRAIS_ETRANGERS:0.00,
                        MIN_FRAIS_ETR:0.00
                     },
                     {
                        BORNE:0.00,
                        FRAIS_BORDEREAU:0.00,
                        FRAIS_RETRAIT:0.00,
                        TYPE_COURTAGE:0,
                        COURTAGE:0.00,
                        MIN_COURTAGE:0.00,
                        TYPE_FRAIS_ETR:0,
                        FRAIS_ETRANGERS:0.00,
                        MIN_FRAIS_ETR:0.00
                     },
                     {
                        BORNE:0.00,
                        FRAIS_BORDEREAU:0.00,
                        FRAIS_RETRAIT:0.00,
                        TYPE_COURTAGE:0,
                        COURTAGE:0.00,
                        MIN_COURTAGE:0.00,
                        TYPE_FRAIS_ETR:0,
                        FRAIS_ETRANGERS:0.00,
                        MIN_FRAIS_ETR:0.00
                     },
                     {
                        BORNE:0.00,
                        FRAIS_BORDEREAU:0.00,
                        FRAIS_RETRAIT:0.00,
                        TYPE_COURTAGE:0,
                        COURTAGE:0.00,
                        MIN_COURTAGE:0.00,
                        TYPE_FRAIS_ETR:0,
                        FRAIS_ETRANGERS:0.00,
                        MIN_FRAIS_ETR:0.00
                     }
                  ]
                }
              ]
            }
          ]
        }
      ];
  
    constructor() {}
    
  }
  