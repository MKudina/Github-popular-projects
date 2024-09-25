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
        setRepo(repoData!.data);
        setLanguages(languageData!.data);
        }
        getRepo()
    }, [ owner, repoName ]);
    
    if (!repo) return <IconLoader size={32} className='animate-spin-slow' />;

    return (
        <div className='w-full mt-10 flex flex-col items-center gap-6'>
            <div className='flex items-center gap-2'>
                <img className='w-6 h-6 object-cover rounded-full' alt='Owner avatar' src='https://avatars.githubusercontent.com/u/89102353?s=48&v=4'/>
                <h2 className='text-3xl'>
                    <a href={repo.html_url} target="_blank" className='hover:text-blue-500 hover:underline'>{repo.name}</a>
                </h2>
                <RepoStats type='watch' count={repo.subscribers_count} />
                <RepoStats type='fork' count={repo.forks_count} />
                <RepoStats type='star' count={repo.stargazers_count} />
            </div>
            <p className='text-secondary-text'>{repo.description || 'Нет описания'}</p>
            <LanguagesBar data={languages} />
            <Link to='/' className='hover:text-blue-500 hover:underline' >Back</Link>
        </div>
    );
};

export default RepoDetail;