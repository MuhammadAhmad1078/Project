# Product Pages Data Source Status

## ✅ Connected to Backend (Dynamic Data)

### Browse Products Page (`/browseproducts`)

1. **PopularProduct Component** ✅
   - **Source**: `GET_POPULAR_PRODUCTS` query
   - **Status**: Fully dynamic from backend
   - **Location**: `src/components/browseproductcomponent/structure/PopularProduct.tsx`

2. **ShopByCategory Component** ✅
   - **Source**: `GET_ALL_CATEGORIES` query
   - **Status**: Fully dynamic from backend
   - **Location**: `src/components/browseproductcomponent/structure/ShopByCategory.tsx`

3. **Shop Page** (`/shop`) ✅
   - **Source**: `GET_ALL_PRODUCTS` query
   - **Status**: Fully dynamic from backend
   - **Location**: `src/components/shopcomponent/structure/ShopProduct.tsx`

4. **Single Product Page** (`/singleproduct/[id]`) ✅
   - **Source**: `GET_PRODUCTS_BY_ID` query
   - **Status**: Fully dynamic from backend
   - **Location**: `src/pages/singleproduct/[id].tsx`

---

## ⚠️ Partially Connected (Using Some Static Data)

### BestSellerProduct Component ⚠️
- **Location**: `src/components/browseproductcomponent/structure/BestSellerProduct.tsx`
- **Issues**:
  1. Uses static `bestsellerData` for tab categories ("Best Seller", "Top Rated", "New Arrival", "Trending Product")
  2. Products are fetched from API (`GET_BEST_SELLER_PRODUCTS`) but:
     - Wrong data path: accessing `data?.getProducts?.products` instead of `bestSellerProductData?.getBestSellerProducts`
     - Duplicate queries (two `useLazyQuery` hooks querying the same thing)
     - Tabs don't actually filter products - all tabs show same products
- **Action Needed**: 
  - Fix data path to use `bestSellerProductData?.getBestSellerProducts`
  - Fetch categories from API or filter/sort products by tab type
  - Remove duplicate query

---

## ❌ Using Static Data (NOT Connected to Backend)

### Browse Products Page Components

1. **DiscountCards Component** ❌
   - **Source**: Static `discountproData` from `@/components/data`
   - **Location**: `src/components/browseproductcomponent/structure/DiscountCards.tsx`
   - **Action Needed**: Create `GET_DISCOUNT_CARDS` or `GET_PROMOTIONS` query

2. **BenefitCard Component** ❌
   - **Source**: Static `benefitCardData` from `@/components/data`
   - **Location**: `src/components/browseproductcomponent/structure/BenefitCard.tsx`
   - **Action Needed**: Create `GET_BENEFIT_CARDS` query (or keep static if it's marketing content)

3. **MainSlideBanner Component** ❌
   - **Source**: Static images (`pro-1.jpg`, `pro-2.jpg`, `pro-3.jpg`, `pro-4.jpg`)
   - **Location**: `src/components/browseproductcomponent/structure/MainSlideBanner.tsx`
   - **Action Needed**: Create `GET_BANNERS` or `GET_SLIDER_IMAGES` query (or keep static if it's marketing content)

---

## 🔧 Summary

### High Priority Fixes:
1. **BestSellerProduct** - Fix data path and remove duplicate query
2. **BestSellerProduct** - Make tabs actually filter/sort products

### Low Priority (Marketing Content - Could Stay Static):
3. **DiscountCards** - If promotional content, could remain static
4. **BenefitCard** - Marketing content, could remain static
5. **MainSlideBanner** - Hero banner, could remain static

---

## 📝 Recommendation

- **Critical**: Fix BestSellerProduct component to properly display products from backend
- **Optional**: Connect DiscountCards, BenefitCard, and MainSlideBanner if backend provides these features
- **Product data itself**: All actual products are loading from backend ✅

