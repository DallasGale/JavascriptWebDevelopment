// imports...


const Header = () => {
    var title = 'JS Website';
    var subtitle = 'Welcome to my JS only site';
    
    // TITLE
    const headerTitle = () => {
        return (`
            <div>
                <h1>
                    ${ title }
                </h1>
            </div>        
        `);
    };
 
    // SUB-TITLE
    const headerSubTitle = () => {
        return (`
            <div>
                <h2>${ subtitle }</h2>
            </div>
        `);
    };

    // API
    const headerAPI = {
        h_title: headerTitle,
        h_subTitle: headerSubTitle
    };

    return headerAPI;
        
};
export default Header;