import React, { useEffect, useState } from 'react'
import { Form } from '@/components/ui/form'
import { useForm } from "react-hook-form"
import { ButtonSecondary, ButtonSecondaryOutline, CustomBreadCrumb, FlexBox, Heading, MyCheckbox, MyInput, MySelect, Text } from '@/components/commoncomponents'
import { countryOp, stateOp } from '@/shared'
import { Separator } from '@/components/ui/separator'
import { useRouter } from 'next/navigation'
import { useLazyQuery, useMutation } from '@apollo/client'
import { GET_CART } from '@/graphql/query/cartQuery'
import { CREATE_ORDER } from '@/graphql/mutation/orderMutations'
import { useCartStore } from '@/store'

interface FormValues {
  firstName: string;
  lastName: string;
  companyName: string;
  address: string;
  email: string;
  phoneNo: string;
  zipcode:string;
  gender: string;
  birthDate: Date;
  country: string;
  state: string;
  city: string;
  chain: string;
  token: string;
  note: string;
}

const CheckoutPage = () => {
    const form = useForm<FormValues>()
    const router = useRouter()
    const { items, getTotalPrice, clearCart } = useCartStore()
    const [isSubmitting, setIsSubmitting] = useState(false)
    
    const [loadCart, { data: cartData, loading: cartLoading }] = useLazyQuery(GET_CART, {
        fetchPolicy: "cache-and-network",
    });
    const [createOrder] = useMutation(CREATE_ORDER, {
        refetchQueries: [{ query: GET_CART }],
    });

    useEffect(() => {
        loadCart();
    }, [loadCart]);

    // Get cart items from API or fall back to local store
    const getCartItems = () => {
        if (cartData?.getCart) {
            return cartData.getCart.map((item: any) => {
                const product = item.product || {};
                return {
                    id: item.id || product.id,
                    img: product.images?.[0]?.url || product.image || 'ip-1.png',
                    title: product.name || product.title || '',
                    quantity: item.quantity || 1,
                    amount: product.price || 0,
                    productId: item.productId || product.id,
                    cartItemId: item.id,
                };
            });
        } else if (items && items.length > 0) {
            return items.map((item) => ({
                id: item.id,
                img: item.image || 'ip-1.png',
                title: item.name,
                quantity: item.quantity,
                amount: item.price,
                productId: item.productId,
            }));
        }
        return [];
    };

    const orderItems = getCartItems();
    const subtotal = cartData?.getCart
        ? cartData.getCart.reduce(
              (sum: number, item: any) =>
                  sum + (item.product?.price || 0) * (item.quantity || 0),
              0
          )
        : getTotalPrice();
    
    const shippingFee: number = 0; // Free shipping
    const platformFee = subtotal * 0.05; // 5% platform fee
    const total = subtotal + shippingFee + platformFee;

    const onSubmit = async (formData: FormValues) => {
        setIsSubmitting(true);
        try {
            // Prepare order items
            const orderProducts = orderItems.map((item: any) => ({
                productId: item.productId,
                quantity: item.quantity,
                price: item.amount,
            }));

            // Create order input
            const orderInput = {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                phone: formData.phoneNo,
                address: formData.address,
                city: formData.city,
                state: formData.state,
                country: formData.country,
                zipCode: formData.zipcode,
                companyName: formData.companyName || null,
                note: formData.note || null,
                chain: formData.chain,
                token: formData.token,
                orderProducts,
                totalPrice: total,
                shippingFee,
                platformFee,
            };

            const { data } = await createOrder({
                variables: { input: orderInput },
            });

            if (data?.createOrder) {
                // Clear cart after successful order
                clearCart();
                // Redirect to confirmation page
                router.push(`/confirmmessage?orderId=${data.createOrder.id}&orderNumber=${data.createOrder.orderNumber}`);
            }
        } catch (error) {
            console.error('Error creating order:', error);
            // Handle error - show toast/alert
            alert('Failed to create order. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const totalData = [
        {
            title: 'Sub-total',
                                            desc: `${Number(subtotal).toFixed(2)} UET`,
        },
        {
            title: 'Shipping',
            desc: shippingFee === 0 ? 'Free' : `${shippingFee.toFixed(2)} UET`,
        },
        {
            title: 'UE-BUZ Fee',
            desc: `${platformFee.toFixed(2)} UET`,
        }
    ]

    return (
        <div className='bg-[#081516] pb-20 pt-[30px]'>
            <div className=' md:w-[90%] w-[95%] mx-auto mt-20'>
                <CustomBreadCrumb 
                    basename='Home'
                    homepath='/browseproducts'
                    endname='Checkout'
                />
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}  className='my-8 flex w-full lg:flex-row flex-col gap-10 md:gap-0'>
                        <div className='lg:w-[75%] w-full lg:border-r-2 lg:pr-4 lg:border-[#2E7A80]'>
                            <Heading type='pageHeading' title='Billing Information' headClass='!text-xl' />
                            <div className="space-y-6">
                                <div className='grid md:grid-cols-3 grid-cols-1 gap-3'>
                                    <MyInput 
                                        name="firstName" 
                                        label="First name" 
                                        required 
                                        message='Please enter first name'
                                        placeholder="" 
                                    />
                                    <MyInput 
                                        name="lastName" 
                                        label="Last name" 
                                        required 
                                        message='Please enter last name'
                                        placeholder="" 
                                    />
                                    <MyInput 
                                        name="companyName" 
                                        label="Company Name (Optional)" 
                                        placeholder="" 
                                    />
                                </div>
                                <MyInput 
                                    name="address" 
                                    label="Address" 
                                    required 
                                    message='Please enter address'
                                    placeholder="" 
                                />
                                <div className='grid md:grid-cols-3 grid-cols-1 gap-4'>
                                    <MySelect 
                                        name="country"
                                        label="Country"
                                        options={countryOp}
                                        required
                                        message="Please select a country"
                                        value={form.watch("country")}
                                    />
                                    <MySelect 
                                        name="state"
                                        label="Region/State"
                                        options={stateOp}
                                        required
                                        message="Please select a region/state"
                                        value={form.watch("state")}
                                    />
                                    <MySelect 
                                        name="city"
                                        label="City"
                                        options={stateOp}
                                        required
                                        message="Please select a city"
                                        value={form.watch("city")}
                                    />
                                                                  
                                </div>
                                <div className='grid md:grid-cols-3 grid-cols-1 gap-3'>
                                    <MyInput 
                                        name="email" 
                                        label="Email" 
                                        required 
                                        message='Please enter email'
                                    />
                                    <MyInput 
                                        name="phoneNo" 
                                        label="Phone Number" 
                                        required 
                                        message='Please enter phone number'
                                    />
                                    <MyInput 
                                        name="zipcode" 
                                        label="Zip Code" 
                                        placeholder="" 
                                        required
                                        message='Please enter zip code'
                                    />  
                                </div>
                                <MyCheckbox 
                                    id="terms"
                                    label="Ship into different address"
                                    labelClassName='text-[#777E90]'
                                />
                                <Text className='mt-3 mb-5' fontSize='text-base'>Payment Option</Text>
                                <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
                                    <MySelect 
                                        name="chain"
                                        label="Chain"
                                        options={[
                                            {
                                                id: 1,
                                                name: 'Chain 01'
                                            }
                                        ]}
                                        required
                                        message="Please select a chain"
                                        value={form.watch("chain")}
                                    />
                                    <MySelect 
                                        name="token"
                                        label="Token"
                                        options={[
                                            {
                                                id: 1,
                                                name: '9291xaj'
                                            }
                                        ]}
                                        required
                                        message="Please select a token"
                                        value={form.watch("token")}
                                    />                           
                                </div>
                                <MyInput 
                                    textArea
                                    name="note" 
                                    label="Additional Information" 
                                    required 
                                    message='Please enter note'
                                    placeholder="Notes about your order, e.g. special notes for delivery" 
                                />                             
                            </div>
                        </div>
                        <div className='lg:w-[25%] w-full pl-4'>
                            <Heading type='pageHeading' title='Order Summary' headClass='!text-xl' />
                            {cartLoading ? (
                                <Text className='text-center py-4'>Loading cart...</Text>
                            ) : orderItems.length === 0 ? (
                                <Text className='text-center py-4 text-gray-400'>
                                    Your cart is empty. <br />
                                    <button
                                        type="button"
                                        onClick={() => router.push('/browseproducts')}
                                        className="text-[#00F4FF] underline mt-2"
                                    >
                                        Continue Shopping
                                    </button>
                                </Text>
                            ) : (
                                <>
                                    {orderItems.map((item: any, index: number) => (
                                        <FlexBox gap='gap-5' items='items-center' className='mb-4' key={item.id || index}>
                                            <div className='border border-[#173D40] p-3 shrink-0'>
                                                <img 
                                                    src={item.img.startsWith('/assets/') || item.img.startsWith('http') 
                                                        ? item.img 
                                                        : `/assets/images/${item.img}`} 
                                                    alt='product_image' 
                                                    className='w-[60px] h-[80px] object-contain' 
                                                />
                                            </div>
                                            <div className='pt-2 flex-1'>
                                                <Text className='mb-2 overflow-hidden [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical]'>
                                                    {item.title}
                                                </Text>
                                                <Text className='m-0'>
                                                    {item.quantity} x <span className='text-[#2DA5F3]'>{item.amount.toFixed(2)} UET</span>
                                                </Text>
                                            </div>
                                        </FlexBox>
                                    ))}
                                </>
                            )}
                            {
                                totalData?.map((items,index)=>
                                    <FlexBox justify='justify-between' items='items-center' className='mb-3' key={index}>
                                        <Text>{items?.title}</Text>
                                        <Text>{items?.desc}</Text>
                                    </FlexBox>
                                )
                            }
                            {orderItems.length > 0 && (
                                <>
                                    <Separator className='bg-[#2E7A80] mb-7 mt-5' />
                                    <FlexBox justify='justify-between' items='items-center' className='mb-3'>
                                        <Text>Total</Text>
                                        <Text>{total.toFixed(2)} UET</Text>
                                    </FlexBox>
                                    <FlexBox direction='flex-col' className='w-full' gap='gap-5'>
                                        <ButtonSecondary 
                                            type='submit' 
                                            disabled={isSubmitting || orderItems.length === 0}
                                            className='mt-4 w-full flex items-center gap-3 justify-center hover:!text-white !bg-[#0C666A] !border-[#0C666A] disabled:opacity-50'
                                        >
                                            {isSubmitting ? 'Placing Order...' : 'Place Order'} 
                                            {!isSubmitting && <img src="/assets/icons/ar-lft.png" width={20} alt="" />}
                                        </ButtonSecondary> 
                                        <ButtonSecondaryOutline 
                                            className='w-full text-white' 
                                            onClick={() => router.push('/cart')}
                                        >
                                            Edit Order
                                        </ButtonSecondaryOutline>  
                                    </FlexBox>
                                </>
                            )}
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default CheckoutPage