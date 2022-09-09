import {useCallback, useState} from 'react';
import {GetSummoner} from '@Hooks/externalApi';
import {InsertData} from '@Hooks/api';
import {SummonerData} from '@Interfaces/index';

export default function Home () : JSX.Element {
    const [summoner, setSummoner] = useState<string>('');

    const handleSearch = useCallback(async() => {
        const {data: {puuid}} = await GetSummoner(summoner);
        const summonerObj : SummonerData = {
            puuid: puuid,
            name: summoner,
        }
        const summonerData = await InsertData(summonerObj);
        console.log(summonerData);
    }, [summoner]);
    
    return (
        <>
            <input type="text" value={summoner} onChange={e => setSummoner(e.target.value)}/>
            <button onClick={handleSearch}>Search</button>
        </>

    )
}