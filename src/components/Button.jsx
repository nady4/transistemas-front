//import cardImage from '../media/svg/carousel-image-0.svg'; // gives image path

//<img className="card__image" src={cardImage} />

function Button(props) {
    return (
        <div className="button">
            <p className="button_text">{props.children}</p>
        </div>
    );
}

export default Button;



