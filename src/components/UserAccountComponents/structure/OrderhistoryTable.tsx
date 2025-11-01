import React, { useState, useEffect } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table"
import { CustomPagination, Text } from '@/components/commoncomponents';
import { OrderhistoryDetail } from './OrderhistoryDetail';
import { useLazyQuery } from '@apollo/client';
import { GET_PROFILE_ORDER } from '@/graphql/query/sellerDashboard';

interface Props {
    showdetail: boolean;
    setShowDetail: (show:boolean)=> void;
}

const OrderhistoryTable:React.FC<Props> = ({showdetail, setShowDetail}) => {

    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [selectedOrder, setSelectedOrder] = useState<any>(null);

    const [loadOrders, { data: ordersData, loading }] = useLazyQuery(GET_PROFILE_ORDER, {
        fetchPolicy: "cache-and-network",
    });

    useEffect(() => {
        loadOrders({
            variables: {
                isSeller: false, // User is a buyer
                offset: (page - 1) * rowsPerPage,
                limit: rowsPerPage,
            },
        });
    }, [loadOrders, page, rowsPerPage]);

    const orders = ordersData?.getProfileOrders?.orders || [];
    const totalOrders = ordersData?.getProfileOrders?.totalCount || 0;
    const totalPages = Math.ceil(totalOrders / rowsPerPage);

    const getStatusDisplay = (status: string) => {
        const statusMap: any = {
            'PENDING': { bg: 'bg-[#112338]', text: 'text-[#466FF7]', label: 'To Ship' },
            'SHIPPED': { bg: 'bg-[#0C3021]', text: 'text-[#22C55E]', label: 'To Received' },
            'DELIVERED': { bg: 'bg-[#2C221C]', text: 'text-[#F5693D]', label: 'To Review' },
            'CANCELLED': { bg: 'bg-[#2A3536]', text: 'text-[#E8E8E8]', label: 'Cancelled' },
        };
        return statusMap[status] || statusMap['PENDING'];
    };

    const handleOrderClick = (order: any) => {
        setSelectedOrder(order);
        setShowDetail(true);
    };
    return (
        <div className='w-full overflow-x-auto mt-3'>
            {
                !showdetail ?
                <>
                    {loading ? (
                        <div className="text-center py-10">
                            <Text className="text-gray-400">Loading orders...</Text>
                        </div>
                    ) : orders.length === 0 ? (
                        <div className="text-center py-10">
                            <Text className="text-gray-400">No orders found</Text>
                        </div>
                    ) : (
                        <>
                            <Table className='min-w-[900px]  border border-[#0C666A] font-normal'>
                                <TableBody className="bg-[#0E1414]">
                                    {
                                        orders?.map((order: any, index: number) => {
                                            const product = order?.product || {};
                                            const statusDisplay = getStatusDisplay(order?.status || 'PENDING');
                                            return (
                                                <TableRow
                                                    className='border-[#0C666A] hover:bg-transparent cursor-pointer'
                                                    onClick={() => handleOrderClick(order)}
                                                    key={order.id || index}
                                                >
                                                    <TableCell className='w-[400px] p-5'>
                                                        <div className='flex items-center gap-4'>
                                                            <div className='p-3 border border-[#0C666A] shrink-0'>
                                                                <img
                                                                    src={product.images?.[0]?.url || '/assets/images/placeholder.png'}
                                                                    className='w-12 h-16 object-contain'
                                                                    alt={product.name || 'Product'}
                                                                />
                                                            </div>
                                                            <p className='text-[13px] text-white text-wrap'>
                                                                {product.name || 'Product Name'}
                                                            </p>
                                                        </div>
                                                    </TableCell>
                                                    <TableCell className=" w-[100px]">
                                                        <span className="text-[#777E90] text-sm">{product.price || 0} UET</span>
                                                    </TableCell>
                                                    <TableCell className='w-[80px]'>
                                                        <span className="text-[#777E90] text-sm">1</span>
                                                    </TableCell>
                                                    <TableCell className='w-[80px]'>
                                                        <span className={`${statusDisplay.bg} py-2 px-4 rounded-3xl ${statusDisplay.text} text-[13px]`}>
                                                            {statusDisplay.label}
                                                        </span>
                                                    </TableCell>
                                                </TableRow>
                                            );
                                        })
                                    }
                                </TableBody>
                            </Table>
                            <div className='mt-5'>
                                <CustomPagination
                                    currentPage={page}
                                    totalPages={totalPages || 1}
                                    onPageChange={setPage}
                                    rowsPerPage={rowsPerPage}
                                    onRowsPerPageChange={(newSize) => {
                                        setRowsPerPage(newSize);
                                        setPage(1);
                                    }}
                                />
                            </div>
                        </>
                    )}
                </>
                :
                <OrderhistoryDetail order={selectedOrder} />
            }

        </div>
    )
}

export {OrderhistoryTable}