// imports...


const Header = () => {

    // Variables
    var headerTitle = 'JS Website';
    var headerSubTitle = 'Welcome to my JS only site';
    // console.log( headerTitle );

return (`
    <div>
        <h1>
            ${ headerTitle}
        </h1>
        <h2>${ headerSubTitle}</h2>
    </div>        
    `);
};
export default Header;