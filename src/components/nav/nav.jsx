
const Navbar = ({handleSection}) => {
    return (
        <nav>
            <button onClick={handleSection} value="Home">Home</button>
            <button onClick={handleSection} value="Profile">My Profile</button>
            <button onClick={handleSection} value="">New Post</button>
            <button onClick={handleSection} value="">Log Out</button>
        </nav>
    );
};

export default Navbar;

// view own User
// view other users
// new post
// view post
// update/delete post