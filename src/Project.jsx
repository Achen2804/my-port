export default function MakeProjectItem({Name, src, disc,imgsrc},left){
    if(left){
        return (
            <div className = 'flex flex-col md:flex-row items-start justify-center gap-12 px-8 py-16' id={Name+'-image'}>
                <div className="flex-1">
                    <a href={src}>
                        <img src={imgsrc}></img>
                    </a>
                </div>
                <div className="flex-1">
                    <h3>
                        {Name}
                    </h3>
                    <p>
                        {disc}
                    </p>
                </div>
            </div>
        )
    }else{
        return (
            <div className = 'flex flex-col md:flex-row items-start justify-center gap-12 px-8 py-16'>
                <div className="flex-1">
                    <h3>
                        {Name}
                    </h3>
                    <p className="text-lg">
                        {disc}
                    </p>
                </div>
                <div className="flex-2 z-10">
                    <a href={src}>
                        <img src={imgsrc}></img>
                    </a>
                </div>
            </div>
        )
    }

    
}