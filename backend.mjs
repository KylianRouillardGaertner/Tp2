import PocketBase from 'pocketbase' ;
const pb = new PocketBase('http://127.0.0.1:8090') ;

/*
try { const records = await pb.collection('maison').getFullList() ;
    console.table(records) ;
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e) ;
}
*/
/*
try { const records = await pb.collection('maison').getOne('5ficuz6wjdc9thu') ;
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e) ;
}
*/
/*
try { const records = await pb.collection('maison').getFullList({sort:'created'}) ;
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e) ;
}
*/
/*
try { const records = await pb.collection('maison').getFullList({sort:'-created'}) ;
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e) ;
}
*/
/*
try { const records = await pb.collection('maison').getFullList({filter:'favori=true'}) ;
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e) ;
}
*/
/*
try { const records = await pb.collection('maison').getFullList({filter:'surface>100'}) ;
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e) ;
}
*/
/*
try { const records = await pb.collection('maison').getFullList({filter:'surface>100 && nbSdb >= 2'}) ;
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e) ;
}
*/
/*
try { const records = await pb.collection('maison').getFullList({filter:'surface>100 || nbChambres >= 3'}) ;
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e) ;
}
*/
/*
try { const records = await pb.collection('maison').getFullList({filter:'surface>100',sort:'prix'}) ;
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e) ;
}
*/
/*
try { const records = await pb.collection('maison').getFullList({sort:'nomMaison'}) ;
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e) ;
}
*/
/*
try { const records = await pb.collection('maison').getFullList({filter:'nomMaison="chalet"'}) ;
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e) ;
}
*/

try { const records = await pb.collection('maison').getFullList({filter:'nomMaison!="chalet"', sort:'nomMaison'}) ;
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e) ;
}