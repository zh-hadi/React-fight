import { useMyinfoContext } from "../context/MyinfoContext";

const Home = () => {

    const {name} = useMyinfoContext();

  

    return (<>
        <h2>Home Page</h2>
        <div>My name is {name} </div>
    </>);
}

export default Home