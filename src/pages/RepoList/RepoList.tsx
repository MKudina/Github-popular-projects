import React from 'react';
import RepoItem from '../../components/RepoItem/RepoItem';
import { IconLoader } from '@tabler/icons-react';

interface Repo {
    id: number;
    name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    language: string;
    updated_at: string;
    owner: {
        login:string;
    }
}

interface RepoListProps {
    repos: Repo[];
    setPage: React.Dispatch<React.SetStateAction<number>>;
    loading: boolean;
}

const RepoList: React.FC<RepoListProps> = ({ repos, setPage, loading  }) => {

    function handleNext  (){
        setPage(prevPage => prevPage + 1)
    }

    if(repos.length === 0) return <IconLoader size={32} className='animate-spin-slow' />;

    return (
        <div className='w-[60%] flex flex-col items-center gap-10'>
            <ul className='w-full flex flex-col items-center gap-4'>
                {repos.map(repo => (
                    <RepoItem key={repo.id} repo={repo} />
                ))}
            </ul>
            {loading ? 
            <IconLoader size={32} className='animate-spin-slow' /> : 
            <button className='py-[5px] px-[10px] hover:outline-1 hover:outline hover:outline-main-border hover:rounded-md'
                onClick={handleNext}>Next
            </button>
            }

        </div>

    );
};

export default RepoList;