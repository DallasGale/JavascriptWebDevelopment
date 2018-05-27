
// Footer component
const Footer = () => {

    var pages = [1, 2, 3];
    
    
    //   console.log( pages.join(" | ") );
    return (`
        <ul>
            <li> ${ pages.join(' | ') }</li>
        </ul>
    `);
    };

export default Footer;