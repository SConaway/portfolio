import App from './App';

import renderer from 'react-test-renderer';

it('tree snapshot matches correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
});
