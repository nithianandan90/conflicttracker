import React, { Suspense, useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Themeroutes from './routes/Router';
import ThemeSelector from './layouts/theme/ThemeSelector';
import Loader from './layouts/loader/Loader';
import { Amplify } from 'aws-amplify';
import amplifyconfig from './amplifyconfiguration.json';
import { generateClient } from 'aws-amplify/api';

import { createTodo } from './graphql/mutations';
import { listTodos } from './graphql/queries';
import Client from './apollo/Client';

Amplify.configure(amplifyconfig);

const client = generateClient();

function App() {
  // const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  async function fetchTodos() {
    try {
      const todoData = await client.graphql({
        query: listTodos,
      });
      const todos = todoData.data.listTodos.items;

      console.log('TODOS', todos);
    } catch (err) {
      console.log('error fetching todos');
    }
  }

  const routing = useRoutes(Themeroutes);
  const direction = useSelector((state) => state.customizer.isRTL);
  const isMode = useSelector((state) => state.customizer.isDark);
  return (
    <Client>
      <Suspense fallback={<Loader />}>
        <div
          className={`${direction ? 'rtl' : 'ltr'} ${isMode ? 'dark' : ''}`}
          dir={direction ? 'rtl' : 'ltr'}
        >
          <ThemeSelector />
          {routing}
        </div>
      </Suspense>
    </Client>
  );
}

export default App;
