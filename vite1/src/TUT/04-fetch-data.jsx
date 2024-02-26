import { useEffect, useState } from "react";
const url = "https://api.github.com/users/jsndz";

const FetchData = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const userData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    };
    userData();
  }, []);
  const { login, avatar_url, bio } = user;
  return (
    <>
      <section className="users">
        <li>
          <img src={avatar_url}></img>
          <div>
            <h5>Github User:{login}</h5>
          </div>
        </li>
      </section>
    </>
  );
};
export default FetchData;
