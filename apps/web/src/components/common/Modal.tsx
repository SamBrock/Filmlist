'use client';

import * as ModalPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { forwardRef } from 'react';

import { cn } from '@/lib/utils/cn';

export const Modal = ModalPrimitive.Root;

export const ModalTrigger = ModalPrimitive.Trigger;

export const ModalPortal = ModalPrimitive.Portal;

export const ModalClose = ModalPrimitive.Close;

export const ModalOverlay = forwardRef<
  React.ElementRef<typeof ModalPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof ModalPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <ModalPrimitive.Overlay
    ref={ref}
    className={cn('fixed top-0 left-0 h-screen w-screen bg-black/60', className)}
    {...props}
  />
));

export const ModalContent = forwardRef<
  React.ElementRef<typeof ModalPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof ModalPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <ModalPortal>
    <ModalOverlay />
    <ModalPrimitive.Content ref={ref} className={cn(className)} {...props}>
      {children}
      {/* <ModalPrimitive.Close className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:pointer-events-none">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </ModalPrimitive.Close> */}
    </ModalPrimitive.Content>
  </ModalPortal>
));

export const ModalContentEmpty = forwardRef<
  React.ElementRef<typeof ModalPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof ModalPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <ModalPortal>
    <ModalOverlay />
    <ModalPrimitive.Content
      ref={ref}
      className={cn('fixed top-[50%] left-[50%] z-50 translate-x-[-50%] translate-y-[-50%]', className)}
      {...props}
    >
      {children}
    </ModalPrimitive.Content>
  </ModalPortal>
));

export const ModalTitle = forwardRef<
  React.ElementRef<typeof ModalPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof ModalPrimitive.Title>
>(({ className, ...props }, ref) => (
  <ModalPrimitive.Title
    ref={ref}
    className={cn('text-lg leading-none font-semibold tracking-tight', className)}
    {...props}
  />
));

export const ModalTitleSrOnly = forwardRef<
  React.ElementRef<typeof ModalPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof ModalPrimitive.Title>
>(({ className, ...props }, ref) => (
  <ModalPrimitive.Title ref={ref} className={cn('sr-only', className)} {...props} />
));
