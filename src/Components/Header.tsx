import { HeaderStyles, StyledContainer, StyledSection } from "./styles";

export const Header = () => {
    return (
        <StyledSection>
            <StyledContainer>
                <HeaderStyles>
                    <div className="logo">image</div>
                    <ul>
                        <li>About</li>
                        <li>Projects</li>
                        <li>options</li>
                    </ul>
                    <div className="left-icon">icon</div>
                </HeaderStyles>
            </StyledContainer>
        </StyledSection>
    );
};
