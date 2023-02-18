import getImpelementation from '../implementations';

const Cart = getImpelementation();

describe('Shop Cart', () => {
    test('test', () => {
        const cart = new Cart();
        expect(cart.getItems()).toHaveLength(0);

        cart.addItem({ name: 'car', price: 3 }, 5);
        expect(cart.getCount()).toBe(5);
        expect(cart.getCost()).toBe(15);
        expect(cart.getItems()).toHaveLength(1);

        cart.addItem({ name: 'house', price: 10 }, 2);
        expect(cart.getCount()).toBe(7);
        expect(cart.getCost()).toBe(35);
        expect(cart.getItems()).toHaveLength(2);
    });
});
