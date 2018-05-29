////////////////
// components //
////////////////
import Grid from './components/grid';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';
import Nav from './components/navigation';

////////////
// styles //
////////////

import './index.scss';

console.log(Header());

//////////////
// template //
//////////////

const template = (function structure() {

    // api
    var publicAPI = {
        grid: Grid,
        content: Content,
        footer: Footer, 
        header: Header,
        nav: Nav,
        grid: Grid
    };

    return publicAPI;
})();

Grid(3);

// const grid = (function structure() {
//     var gridApi = {
//         col1: Grid().c1,
//         col2: Grid().c2,
//         col3: Grid().c3
//     };
//     return gridApi;
// });

// console.log('GRID: ' + grid().col3);


/////////////////
// application //
/////////////////

const app = () => {
    return (`
        <div class='col-'>
            ${ template.header().h_title() }
            ${ template.header().h_subTitle() }
            ${ template.nav() }
            
            ${ template.content() }
            ${ template.footer() }
        </div>
         `
    );
};

document.getElementById('root').innerHTML = app();