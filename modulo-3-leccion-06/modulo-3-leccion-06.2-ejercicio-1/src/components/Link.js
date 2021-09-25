import '../styles/App.css';

const Link = (props) => {
    return (
        <li>
            <a title={props.title} class={props.class} href={props.href} target={props.target} rel={props.rel}>{props.text}</a>
        </li>
    );
};

export default Link;