import { IconEye, IconGitFork, IconStarFilled } from '@tabler/icons-react';
import React from 'react';
import { formatCounter } from '../../utils/helpers';

interface RepoStatsProps {
    type: 'star' | 'fork' | 'watch';
    count: number;
}

const RepoStats: React.FC<RepoStatsProps> = ({ type, count }) =>{

    let icon;
    let label;

    switch (type) {
        case 'star':
            icon = <IconStarFilled className='ml-3 mr-2 text-yellow-400' size={16} />;
            label = 'Star';
            break;
        case 'fork':
            icon = <IconGitFork className='ml-3 mr-2 text-gray-600' size={16} />;
            label = 'Fork';
            break;
        case 'watch':
            icon = <IconEye className='ml-3 mr-2 text-blue-600' size={16} />;
            label = 'Watch';
            break;
        default:
            return null;
    }

    return (
        <div className='h-7 flex items-center text-sm border border-main-border bg-secondary-bg rounded'>
            {icon}
            {label}
            <span className='px-[6px] ml-2 mr-3 bg-counter-bg rounded-full' title={count.toString()}>{formatCounter(count)}</span>
        </div>
    )
}

export default RepoStats