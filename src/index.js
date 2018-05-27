////////////////
// components //
////////////////
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';


////////////
// styles //
////////////

import './index.scss';


//////////////
// template //
//////////////

var template = (function structure() {
    { Header(); }
    { Content(); }
    { Footer(); }

    // api
    var publicAPI = {
        header: Header,
        content: Content,
        footer: Footer, 
    };
    return publicAPI;
})();


/////////////////
// application //
/////////////////

const app = () => {
    return (`
        <div>
            ${ template.header() }
            ${ template.content() }
            ${ template.footer() }
        </div>
         `
    );
};

document.getElementById('root').innerHTML = app();