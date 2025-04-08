import { useMyinfoContext } from "../context/MyinfoContext";
const About = () => {
    const {name} = useMyinfoContext();
    return (<>
        <h2>About Page</h2>
        <div>My name is {name}</div>
    </>);
}

export default About