import { HeaderStyles, StyledContainer, StyledSection } from "./styles";
import Avatar from "react-avatar";

export const Header = () => {
    return (
        <StyledSection>
            <StyledContainer>
                <HeaderStyles>
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
                </HeaderStyles>
            </StyledContainer>
        </StyledSection>
    );
};
