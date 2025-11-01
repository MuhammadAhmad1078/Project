# How to Test Add to Cart Functionality

## How Product Availability Works

Product availability is determined by the `quantity` field from the backend:

- **In Stock**: When `product.quantity > 0`
- **Out of Stock**: When `product.quantity <= 0` or `null/undefined`

The "Add to Cart" button is **disabled** when a product is out of stock.

## Where Availability is Checked

**File**: `src/components/browseproductcomponent/structure/DetailQuickViewPro.tsx`

```typescript
const isInStock = (product?.quantity || 0) > 0;
const isDisabled = !isInStock || isAddingToCart || !productId;
```

## How to Change Product Availability for Testing

### Option 1: Update Product in Backend/Database (Recommended)

1. **Access your backend/admin panel** or database directly
2. **Update the product's `quantity` field** to a value greater than 0
3. **Refresh the product page** in the frontend
4. The product should now show "In Stock" and the "Add to Cart" button should be enabled

**Example**: Update product with ID `113` to have `quantity = 10`

### Option 2: Find an In-Stock Product

1. **Browse products** on `/browseproducts` page
2. **Look for products** that show "In Stock" (green text)
3. **Click on a product** to view its detail page
4. **Test the "Add to Cart" button** on that product

### Option 3: Temporary Frontend Override (For Testing Only)

If you need to test the "Add to Cart" functionality without changing the backend, you can temporarily override the availability check:

**File**: `src/components/browseproductcomponent/structure/DetailQuickViewPro.tsx`

**Change this line**:
```typescript
const isInStock = (product?.quantity || 0) > 0;
```

**To this** (temporarily for testing):
```typescript
// TEMPORARY: Force in stock for testing
const isInStock = true; // Or: (product?.quantity || 0) > 0 || true;
```

⚠️ **Warning**: Remember to revert this change before committing! This is only for local testing.

### Option 4: Use Apollo Client DevTools

1. **Install Apollo Client DevTools** browser extension
2. **Open the product page** in your browser
3. **Use DevTools to modify the cache**:
   - Find the product query result
   - Change `quantity` value to `10` (or any number > 0)
   - The UI should update automatically

## Testing Checklist

Once you have an in-stock product:

- [ ] Product shows "In Stock" (green text)
- [ ] "Add to Cart" button is **enabled** (not grayed out)
- [ ] Quantity selector is working
- [ ] Click "Add to Cart" button
- [ ] Success message appears (or no error)
- [ ] Item appears in cart dropdown
- [ ] Item appears in `/cart` page
- [ ] Cart count updates in navbar

## Backend GraphQL Query

The product data comes from:
```
GET_PRODUCT_DETAIL query
```

Which returns:
```graphql
{
  getProductById(id: "113") {
    product {
      id
      name
      quantity  # <-- This field determines availability
      price
      # ... other fields
    }
  }
}
```

## Backend Mutation (If Available)

If your backend has a mutation to update product quantity:
```graphql
mutation UpdateProductQuantity($productId: ID!, $quantity: Int!) {
  updateProductQuantity(productId: $productId, quantity: $quantity) {
    id
    quantity
  }
}
```

You could use this to update the product availability directly from the frontend (if you have admin access).

