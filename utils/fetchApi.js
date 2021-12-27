import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'

 

export const fetchApi = async (url) => { 
    const {data} = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
             'x-rapidapi-key': '4aa28bf50emsh53c0b71f1786685p195624jsne2158cead881'
           }
    })
    return data;
}