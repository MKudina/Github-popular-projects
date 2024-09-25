import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { getProjects } from './utils/api';
import { IconLoader } from '@tabler/icons-react';

interface Repos {
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

const App = () => {
  const [repos, setRepos] = useState<Repos[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoanding] = useState<boolean>(false)

  useEffect(() => {
      const fetchRepos = async () => {
        setLoanding(true);
        const repos = await getProjects( page )
        if (repos?.data?.items) {
          setRepos(prevRepos => [...prevRepos, ...repos.data.items]);
        }
        setLoanding(false)
      };

      fetchRepos();
  }, [page]);

  return (
    <div className="h-screen flex flex-col items-center font-inter text-main-text bg-main-bg">
      <Header />
      <Main repos={repos} setPage={setPage} loading={loading} />
      <Footer />
    </div>
  );
}

export default App;
