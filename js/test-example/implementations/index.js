import right1 from './right1';
import wrong1 from './wrong1';
import wrong2 from './wrong2';

const implementations = {
    right1, wrong1, wrong2,
};

export default () => {
    const name = process.env.FUNCTION_VERSION || 'right1';
    return implementations[name];
};
