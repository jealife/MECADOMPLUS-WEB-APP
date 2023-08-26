import User from "@/components/listUsers/User";

export default async function admin() {

    const data = await fetch(
        'https://mecadom.electroniqueclasse.com/api/users'
    )

    const res = await data.json();
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="list flex flex-col gap-3">
                {res.map((user: any) => (

                    <User key={user.id}
                        ID={user.id}
                        FirstName={user.first_name}
                        Email={user.email}
                    />

                ))}
            </div>
        </div>
    );
}
