import  { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {

  
  const [data, setData] = useState(null); 

  useEffect(() => {
    fetch('http://api.github.com/users/Vivek-Hello')
      .then((res) => res.json())
      .then((dat) => setData(dat));
  }, []); 

const dat =  useLoaderData()   

  if (!dat) {
    return <p>Loading...</p>;
  }

  return (
    <div className='flex justify-between items-center text-center m-4 bg-gray-600 text-white p-4 text-3xl   '>
      <img src={data.avatar_url} width={300} alt="User Avatar" />
      <h1> Github Followers: {data.followers} </h1>
    </div>
  );
}

export default Github;


export const GithubLoader = async() => {
          const res = await fetch('http://api.github.com/users/Vivek-Hello');
          const  data = res.json()
          return data;
}