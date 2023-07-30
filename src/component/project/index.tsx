function Project() {
    const cardData =  [
        {
            heading: 'PSD Templates',
            image: "/src/images/nationalflag.png",
            description: 'There are some UI design created using Adobe Photoshop CC',
            path: "/Project",
            button: "See Portfolio"
        },
        {
            heading: 'PSD Templatesdd',
            image: "/src/images/nationalflag.png",
            description: 'There are some UI design created using Adobe Photoshop CC',
            path: "/Project",
            button: "See Portfolio"
        },
    
    ];    
    return(
        <div className="flex flex-row mr-10 ml-10 bg-white rounded">
        <div className="basis-full">
            <div className="card rounded shadow-black w-64 pl-5 border-cyan-900">
                <h1 className="text-lg pt-5 ">PSD Template</h1>
                <img src={require("../../images/photoshop.jpg")} alt="image missing" className="w-64 pt-2"/>
                <p className="">Description</p>
                <button className="rounded bg-[#198754] p-2 text-white">See Portfolio</button>
            </div>
            {
               cardData && cardData.map((value, index)=>(<div className="card rounded shadow-black w-64 pl-5 border-cyan-900" key={index}>
                    <h1 className="text-lg pt-5 ">{value.heading}</h1>
                    <img src={value.image} alt="image missing" className="w-64 pt-2"/>
                    <p className="">{value.description}</p>
                    <button className="rounded bg-[#198754] p-2 text-white">{value.button}</button>
                </div>)
           )
            }
        </div>
    </div>
    )
}
export default Project;