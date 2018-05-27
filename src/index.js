// Components
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';

// Styles
import './index.scss';

// App
const App = () => {
    return (`
        <div>
            ${ Header() }
            ${ Content() }
            ${ Footer() }
        </div>
        `
    );
};


var $ = App();
document.getElementById('root').innerHTML = $;