import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.github.com',

});

export const getProjects = async ( page: number ) => {
    try {
        const response = await api.get(('/search/repositories'), {
            params: {
                q:'language:TypeScript',
                sort:'stars',
                page: page,
                per_page: 6
            }
        })
        return response
    } catch(err) {
        console.log(err);
    }
}

export const getProject = async ( owner: string, repo: string ) => {
    try {
        const response = await api.get(`/repos/${owner}/${repo}`)
        return response
    } catch(err) {
        console.log(err);
    }
}

export const getProjectLanguages = async ( owner: string, repo: string ) => {
    try {
        const response = await api.get(`/repos/${owner}/${repo}/languages`)
        return response
    } catch(err) {
        console.log(err);
    }
}