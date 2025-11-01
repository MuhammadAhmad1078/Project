import React, { useEffect } from "react";
import { DetailQuickViewPro, ProductSliderThumbnail } from "../structure";
import { useLazyQuery } from "@apollo/client";
import { GET_PRODUCT_DETAIL } from "@/graphql";
import { Modal } from "@/components/commoncomponents";

interface Props {
  view: number | null;
  open: boolean;
  onClose: () => void;
}

const QuickViewModal: React.FC<Props> = ({ open, onClose, view }) => {
  const [loadData, { data, loading }] = useLazyQuery(GET_PRODUCT_DETAIL, {
    fetchPolicy: "cache-and-network",
  });

  useEffect(() => {
    if (view) loadData({ variables: { getProductByIdId: view.toString() } });
  }, [view, loadData]);

  return (
    <Modal open={open} onClose={onClose} className="md:max-w-[90%]">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-15 lg:gap-30 overflow-y-auto lg:h-auto h-[550px] overflow-x-hidden no-scrollbar">
        <ProductSliderThumbnail
          images={data?.getProductById?.product?.images}
        />
        <DetailQuickViewPro data={data?.getProductById} />
      </div>
    </Modal>
  );
};

export { QuickViewModal };
