import React from 'react';
import { dataFormat } from '../../utils/helpers';
import { Link } from 'react-router-dom';
import RepoStats from '../RepoStats/RepoStats';

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

interface RepoItemProps {
    repo: Repo;
}

const RepoItem: React.FC<RepoItemProps> = ({ repo }) => {

    return (
        <li className='w-full py-6 first:border-t border-b border-main-border font-medium repo-item'>
            <div className='flex flex-row justify-between'>
                <h2 className='text-xl text-blue-500 rounded-t-md'>
                    <Link to={`/${repo.owner.login}/${repo.name}`} >{repo.name}</Link>
                </h2>
                <RepoStats type='star' count={repo.stargazers_count} />
            </div>
            <div className='w-full mt-4 flex flex-row gap-4 bottom-0 text-xs font-medium'>
                <div className='flex items-center gap-1'>
                    <div className='w-3 h-3 bg-languageColor rounded-full'></div>
                    <span className='text-secondary-text'>{repo.language}</span>
                </div>
                <span className='text-secondary-text'>{`Updated on ${dataFormat(repo.updated_at)}`}</span>
                <a href={repo.html_url} target="_blank" className='ml-auto text-secondary-text hover:text-blue-500 hover:underline' rel="noopener noreferrer">
                    view project
                </a>
            </div>
        </li>
    );
};

export default RepoItem;