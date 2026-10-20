import React from 'react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}) => {
  if (!isOpen) return null;

  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-[#173D31]/40 backdrop-blur-xs transition-opacity duration-300"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div
          data-lenis-prevent
          className="w-screen max-w-md bg-[#FFFFFF] shadow-2xl flex flex-col justify-between border-l border-[#24543D]/10"
        >
          
          {/* Header */}
          <div className="p-5 sm:p-6 bg-[#F7F6ED] border-b border-[#24543D]/10 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="css-icon-cart text-[#24543D]" />
              <h2 className="text-lg font-bold text-[#203D40] tracking-tight">
                Your Shopping Cart
              </h2>
              <span className="text-xs font-bold text-[#24543D] bg-[#DDEBD5] px-2.5 py-0.5 rounded-full">
                {items.reduce((acc, i) => acc + i.quantity, 0)}
              </span>
            </div>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full hover:bg-[#DDEBD5]/60 flex items-center justify-center text-[#203D40] transition-colors focus-visible:ring-2 focus-visible:ring-[#24543D] outline-none"
              aria-label="Close cart"
            >
              <span className="css-icon-close text-[#24543D]" />
            </button>
          </div>

          {/* Delivery Note */}
          <div className="bg-[#DDEBD5]/60 px-5 py-2.5 text-xs text-[#24543D] font-semibold flex items-center justify-center gap-2 border-b border-[#24543D]/10">
            <span className="w-2 h-2 rounded-full bg-[#24543D]" />
            <span>Fast delivery across Nepal — Kathmandu Valley same-day dispatch</span>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 text-[#203D40]/70 py-12">
                <div className="w-16 h-16 rounded-full bg-[#F7F6ED] flex items-center justify-center text-[#24543D]">
                  <span className="css-icon-cart" style={{ transform: 'scale(1.5)' }} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#203D40]">
                    Your cart is currently empty
                  </h3>
                  <p className="text-xs text-[#203D40]/60 max-w-xs mt-1">
                    Explore top picks in our featured products and add nutrition or accessories for your furry friend.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-full bg-[#24543D] text-white text-xs font-bold hover:bg-[#173D31] transition-all"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex items-center gap-3.5 p-3 rounded-2xl bg-[#F7F6ED]/70 border border-[#24543D]/10"
                >
                  {/* Thumbnail */}
                  <div className="w-16 h-16 rounded-xl bg-white p-1.5 flex items-center justify-center shrink-0 border border-[#24543D]/10 overflow-hidden">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0 text-left">
                    <h4 className="text-sm font-bold text-[#203D40] truncate">
                      {item.product.name}
                    </h4>
                    <span className="text-xs font-extrabold text-[#24543D] block mt-0.5">
                      NPR {item.product.price.toLocaleString()}
                    </span>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center border border-[#24543D]/20 rounded-lg bg-white overflow-hidden">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, -1)}
                          className="w-6 h-6 flex items-center justify-center text-[#203D40] hover:bg-[#DDEBD5] text-xs font-bold transition-colors"
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <span className="w-7 text-center text-xs font-bold text-[#203D40]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, 1)}
                          className="w-6 h-6 flex items-center justify-center text-[#203D40] hover:bg-[#DDEBD5] text-xs font-bold transition-colors"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        className="text-[11px] text-[#F59562] hover:text-[#d46f3a] font-bold ml-auto transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Subtotal & Demo Checkout */}
          {items.length > 0 && (
            <div className="p-5 sm:p-6 bg-[#F7F6ED] border-t border-[#24543D]/10 space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#203D40]/80 font-medium">Subtotal</span>
                <span className="text-lg font-extrabold text-[#24543D]">
                  NPR {subtotal.toLocaleString()}
                </span>
              </div>
              <p className="text-[11px] text-[#203D40]/60">
                Taxes and delivery calculated at checkout.
              </p>
              <button
                onClick={onCheckout}
                className="w-full py-3.5 rounded-full bg-[#24543D] hover:bg-[#173D31] text-white font-bold text-sm tracking-wide shadow-md transition-all active:scale-95"
              >
                Proceed to Checkout
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
