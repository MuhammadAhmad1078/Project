import React, { ReactNode } from 'react'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog"

interface Props {
    title?: ReactNode;
    children: ReactNode;
    footer?:ReactNode;
    open: boolean;
    className?:string;
    onClose: () => void;
}

const Modal: React.FC<Props> =  ({open,onClose,children,title,footer,className}) => {
    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className={`w-full bg-[#081516] p-10 rounded-xl border-0 ${className}`}>
                <DialogTitle hidden={title? false:true}>{title}</DialogTitle>
                <div>
                    {
                        children
                    }
                </div>
                {footer && <DialogFooter>{footer}</DialogFooter>}
            </DialogContent>
        </Dialog>

    )
}

export {Modal}