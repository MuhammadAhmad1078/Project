# Zustand State Management Documentation

This project uses Zustand for state management, a lightweight, easy-to-use state management library.

## Available Stores

1. **Auth Store** - Handles user authentication state
2. **Cart Store** - Manages the shopping cart

## Auth Store Usage

### Import the store

```tsx
import { useAuthStore } from "@/store";
```

### Login with Email and Password

```tsx
const { loginWithEmail, isLoading, error } = useAuthStore();

// In a form submission handler
const handleLogin = async (e) => {
  e.preventDefault();
  await loginWithEmail(email, password);
};
```

### Login with Wallet

```tsx
const { loginWithWallet } = useAuthStore();

// In a wallet connect handler
const connectWallet = async () => {
  // Assuming you have the wallet address from a wallet provider like MetaMask
  await loginWithWallet(walletAddress);
};
```

### Check Authentication Status

```tsx
const { isAuthenticated, user } = useAuthStore();

// In a component
const MyProtectedComponent = () => {
  const isLoggedIn = isAuthenticated();

  if (!isLoggedIn) {
    return <p>Please login to continue</p>;
  }

  return <p>Welcome {user.userName}!</p>;
};
```

### Logout

```tsx
const { logout } = useAuthStore();

// In a logout button handler
const handleLogout = () => {
  logout();
  // Redirect to homepage or login page
};
```

## Cart Store Usage

### Import the store

```tsx
import { useCartStore } from "@/store";
```

### Add Item to Cart

```tsx
const { addItem } = useCartStore();

// In an add to cart button handler
const handleAddToCart = () => {
  addItem(
    {
      id: product.id,
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    },
    quantity
  );
};
```

### Update Item Quantity

```tsx
const { updateQuantity } = useCartStore();

// In a quantity change handler
const handleQuantityChange = (id, newQuantity) => {
  updateQuantity(id, newQuantity);
};
```

### Remove Item from Cart

```tsx
const { removeItem } = useCartStore();

// In a remove button handler
const handleRemove = (id) => {
  removeItem(id);
};
```

### Get Cart Information

```tsx
const { items, getTotalItems, getTotalPrice } = useCartStore();

// In a cart component
const CartSummary = () => {
  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();

  return (
    <div>
      <p>Items in cart: {totalItems}</p>
      <p>Total: ${totalPrice.toFixed(2)}</p>
    </div>
  );
};
```

### Clear Cart

```tsx
const { clearCart } = useCartStore();

// After checkout completion
const finishCheckout = () => {
  // Process payment, etc.
  clearCart();
};
```

## Advanced Usage: Combining Stores

You can use multiple stores together in a single component:

```tsx
import { useAuthStore, useCartStore } from "@/store";

const Checkout = () => {
  const { user, isAuthenticated } = useAuthStore();
  const { items, getTotalPrice } = useCartStore();

  if (!isAuthenticated()) {
    return <p>Please login to checkout</p>;
  }

  if (items.length === 0) {
    return <p>Your cart is empty</p>;
  }

  return (
    <div>
      <h2>Checkout</h2>
      <p>User: {user.userName}</p>
      <p>Total: ${getTotalPrice().toFixed(2)}</p>
      {/* Checkout form */}
    </div>
  );
};
```

## Server Side Rendering Considerations

All stores are implemented with SSR compatibility in mind. They'll safely handle cases where `window` or `localStorage` are not available.
