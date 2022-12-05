import {
    AuthorBg,
    AuthorContainer,
    AuthorContent,
    AuthorH1,
    AuthorP,
    VideoBg,
} from "./AuthorElements";
//import Video from '../../videos/video.mp4'

const HeroSection = () => {
    return (
        <>
            <AuthorContainer id={'top'}>
                <AuthorBg>
                    <VideoBg autoPlay loop muted src={'Video'} type='video/mp4'/>
                </AuthorBg>
                <AuthorContent >
                    <AuthorH1 href='https://www.linkedin.com/in/luke-ryktarsyk/' className='grow'>Luke Ryktarsyk</AuthorH1>
                    <AuthorH1 href='https://github.com/IMNOTACROOK22' className='grow'>Nicholas Schultz</AuthorH1>
                    <AuthorH1 href='https://www.linkedin.com/in/andrew-mares/' className='grow'>Andrew Mares</AuthorH1>
                    <AuthorH1 href='https://www.linkedin.com/in/luke-overbey-37b342235/' className='grow'>Luke Overbey</AuthorH1>
                    <AuthorH1 className='grow'>Victor Danish</AuthorH1>
                </AuthorContent>
            </AuthorContainer>
        </>
    )
}

export default HeroSection