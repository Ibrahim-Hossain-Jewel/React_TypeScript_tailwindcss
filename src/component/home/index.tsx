function Home() {
    return(<div className="flex flex-col md:flex md:flex-row lg:flex lg:flex-row mr-3 ml-3 md:mr-10 md:ml-10 lg:mr-10 lg:ml-10 bg-white rounded">
        <div className="md:basis-3/4 p-5 basis-full">
        <h2 className="font-bold">About Ibrahim</h2>
        <p>Ibrahim Hossain, age 25, ibrahim completed his BSc in CSE in 2022 at UU Dhaka and finished secondary at Sharatala Secondary School, Jashore in 2013. Focused on software development and with extensive experience as a front-end web developer. <br />
        Languages: JavaScript(ES6), TypeScript,  HTML5, CSS3. <br />
        Frameworks/Libraries: React, Redux, Redux-saga, Next.js, Express.js, Nest.js, Vue.js, Gatsby, SASS, LESS, Storybook, Tailwind CSS, Material UI, Bootstrap, <br />
        Code Testing Tools: Jest, React Testing-Library.<br />
        Databases & Storage: MySQL, MongoDB.<br />
        Version Control: Git with Smart Git Flow; used with Bitbucket, Github, Gitlab. CI/CD: Gitlab CI/CD, Github Actions.<br />
        Others: OAuth, JWT, Firebase, Docker, Webpack, Yarn, ESlint, Prettier, CLI: Fluent in Unix Terminal (bash, zsh).<br />
        Cloud Technologies: Heroku, Vercel. <br />
        Code Editors & IDE:  Visual Studio Code.<br />
        SCRUM/Agile: Practiced SCRUM methodology at work.<br /> <br />
        Have knowledge of 
        Languages: C, Java. <br />
        Frameworks: Spring-boot. <br />
        Databases & Storage:  MySQL, PostgreSQL and focusing on online judge to improve problem solving skills. Ibrahim like to travel and International News.</p>
        </div>
        <div className="md:basis-1/4 basis-0">
            <img src={require('../../images/ibrahim hossain.jpg')} alt="Image missing" className="p-5 rounded-xl" />
        </div>
    </div>)
}
export default Home;