export const abstract = {
    id: 'abstract',
    route: 'abstract',
    lightBg: true,
    lightText: false,
    lightLine: false,
    lightTextDesc: false,
    topLine: 'Music Source Separation',
    headline: 'Abstract',
    description: 'As humans, we have the unique ability to focus on specific sounds\n' +
        'within a piece of music. We can often keep track of one instrument\n' +
        'throughout the entirety of a performance.\n' +
        'Is it possible to teach a computer to do this and better yet, can it\n' +
        'extract this sound from a given piece of audio?\n' +
        'Researchers in the field of deep-learning have sought to solve this\n' +
        'problem, often applying approaches used in other separation tasks\n' +
        '(such as speech separation).\n' +
        'Music source separation has many practical uses in automatic\n' +
        'music transcription, lyric and music alignment, fundamental\n' +
        'frequency estimation, musical instrument detection, and automatic\n' +
        'singer identification',
    buttonLabel: 'Try Chart',
    imgStart: false,
    img: require('../imgs/abstract.png'),
    alt: 'alt img desc',
    dark: true,
    primary: true,
    darkText: true
}

export const introduction = {
    id: 'introduction',
    route: 'chart',
    lightBg: false,
    lightText: true,
    lightLine: true,
    lightTextDesc: true,
    topLine: 'What is it?',
    headline: 'Introduction',
    description: 'Music source separation (MSS) is the process of isolating individual \n' +
        'sounds in an auditory mixture of multiple sounds. Each sound heard \n' +
        'in a mixture is called a source. \n\nA large contributor to the difficulty of a source separation task is that \n' +
        'it is often the case that there are more sources within the mixture \n' +
        'than there are mixture signals. \n' +
        'This is what is called an underdetermined problem, where the \n' +
        'number of observations (the mixture) is less than the required or \n' +
        'desired outcomes (the sources). \n' +
        'Challenges that are unique to music source separation include:\n' +
        '- High correlation among sources\n' +
        '- Post processing/Non-linear signal processing\n' +
        '- Expectations of high-quality output',
    buttonLabel: 'Try Chart',
    imgStart: false,
    img: require('../imgs/introduction.png'),
    alt: 'alt img desc',
    dark: true,
    primary: true,
    darkText: false
}

export const purpose = {
    id: 'purpose',
    route: 'purpose',
    lightBg: true,
    lightText: false,
    lightLine: false,
    lightTextDesc: false,
    topLine: 'Our purpose',
    headline: 'Purpose',
    description: 'The purpose of this project was to explore different methods in\n' +
        'order to gain a greater understanding of research within this field.\n' +
        'First, we had to explore the solution space for this project.\n' +
        'Solutions to MSS problems are generally split into two major\n' +
        'categories:\n' +
        'Spectrogram Solutions and Waveform Solutions',
    buttonLabel: 'Try Chart',
    imgStart: false,
    img: require('../imgs/purpose.png'),
    alt: 'alt img desc',
    dark: true,
    primary: true,
    darkText: true
}

export const conclusions = {
    id: 'conclusions',
    route: 'chart',
    lightBg: false,
    lightText: true,
    lightLine: true,
    lightTextDesc: true,
    topLine: 'What we found',
    headline: 'Conclusions',
    description: 'Through our testing we’ve found that spectrogram solutions are\n' +
        'quite watery or out-of-phase when compared to waveform solutions.\n' +
        'Spectrogram solutions, due to their inability to account for phase\n' +
        'information, produce less than perfect results; an unfortunate side\n' +
        'effect of working in this domain.\n' +
        'Thus, we conclude that the field should advance toward more\n' +
        'waveform-based solutions.',
    buttonLabel: 'Try Chart',
    imgStart: false,
    img: require('../imgs/conclusions.png'),
    alt: 'alt img desc',
    dark: true,
    primary: true,
    darkText: false
}

export const references = {
    id: 'references',
    route: 'references',
    lightBg: true,
    lightText: false,
    lightLine: false,
    lightTextDesc: false,
    topLine: 'Inspiration',
    headline: 'References',
    description: '',
    buttonLabel: 'Try Chart',
    imgStart: false,
    img: require('../imgs/references.png'),
    alt: 'alt img desc',
    dark: true,
    primary: true,
    darkText: true
}