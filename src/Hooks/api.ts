import {api} from './config';
import {SummonerData} from '@Interfaces/index';

export const InsertData = async(props : SummonerData) : Promise<any> => 
    await api.post('getMatchBypuuid' , {...props})
