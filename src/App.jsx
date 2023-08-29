import { useState, useEffect } from "react";

const url = "https://api.github.com/users";

function App() {
  const [users, setUsers] = useState();

  const getUsers = async () => {
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="main-container">
      <h1>List of Github Users</h1>
      <hr />
      <section className="users-container">
        {users?.map((user) => {
          return (
            <article key={user.id} className="user-wrapper">
              <div className="user-image">
                <img src={user.avatar_url} alt={user.login} />
              </div>
              <div className="user-info">
                <h3>{user.login}</h3>
                <p>
                  <a href={user.html_url} target="_blank">
                    Profile
                  </a>
                </p>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}

export default App;
