export interface Bien {
    'id': number,
    'nombien': string,
    'prixlocation': number,
    'description': string,
    'etat': boolean,
    'localite': {
    'id': number,
    'libelle': string
    },
    'type_bien': {
    'id': number,
    'libelle': string
    },
    'images': [{
    'id': number,
    'image': Blob
    }]
   }