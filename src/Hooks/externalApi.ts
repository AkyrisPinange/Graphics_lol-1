import {api} from './config';

export const GetSummoner = async(name : String) : Promise<any> => 
    await api.post('/sumonnerApi', {
        name: name,
      })