import { allMaisons } from './backend.mjs'
import { OneID } from './backend.mjs'
import { AllMaisonFavori } from './backend.mjs'
import { AllMaisonSorted } from './backend.mjs'
import { bySurface } from './backend.mjs'

try {
    const records = await allMaisons() ;
    console.log(JSON.stringify(records, null, 2)) ;
} catch (e) {
    console.error(e) ;
}

try {
    const records = await OneID('5ficuz6wjdc9thu') ;
    console.log(JSON.stringify(records, null, 2)) ;
} catch (e) {
    console.error(e) ;
}

try {
    const records = await AllMaisonFavori() ;
    console.log(JSON.stringify(records, null, 2)) ;
} catch (e) {
    console.error(e) ;
}

try {
    const records = await AllMaisonSorted() ;
    console.log(JSON.stringify(records, null, 2)) ;
} catch (e) {
    console.error(e) ;
}

try {
    const records = await bySurface('125') ;
    console.log(JSON.stringify(records, null, 2)) ;
} catch (e) {
    console.error(e) ;
}