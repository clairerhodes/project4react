import Navbar from '../nav/nav.jsx';
import { useEffect, useState} from 'react';

const Home = ({content = [], setContent}) => {

    const BASE_URL = 'http:/localhost:8000/api/blogpost'

    useEffect(() => {
        const fetchContent = async () => {
            try {
                let res = await fetch(BASE_URL); // get user posts
                let JSONdata = await res.json();
                console.log(JSONdata);

                if (Array.isArray(JSONdata)) {
                    setContent(JSONdata);
                } else {
                    console.error('This is not an array: ', JSONdata);
                }
            } catch (error) {
                console.error('There was an error fetching data', error);
            };
        };
        fetchContent();
    }, []);

    return (
        <>
            <Navbar />
            <ul>
                {content.map((post, index) => {
                    <div className="postContainer" key={index}>
                        <li>
                            <h1>{post.subjectLine}</h1>
                            <h2>{post.jobTitle} at {post.companyName}</h2>
                            <p>{post.description}</p>
                        </li>
                    </div>
                })};
            </ul>
        </>
    );
};

export default Home;