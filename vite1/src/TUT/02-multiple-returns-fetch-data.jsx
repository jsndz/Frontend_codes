import { useEffect, useState } from "react";
const url = "https://api.github.com/users/jsndz";

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setError] = useState(false);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const resp = await fetch(url);
        const user = await resp.json();
        setUser(user);
      } catch (error) {
        setError(true);
        console.log(error);
      }
      setIsLoading(false);
    };
    fetchUser();
  }, []);

  if (isLoading) {
    return <h2>Loading... </h2>;
  }
  if (isError) {
    return <h2>Error... </h2>;
  }
  const { login, avatar_url, bio } = user;
  return (
    <div>
      <h2>User </h2>
      <img
        style={{ width: 500, borderRadius: 20 }}
        src={avatar_url}
        alt={bio}
      ></img>
      <h1>{login}</h1>
      <h2>{bio}</h2>
    </div>
  );
};
export default MultipleReturnsFetchData;
