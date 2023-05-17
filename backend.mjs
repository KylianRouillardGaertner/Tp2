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

export async function AllMaisonFavori() {
    const Favrecords = await pb.collection('maison').getFullList({filter: 'favori=true'}) ;
    return Favrecords ;
}

export async function AllMaisonSorted() {
    const Sortedrecords = await pb.collection('maison').getFullList({sort: 'prix'}) ;
    return Sortedrecords ;
}

export async function bySurface(surfaceA) {
    const Surfacerecords = await pb.collection('maison').getFullList({filter: 'surface>'+ surfaceA}) ;
    return Surfacerecords ;
}

export async function surfaceORprice(surfaceB, p) {
    const SurfacePricerecords = await pb.collection('maison').getFullList({filter: `(surface > ${surfaceB}) || (prix < ${p})`});
    return SurfacePricerecords;
}

export async function FindAgent(idmaison) {
    const Findrecords = await pb.collection('maison').getOne(idmaison);
    const IdagentRecords = Findrecords.agent;
    const DataAgentrecords = await pb.collection('agent').getOne(IdagentRecords);
    return DataAgentrecords;
}

export async function AllMaisonsAgent() {
    const maisons = await pb.collection('maison').getFullList();
    const maisonsAgents = [];
    for (const actualhouse of maisons) {
        const agentId = actualhouse.agent;
        const agent = await pb.collection('agent').getOne(agentId);
        const maisonAgent = {
          id: actualhouse.id,
          nomMaison: actualhouse.nomMaison,
          prix: actualhouse.prix,
          images: actualhouse.images,
          nbChambres: actualhouse.nbChambres,
          nbSdb: actualhouse.nbSdb,
          adresse: actualhouse.adresse,
          favori: actualhouse.favori,
          surface: actualhouse.surface,
          agent: {
            id: agent.id,
            nom: agent.nom,
            prenom: agent.prenom,
            email: agent.email
          }
        };
        maisonsAgents.push(maisonAgent);
    }
    return maisonsAgents;
}

export async function allMaisonsByAgentId(idagent) {
    const Findmaisonrecords = await pb.collection('maison').getFullList({filter: `(agent = '${idagent}')`});
    return Findmaisonrecords;
}