//import cardImage from '../media/svg/carousel-image-0.svg'; // gives image path

//<img className="card__image" src={cardImage} />

function Message(props) {
    return (
        <div className="message">
            <p className="message_title">{props.title}</p>
        </div>
    );
}

export default Message;


