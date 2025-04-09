import { useEffect, useState } from "react";
import { useMyinfoContext } from "../context/MyinfoContext";




const Home = () => {

    const {name} = useMyinfoContext();
    const [post, setPost] = useState([]);


    useEffect(()=> {

        const fetchData = async () => {
                try {
                    const response = await fetch('http://localhost:3000/posts');
        
                    const data = await response.json();
                    setPost(data)
                    // console.log(data);
                } catch (error) {
                    console.log(error)
                }
        }

        fetchData();
    }, []);

  
    console.log(post)

    return (<>
        <h2>Home Page</h2>
        <div>My name is {name} </div>

        <div>
            {post.map((item, index)=> (
                <div key={index}>{item.title}</div>
            ))}
        </div>
    </>);
}

export default Home