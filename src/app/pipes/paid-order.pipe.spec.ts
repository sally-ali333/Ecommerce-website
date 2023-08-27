import { PaidOrderPipe } from './paid-order.pipe';

describe('PaidOrderPipe', () => {
  it('create an instance', () => {
    const pipe = new PaidOrderPipe();
    expect(pipe).toBeTruthy();
  });
});
