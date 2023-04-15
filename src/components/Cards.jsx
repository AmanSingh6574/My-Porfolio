


function Cards() {
    const data = [
        {
            id: 1,
            src: "https://protfolio-woad.vercel.app/assets/web-0d05165f.png",
            title: "Frontend Developer"
        },
        {
            id: 2,
            src: "https://protfolio-woad.vercel.app/assets/mobile-896ef2f5.png",
            title: "React.js Developer"
        },
    
    ];

    return (
      
        
        <div className=" mt-10 p-4 grid sm:grid-cols-2 gap-12 justify-center items-center justify-items-center">
            {
                data.map(function (data) {
                    return (
                        <div key={data.id} className="flex flex-col justify-center items-center bg-tertiary p-6 rounded-xl h-40 "  >
                            <img className="img" height={64} width={64} src={data.src}  alt="not found" />
                            <h2 className="font-bold text-[20px] text-center"> {data.title}</h2>
                        </div>
                    )
                })
            }


        </div>
    );
}

export default Cards;