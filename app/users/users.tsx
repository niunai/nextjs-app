import { useQuery } from 'react-query';

type User = {
    id: string,
    name: string,
};

const fetchUsers = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    return res.json();
};

function Users() {
    const { data } = useQuery({
        queryKey: ['users'],
        queryFn: fetchUsers,
        suspense: true,
    });

    return (
        <div>
            <h2>ユーザ一覧</h2>
            <div>
                {data?.map((user: User) => (
                    <div key={user.id}>{user.name}</div>
                ))}
            </div>
        </div>
    );
}

export default Users;