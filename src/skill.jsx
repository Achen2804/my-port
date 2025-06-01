export default function ItemMaker({src,name}){
    return(
        <div class="skills_item">
            <div className="inner">
                <img src={src} className="mx-auto mb-4 w-[80px] h-[80px] object-contain rounded" />
                {name}
            </div>
        </div>
    )
}