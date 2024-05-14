interface CardProps
{
	title:string;
	image_src:string;
	text:string;
}

export const Card : React.FC<{CardProps}> = ({title, image_src, text}) =>
{
    return (
        <div style={{backgroundColor: "lightblue", padding: "5px", margin: "2px"}}>
			<p><b>{title}</b></p>
			<img src={image_src}></img>
			<p>{text}</p>
        </div>
    )
}

export default Card;