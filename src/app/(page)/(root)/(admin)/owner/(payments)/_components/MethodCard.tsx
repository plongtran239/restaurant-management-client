import Image from 'next/image';
import { Pencil, Trash2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { accountImages } from '@/constants/image';
import PaymentType from '@/types/PaymentType';
import { TransferMethodEnum, TransferMethodEnumValue } from '@/constants/enum';

// interface IProps {
//     image: string;
//     type: string;
//     bankName: string;
//     accountNumber: string;
//     ownerName: string;
//     status: string;
// }

interface IProps {
    payment: PaymentType;
    image: string;
}

export default function MethodCard({ payment, image }: IProps) {
    return (
        <>
            <div className='mt-8 flex w-full items-center justify-between xl:text-center'>
                {/* Image */}
                <div className='relative h-[86px] w-[130px] rounded-lg'>
                    <Image
                        src={image}
                        alt='image'
                        fill
                        className='rounded-lg object-cover'
                    />
                </div>
                <div className='mr-8 w-3/4 max-xl:mx-8 xl:flex'>
                    <div className='flex-1'>
                        <p className='text-gray-400 max-xl:hidden'>Type</p>
                        <p>
                            {payment.methodType ===
                            TransferMethodEnumValue.BANK_TRANSFER
                                ? TransferMethodEnum.BANK_TRANSFER
                                : TransferMethodEnum.DIGITAL_WALLET}
                        </p>
                    </div>
                    <div className='flex-1'>
                        <p className='text-gray-400 max-xl:hidden'>Name</p>
                        <p>{payment.methodName}</p>
                    </div>
                    <div className=' flex-1'>
                        <p className='text-gray-400 max-xl:hidden'>
                            Account Number
                        </p>
                        <p>{payment.accountNumber}</p>
                    </div>
                    <div className=' flex-[2]'>
                        <p className='text-gray-400 max-xl:hidden'>
                            Account Name
                        </p>
                        <p>{payment.accountHolderName}</p>
                    </div>
                    <div className=' flex-[0.5]'>
                        <p className='text-gray-400 max-xl:hidden'>Status</p>
                        <div
                            className={cn(
                                'inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold',
                                payment.isActive
                                    ? 'bg-green-50 text-green-600'
                                    : 'bg-red-50 text-red-600'
                            )}
                        >
                            <span
                                className={cn(
                                    'h-1.5 w-1.5 rounded-full',
                                    payment.isActive
                                        ? 'bg-green-600'
                                        : 'bg-red-600'
                                )}
                            ></span>
                            {payment.isActive ? 'Active' : 'Inactive'}
                        </div>
                    </div>
                </div>
                <div className='flex flex-[2] justify-end gap-4'>
                    <button className='flex min-w-[100px] items-center justify-center gap-3 rounded-md bg-yellow-400 py-1'>
                        <Pencil className='h-4 w-4' />
                        <span>Edit</span>
                    </button>
                    <button className='flex min-w-[100px] items-center justify-center gap-3 rounded-md bg-red-400 py-1'>
                        <Trash2 className='h-4 w-4' />
                        <span>Delete</span>
                    </button>
                </div>
            </div>

            <div className='mt-4 w-full outline outline-1 outline-gray-200' />
        </>
    );
}
