interface PaymentStrategy {
  pay(amount: number): void;
}

class PayPalStrategy implements PaymentStrategy {
  pay(amount: number): void {
    console.log("Paying with PayPal: " + amount);
  }
}

class CreditCardStrategy implements PaymentStrategy {
  pay(amount: number): void {
    console.log("Paying with Credit Card: " + amount);
  }
}

class PaymentContext {
  constructor(private strategy: PaymentStrategy) {}

  setStrategy(strategy: PaymentStrategy): void {
    this.strategy = strategy;
  }

  checkout(amount: number): void {
    this.strategy.pay(amount);
  }
}

const paymentContext = new PaymentContext(new PayPalStrategy());
paymentContext.checkout(100);

paymentContext.setStrategy(new CreditCardStrategy());
paymentContext.checkout(100);
