import DashCard from '../../dashboardCards/DashCard';
import { useQuery, useMutation } from '@apollo/client';
import {
  createCountryBatch,
  listTodos,
  createCountry,
  testFunction,
  batchTest,
  listTestTables,
} from './queries';

const ApolloTest = () => {
  const { data } = useQuery(listTestTables);

  const [doTestFunction] = useMutation(batchTest);

  const [doCountryWrite] = useMutation(createCountry);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Example dummy data
    const dummyCountries = [
      {
        Flag: 'https://example.com/flag1.png',
        Name: 'Exampleland',
        Code: 'EX',
        Population: 1000000,
        conflictID: 'conflict1',
      },
      {
        Flag: 'https://example.com/flag2.png',
        Name: 'Samplestan',
        Code: 'SS',
        Population: 2000000,
        conflictID: 'conflict2',
      },
      // Add more countries as needed
    ];
    console.log('testData', dummyCountries);
    try {
      const response = await doTestFunction({ variables: { input: dummyCountries } });
      console.log('response', response);
    } catch (e) {
      console.log('error', e);
    } // shape of the input not correct
  };

  console.log('testtableitems', data?.listTestTables.items);
  return (
    <DashCard title="Lambda Function Trigger Test">
      <div className="d-flex flex-row mt-4">
        <div className="align-self-center">
          {data?.listTestTables?.items.map((item) => (
            <div key={item.id}>
              <div>{item.Name}</div>
            </div>
          ))}
        </div>
        <div className="ms-auto">
          <div
            style={{
              height: '70px',
              width: '150px',
            }}
          ></div>
          <form onSubmit={handleSubmit}>
            <button type="submit">Upload Country Array</button>
          </form>
        </div>
      </div>
    </DashCard>
  );
};

export default ApolloTest;
