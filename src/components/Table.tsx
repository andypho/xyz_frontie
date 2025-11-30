type ColumnsType<T> = {
  key: string;
  dataIndex?: keyof T;
  title: string;
  render?: (value: T[keyof T], record: T, index: number) => React.ReactNode;
};

type TableProps<T> = {
  columns: ColumnsType<T>[];
  dataSource: T[];
};

const Table = <T,>(props: TableProps<T>) => {
  const { columns, dataSource } = props;

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            {columns.map(({ key, title }) => (
              <th key={key}>{title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataSource.map((item, index) => (
            <tr key={index}>
              {columns.map(({ key, dataIndex, render }) => {
                return (
                  <td key={key}>
                    {render ? (
                      <>{render(item[dataIndex as keyof T], item, index)}</>
                    ) : (
                      <>{item[dataIndex as keyof T]}</>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
