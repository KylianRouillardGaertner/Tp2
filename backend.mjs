import PocketBase from 'pocketbase' ;
const pb = new PocketBase('http://127.0.0.1:8090') ;

export async function allMaisons() {
    const records = await pb.collection('maison').getFullList() ;
    return records ;
}

export async function OneID(id) {
    const Onerecords = await pb.collection('maison').getOne(id) ;
    return Onerecords ;
}