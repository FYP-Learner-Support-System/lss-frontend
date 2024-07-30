import { OrderNumbersPipe } from './order-numbers.pipe';

describe('OrderNumbersPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderNumbersPipe();
    expect(pipe).toBeTruthy();
  });
});
