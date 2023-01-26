import Avatar from "react-avatar";

export const Header = () => {
    return (
        <div>
            <div className="logo">
                <Avatar name="yewin" round={true} alt={"profile image"} size={"40px"} />
            </div>
            <ul>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/projects">Projects</a>
                </li>
                <li>options</li>
            </ul>
            <div className="left-icon">icon</div>
        </div>
    );
};
