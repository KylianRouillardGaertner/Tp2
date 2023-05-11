import { FindAgent, allMaisons } from './backend.mjs'
import { OneID } from './backend.mjs'
import { AllMaisonFavori } from './backend.mjs'
import { AllMaisonSorted } from './backend.mjs'
import { bySurface } from './backend.mjs'
import { surfaceORprice } from './backend.mjs'

try {
    const records = await allMaisons() ;
    console.log(JSON.stringify(records, null, 2)) ;
} catch (e) {
    console.error(e) ;
}

try {
    const Onerecords = await OneID('5ficuz6wjdc9thu') ;
    console.log(JSON.stringify(Onerecords, null, 2)) ;
} catch (e) {
    console.error(e) ;
}

try {
    const AllFavrecords = await AllMaisonFavori() ;
    console.log(JSON.stringify(AllFavrecords, null, 2)) ;
} catch (e) {
    console.error(e) ;
}

try {
    const Sortedrecords = await AllMaisonSorted() ;
    console.log(JSON.stringify(Sortedrecords, null, 2)) ;
} catch (e) {
    console.error(e) ;
}

try {
    const Surfacerecords = await bySurface('125') ;
    console.log(JSON.stringify(Surfacerecords, null, 2)) ;
} catch (e) {
    console.error(e) ;
}

try {
    const SurfacePricerecords = await surfaceORprice('125', '2000') ;
    console.log(JSON.stringify(SurfacePricerecords, null, 2)) ;
} catch (e) {
    console.error(e) ;
}

try {
    const Agentrecords = await FindAgent('5ficuz6wjdc9thu') ;
    console.log(JSON.stringify(Agentrecords, null, 2)) ;
} catch (e) {
    console.error(e) ;
}