# Backend Integration Status Report

## ✅ Already Connected to Backend
- Cart (CartTable, CartDrop)
- Wishlist (WishlistTable, WishlistNotification)
- Services/Products in Business Hub (AllServicesProduct)
- Checkout page (order creation)
- Seller/Buyer Orders (AllOrderTable - already integrated)
- Product listing queries (GET_ALL_PRODUCTS, GET_BEST_SELLER_PRODUCTS, etc.)
- User authentication (login/logout)

---

## ⚠️ Still Using Static Data (NOT Connected)

### 1. **FAQs Component**
   - **File**: `src/components/businesshubcomponent/structure/Faqs.tsx`
   - **Issue**: Uses static `faqsData` from data folder
   - **Action Needed**: Create GraphQL query `GET_FAQS` and integrate

### 2. **Personal Details (User Account)**
   - **File**: `src/components/UserAccountComponents/structure/PersonalDetailsContent.tsx`
   - **Issue**: Uses static `personalData`
   - **Action Needed**: 
     - Create query `GET_USER_PROFILE` or `GET_USER_PERSONAL_DETAILS`
     - Use `useAuthStore` user data or fetch from API
     - **EditPersonalDetails form** (console.log only) - needs `UPDATE_USER_PROFILE` mutation

### 3. **Address Book (User Account)**
   - **File**: `src/components/UserAccountComponents/structure/AddressBookContent.tsx`
   - **Issue**: Uses static `addressbookData`
   - **Action Needed**:
     - Create query `GET_USER_ADDRESSES`
     - **EditAddressBook form** (console.log only) - needs `CREATE_ADDRESS` / `UPDATE_ADDRESS` mutations

### 4. **Best Seller Product Tabs**
   - **File**: `src/components/browseproductcomponent/structure/BestSellerProduct.tsx`
   - **Issue**: Uses static `bestsellerData` for tab categories
   - **Note**: Products are fetched from API, but tab categories are static
   - **Action Needed**: Fetch categories from API or use `GET_ALL_CATEGORIES`

### 5. **Edit Order Table**
   - **File**: `src/components/CartComponent/structure/EditOrderTable.tsx`
   - **Issue**: Uses static `carttableData`
   - **Action Needed**: Use same cart API as CartTable (`GET_CART`)

### 6. **Activity Buyer Favorite Tab**
   - **File**: `src/components/selleraccountcomponent/structure/ActivityBuyerFavoriteTab.tsx`
   - **Issue**: Uses static `favoriteproductData`
   - **Action Needed**: Create query `GET_USER_FAVORITE_PRODUCTS` or reuse wishlist API

### 7. **Product Variant Table**
   - **File**: `src/components/listproductcomponents/structure/ProductVariantTable.tsx`
   - **Issue**: Uses local state, not persisted or fetched from API
   - **Action Needed**: 
     - Create queries `GET_PRODUCT_VARIANTS` (for fetching)
     - Create mutations `CREATE_VARIANT`, `UPDATE_VARIANT`, `DELETE_VARIANT`

---

## ❌ Forms NOT Submitting to Backend

### 1. **Edit Personal Details Form**
   - **File**: `src/components/UserAccountComponents/structure/EditPersonalDetails.tsx`
   - **Current**: Just `console.log('Form data:', data)`
   - **Needs**: `UPDATE_USER_PROFILE` mutation (already exists in mutations.ts)

### 2. **Edit Address Book Form**
   - **File**: `src/components/UserAccountComponents/structure/EditAddressBook.tsx`
   - **Current**: Just `console.log('Form data:', data)`
   - **Needs**: `CREATE_ADDRESS` / `UPDATE_ADDRESS` / `DELETE_ADDRESS` mutations

### 3. **Product Listing Forms** (Multiple Steps)
   - **Files**:
     - `src/components/listproductcomponents/structure/CategoryStepContent.tsx`
     - `src/components/listproductcomponents/structure/ProductDetailStepContent.tsx`
     - `src/components/listproductcomponents/structure/PricingAndShipping.tsx`
     - `src/components/listproductcomponents/structure/DiscountStepContent.tsx`
     - `src/components/listproductcomponents/structure/ProductVariantsContent.tsx`
   - **Current**: All just `console.log('Form data:', data)`
   - **Needs**: `CREATE_PRODUCT` mutation (might need to create if not exists)

---

## 📋 Priority Recommendations

### High Priority:
1. **Edit Personal Details** - User can't update their profile
2. **Edit Address Book** - User can't manage addresses
3. **Edit Order Table** - Should use real cart data
4. **Product Listing Forms** - Sellers can't create products

### Medium Priority:
5. **FAQs** - Content management
6. **Best Seller Tabs** - Should use categories from API
7. **Product Variants** - Product management

### Low Priority:
8. **Activity Buyer Favorite Tab** - Could reuse wishlist API

---

## 🔧 Required GraphQL Operations to Create

### Queries:
- `GET_FAQS` - Fetch FAQs
- `GET_USER_ADDRESSES` - Fetch user addresses
- `GET_PRODUCT_VARIANTS` - Fetch product variants
- `GET_USER_FAVORITE_PRODUCTS` - Fetch favorite products (or reuse wishlist)

### Mutations:
- `UPDATE_USER_PROFILE` - Already exists, just needs integration
- `CREATE_ADDRESS` - Create new address
- `UPDATE_ADDRESS` - Update existing address
- `DELETE_ADDRESS` - Delete address
- `CREATE_PRODUCT` - Create new product listing
- `UPDATE_PRODUCT` - Update product
- `CREATE_VARIANT` - Create product variant
- `UPDATE_VARIANT` - Update product variant
- `DELETE_VARIANT` - Delete product variant

