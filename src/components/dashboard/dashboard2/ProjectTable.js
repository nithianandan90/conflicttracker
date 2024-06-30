/* eslint-disable react/jsx-key */
import { Input, Table } from 'reactstrap';
import user1 from '../../../assets/images/users/user1.jpg';
import user2 from '../../../assets/images/users/user2.jpg';
import user3 from '../../../assets/images/users/user3.jpg';
import user4 from '../../../assets/images/users/user4.jpg';
import user5 from '../../../assets/images/users/user5.jpg';
import DashCard from '../dashboardCards/DashCard';
import { useMemo } from 'react';
import { useTable, useSortBy } from 'react-table';
const tableData = [
  {
    isActive: 'active',
    avatar: user1,
    name: 'Hanna Gover',
    post: 'Web Designer',
    project: 'Flexy React',
    status: 'Low',
    budget: '95K',
  },
  {
    isActive: '',
    avatar: user2,
    name: 'Daniel Kristeen',
    post: 'Project Manager',
    project: 'Lading pro React',
    status: 'Medium',
    budget: '95K',
  },
  {
    isActive: '',
    avatar: user3,
    name: 'Julian Josephs',
    post: 'Developer',
    project: 'Elite React',
    status: 'High',
    budget: '95K',
  },
  {
    isActive: '',
    avatar: user4,
    name: 'Jan Petrovic',
    post: 'Frontend Eng',
    project: 'Flexy React',
    status: 'Low',
    budget: '95K',
  },
  {
    isActive: '',
    avatar: user5,
    name: 'Steve Gover',
    post: 'Content Writer',
    project: 'Ample React',
    status: 'Medium',
    budget: '95K',
  },
  {
    isActive: '',
    avatar: user1,
    name: 'Johnathan',
    post: 'Graphic',
    project: 'Monster React',
    status: 'Low',
    budget: '95K',
  },
  {
    isActive: '',
    avatar: user1,
    name: 'Johnathan',
    post: 'Graphic',
    project: 'Monster React',
    status: 'Low',
    budget: '95K',
  },
  {
    isActive: '',
    avatar: user1,
    name: 'Johnathan',
    post: 'Graphic',
    project: 'Monster React',
    status: 'Low',
    budget: '95K',
  },
  {
    isActive: '',
    avatar: user1,
    name: 'Johnathan',
    post: 'Graphic',
    project: 'Monster React',
    status: 'Low',
    budget: '95K',
  },
  {
    isActive: '',
    avatar: user1,
    name: 'Johnathan',
    post: 'Graphic',
    project: 'Monster React',
    status: 'Low',
    budget: '95K',
  },
];

const ProjectTable = () => {
  const data = useMemo(() => tableData, []);

  const columns = useMemo(
    () => [
      {
        Header: 'Assigned',
        accessor: 'assigned', // Assumes 'name' is the unique ID for sorting
      },
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Priority',
        accessor: 'status',
      },
      {
        Header: 'Budget',
        accessor: 'budget',
      },
      // Add more columns as needed
    ],
    [],
  );

  const { getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    { columns, data },
    useSortBy,
  );

  return (
    <DashCard
      title="Projects of the Month"
      subtitle="January 2022"
      actions={
        <Input type="select" className="form-select">
          <option value="0">Monthly</option>
          <option value="1">Daily</option>
          <option value="2">Weekly</option>
          <option value="3">Yearly</option>
        </Input>
      }
    >
      <div className="table-responsive" style={{ maxHeight: 400, overflowY: 'auto' }}>
        <Table className="text-nowrap mt-n3 mb-0 align-middle custom-table" borderless>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render('Header')}
                    <span>{column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}</span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps}>
            {rows.map((row) => {
              prepareRow(row);

              console.log(row);

              return (
                <tr
                  {...row.getRowProps}
                  // key={row.original.name}
                  className={`border-top ${row.original.isActive}`}
                >
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src={row.original.avatar}
                        className="rounded-circle"
                        alt="avatar"
                        width="45"
                        height="45"
                      />
                      <div className="ms-3">
                        <h6 className="mb-0 fw-bold">{row.original.name}</h6>
                        <span className="text-muted fs-7">{row.original.post}</span>
                      </div>
                    </div>
                  </td>
                  <td>{row.original.project}</td>
                  <td>
                    {row.original.status === 'Low' ? (
                      <span className="badge bg-light-danger text-danger rounded-pill d-inline-block fw-bold">
                        {row.original.status}
                      </span>
                    ) : row.original.status === 'Medium' ? (
                      <span className="badge bg-light-primary text-primary rounded-pill d-inline-block fw-bold">
                        {row.original.status}
                      </span>
                    ) : (
                      <span className="badge bg-light-success text-success rounded-pill d-inline-block fw-bold">
                        {row.original.status}
                      </span>
                    )}
                  </td>
                  <td>{row.original.budget}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </DashCard>
  );
};

export default ProjectTable;
