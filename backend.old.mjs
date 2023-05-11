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
try { const records1 = await pb.collection('maison').getOne('5ficuz6wjdc9thu') ;
    console.log(JSON.stringify(records1, null, 2));
} catch (e) {
    console.error(e) ;
}
*/
/*
try { const records2 = await pb.collection('maison').getFullList({sort:'created'}) ;
    console.log(JSON.stringify(records2, null, 2));
} catch (e) {
    console.error(e) ;
}
*/
/*
try { const records3 = await pb.collection('maison').getFullList({sort:'-created'}) ;
    console.log(JSON.stringify(records3, null, 2));
} catch (e) {
    console.error(e) ;
}
*/
/*
try { const records4 = await pb.collection('maison').getFullList({filter:'favori=true'}) ;
    console.log(JSON.stringify(records4, null, 2));
} catch (e) {
    console.error(e) ;
}
*/
/*
try { const records5 = await pb.collection('maison').getFullList({filter:'surface>100'}) ;
    console.log(JSON.stringify(records5, null, 2));
} catch (e) {
    console.error(e) ;
}
*/
/*
try { const records6 = await pb.collection('maison').getFullList({filter:'surface>100 && nbSdb >= 2'}) ;
    console.log(JSON.stringify(records6, null, 2));
} catch (e) {
    console.error(e) ;
}
*/
/*
try { const records7 = await pb.collection('maison').getFullList({filter:'surface>100 || nbChambres >= 3'}) ;
    console.log(JSON.stringify(records7, null, 2));
} catch (e) {
    console.error(e) ;
}
*/
/*
try { const records8 = await pb.collection('maison').getFullList({filter:'surface>100',sort:'prix'}) ;
    console.log(JSON.stringify(records8, null, 2));
} catch (e) {
    console.error(e) ;
}
*/
/*
try { const records9 = await pb.collection('maison').getFullList({sort:'nomMaison'}) ;
    console.log(JSON.stringify(records9, null, 2));
} catch (e) {
    console.error(e) ;
}
*/
/*
try { const records10 = await pb.collection('maison').getFullList({filter:'nomMaison="chalet"'}) ;
    console.log(JSON.stringify(records10, null, 2));
} catch (e) {
    console.error(e) ;
}
*/

try { const records11 = await pb.collection('maison').getFullList({filter:'nomMaison!="chalet"', sort:'nomMaison'}) ;
    console.log(JSON.stringify(records11, null, 2));
} catch (e) {
    console.error(e) ;
}