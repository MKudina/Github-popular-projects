import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import RepoStats from '../../components/RepoStats/RepoStats';
import LanguagesBar from '../../components/LanguageBar/LanguageBar';
import { getProject, getProjectLanguages } from '../../utils/api';
import { IconLoader } from '@tabler/icons-react';

interface Repo {
    id: number;
    name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    forks_count: number;
    watchers_count: number;
    subscribers_count: number;
    owner: {
    avatar_url: string
    }
}

const RepoDetail: React.FC = () => {
    const { owner, repoName } = useParams<{
        owner: string;
        repoName: string;
    }>();
    const [repo, setRepo] = useState<Repo>();
    const [languages, setLanguages] = useState<{}>({});

    useEffect(() => {
        const getRepo = async ()=> {
        const [repoData, languageData]  = await Promise.all([
            getProject(owner!, repoName!),
            getProjectLanguages(owner!, repoName!)
        ])
        if(repoData){
            setRepo(repoData!.data);
        }
        if(languageData){
            setLanguages(languageData!.data);
        }
        }
        getRepo()
    }, [ owner, repoName ]);
    
    if (!repo) return <IconLoader size={32} className='animate-spin-slow' />;

    return (
        <div className='w-full mt-10 flex flex-col items-center gap-6'>
            <div className='mx-4 xl:mx-0 flex flex-col md:flex-row items-center gap-2'>
                <img className='w-8 h-8 object-cover rounded-full' alt='Owner avatar' src={repo.owner.avatar_url}/>
                <h2 className='text-2xl sm:text-3xl'>
                    <a href={repo.html_url} target="_blank" className='hover:text-blue-500 hover:underline'>{repo.name}</a>
                </h2>
                <RepoStats type='watch' count={repo.subscribers_count} />
                <RepoStats type='fork' count={repo.forks_count} />
                <RepoStats type='star' count={repo.stargazers_count} />
            </div>
            <p className='mx-4 xl:mx-0 text-secondary-text'>{repo.description || 'There is no description'}</p>
            <LanguagesBar data={languages} />
            <Link to='/' className='hover:text-blue-500 hover:underline' >Back</Link>
        </div>
    );
};

export default RepoDetail;