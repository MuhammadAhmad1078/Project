# How to Update Product Availability in Apollo Studio Sandbox Explorer

## Step 1: Open Apollo Studio Sandbox Explorer

1. Go to: **https://studio.apollographql.com/sandbox/explorer**
2. You'll see the GraphQL Explorer interface

## Step 2: Check Available Mutations

### Find Product Update Mutation

1. **Click on "Operations" tab** (or look for "Mutations" in the sidebar)
2. **Search for mutations** related to products:
   - Look for: `updateProduct`, `updateProductQuantity`, `updateProductAvailability`
   - Or any mutation that might update product fields

### Check Your Schema

In the Explorer sidebar:
1. Look under **"Mutations"** section
2. Find mutations that might update products:
   - `updateProduct`
   - `updateProductQuantity`
   - `updateProductAvailability`
   - Or similar names

## Step 3: If Update Product Mutation Exists

### Example Mutation Structure:

```graphql
mutation UpdateProductQuantity($productId: ID!, $quantity: Int!) {
  updateProductQuantity(productId: $productId, quantity: $quantity) {
    id
    quantity
    name
  }
}
```

### Or if using an input type:

```graphql
mutation UpdateProduct($id: ID!, $input: UpdateProductInput!) {
  updateProduct(id: $id, input: $input) {
    id
    quantity
    name
  }
}
```

### How to Execute:

1. **Select the mutation** from the sidebar (or type it manually)
2. **Fill in the variables**:
   ```json
   {
     "productId": "113",  // or your product ID
     "quantity": 10       // Set to any number > 0
   }
   ```
3. **Click "Run"** or the play button
4. **Check the response** - it should return the updated product with new quantity

## Step 4: First, Check Current Product Data

### Query to Check Current Product:

```graphql
query GetProductById($id: ID!) {
  getProductById(id: $id) {
    product {
      id
      name
      quantity      # Check current value
      price
      description
    }
  }
}
```

**Variables**:
```json
{
  "id": "113"
}
```

This will show you the current `quantity` value.

## Step 5: If No Update Mutation Exists

If your schema doesn't have an `updateProduct` mutation, you'll need to:

### Option A: Check Backend/Database Directly
- Access your backend admin panel or database
- Update the product's `quantity` field directly

### Option B: Use Your Backend's Admin API
- Check if there's a REST endpoint to update products
- Or check if there's another GraphQL endpoint with admin mutations

### Option C: Temporarily Override in Frontend (For Testing Only)
- Modify `DetailQuickViewPro.tsx` to force `isInStock = true`
- **Remember to revert before committing!**

## Step 6: Verify the Update

After updating, verify it worked:

1. **Run the query again**:
```graphql
query GetProductById($id: ID!) {
  getProductById(id: $id) {
    product {
      id
      name
      quantity      # Should now show the new value
    }
  }
}
```

2. **Refresh your frontend** product page
3. **Check if**:
   - Availability shows "In Stock" (green text)
   - "Add to Cart" button is enabled

## Common Mutation Names to Look For

Look for these mutation names in Apollo Studio Sandbox:

- `updateProduct`
- `updateProductQuantity`
- `updateProductAvailability`
- `updateProductStock`
- `editProduct`
- `modifyProduct`

Or check if there's a generic update mutation:
- `updateProduct(input: UpdateProductInput!)`
- `updateProduct(id: ID!, input: UpdateProductInput!)`

## Authentication

If the mutation requires authentication:
1. **Click on "Headers"** tab in Apollo Studio Sandbox
2. **Add Authorization header**:
   ```
   Authorization: Bearer YOUR_TOKEN_HERE
   ```
3. Get your token from:
   - Browser DevTools → Application → Local Storage → `auth-token`
   - Or login through your frontend and copy the token

## Alternative: Check Your Backend Schema

If you have access to your backend GraphQL schema file, check for:
- `type Mutation` section
- Look for product update mutations
- Check the `UpdateProductInput` type definition

---

## Quick Reference

**Product ID**: The product you want to test (e.g., `"113"`)
**Quantity Value**: Any number > 0 (e.g., `10`)

**Query to check current state**:
```graphql
query {
  getProductById(id: "113") {
    product {
      quantity
    }
  }
}
```

**Mutation to update** (if available):
```graphql
mutation {
  updateProduct(id: "113", input: { quantity: 10 }) {
    id
    quantity
  }
}
```

