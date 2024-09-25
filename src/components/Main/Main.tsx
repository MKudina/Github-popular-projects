import React from 'react';
import RepoList from '../../pages/RepoList/RepoList';
import { Route, Routes } from 'react-router-dom';
import RepoDetail from '../../pages/RepoDetail/RepoDetail';
import NotFound from '../../pages/NotFound/NotFound';

interface Repo {
    id: number;
    name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    forks_count: number;
    language: string;
    updated_at: string;
    owner: {
        login:string;
    }
}

interface Repos {
    repos: Repo[];
    setPage: React.Dispatch<React.SetStateAction<number>>;
    loading: boolean;
}

const Main:React.FC<Repos> = ({ repos, setPage, loading }) => {

    return(
        <main className='w-full py-10 flex flex-col flex-1 items-center'>
            <Routes>
                <Route path='/' element={<RepoList repos={repos} setPage={setPage} loading={loading} />} />
                <Route path='/:owner/:repoName' element={<RepoDetail />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </main>
    )
}

export default Main;