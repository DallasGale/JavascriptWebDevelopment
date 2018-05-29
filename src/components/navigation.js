var menuItems = [
  'Asynchronous',
  'Callbacks',
  'Promises',
  'Special Effects'
 ];

 
const menu = menuItems.map((item) => {
// console.log(item);
return (`
  <li style="display: inline-block;">
    <a href="/${ item.toLowerCase() }/" style="color: cyan;">
      ${ item.toLowerCase() }
    </a>
  </li>
`);
}); 


 const Navigation = () => {
  return (`
    <ul style="list-style: none;">
      ${ menu }
    </ul>
    `);
  };
 
  export default Navigation;