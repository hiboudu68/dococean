import React, {useState} from 'react';

function ClickImgmlkpdsjsj({img, width, top, left}) {
    const [varwidth, setWidth] = useState(width);

    const handleClick = () => {
        setWidth(varwidth - 10);
        if(varwidth <= 70){
            setWidth(0);
        }
    }

    return(
        <div style={{ position: 'absolute', top: top, left: left, transform: 'translate(-50%, -50%)' }}>
            <img src={img} alt="img"  style={{width: `${varwidth}px`, height: `${varwidth}px`}} onClick={handleClick}/>
        </div>
    )
}

export default ClickImgmlkpdsjsj;