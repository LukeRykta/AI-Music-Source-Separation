import {BannerContainer, BannerLogo, Banr, ProjectLogo, RightWrapper} from "./bannerElements";


const Banner = () => {
    return (
        <Banr>
            <BannerContainer>
                <BannerLogo className='grow'>
                    UTSA
                </BannerLogo>

                <RightWrapper>
                    <ProjectLogo>
                        Music Source Separation
                    </ProjectLogo>
                </RightWrapper>
            </BannerContainer>
        </Banr>
    )
}

export default Banner;