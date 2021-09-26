import '../styles/App.scss';

const Link = (props) => {
    const openInNewTab = props.target === undefined ? '' : props.target;
    return (
        <li>
            <a title={props.title} class={props.class} href={props.href} target={openInNewTab} rel={props.rel}>{props.text}</a>
        </li>
    );
};

export default Link;