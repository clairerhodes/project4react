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
            <div>
                {/* div for logo, navbar, user profile */}
                {/* <img src=""> logo */}
                <Navbar />
                {/* user profile - picture, name, and username */}
            </div>
            <div>
                {/* div for new post OR search bar, showing posts, and footer */}
                {/* new post (click to show form) or search bar? */}
                <ul>
                    {content.map((post, index) => {
                        <div className="postContainer" key={index}>
                            <li>
                                <h1>{post.subjectLine}</h1>
                                <h6>By {post.userID}</h6>
                                <h2>{post.jobTitle} at {post.companyName}</h2>
                                <h4>Job link: {post.jobLink}</h4>
                                <h4>Job status: {post.jobLink}</h4>
                                <p>{post.description}</p>
                                <p>{post.comments}</p>
                            </li>
                        </div>
                    })};
                </ul>
                {/* <Footer /> */}
            </div>
            
        </>
    );
};

export default Home;