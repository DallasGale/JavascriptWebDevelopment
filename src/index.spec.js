import Header from './components/hello';
import Content from './components/content';
import Footer from './components/footer';

test('should return Hello World!', () => {
	expect(sayHello()).toBe('Hello World!');
});