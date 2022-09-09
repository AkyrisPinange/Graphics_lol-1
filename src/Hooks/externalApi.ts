import {externalApi} from './config';

export const GetSummoner = async(name : String) : Promise<any> => 
    await externalApi.get(`https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=RGAPI-d3b6684f-4fdd-413b-87ed-cf97d4fe1d06`)