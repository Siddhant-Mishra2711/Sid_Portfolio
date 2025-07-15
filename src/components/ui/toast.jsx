import * as React from "react";
import * as RadixToast from "@radix-ui/react-toast";
import { cva } from "class-variance-authority";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

// Toast context provider
const ToastProvider = RadixToast.Provider;

// Custom viewport placement and styling
const ToastViewport = React.forwardRef(({ className, ...props }, ref) => (
  <RadixToast.Viewport
    ref={ref}
    className={cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse gap-3 p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    )}
    {...props}
  />
));
ToastViewport.displayName = RadixToast.Viewport.displayName;

// Variant-based styling using cva
const toastStyles = cva(
  "group pointer-events-auto relative flex w-full items-start justify-between gap-4 overflow-hidden rounded-lg border p-6 pr-8 shadow-xl transition-all",
  {
    variants: {
      variant: {
        default:
          "border bg-background text-foreground data-[state=open]:animate-slideInUp data-[state=closed]:animate-fadeOut",
        destructive:
          "border-red-500 bg-red-600 text-white group-[.destructive]:border-red-500",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

// Toast root wrapper
const Toast = React.forwardRef(({ className, variant, ...props }, ref) => (
  <RadixToast.Root
    ref={ref}
    className={cn(toastStyles({ variant }), className)}
    {...props}
  />
));
Toast.displayName = RadixToast.Root.displayName;

// Action button inside toast
const ToastAction = React.forwardRef(({ className, ...props }, ref) => (
  <RadixToast.Action
    ref={ref}
    className={cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border px-3 text-sm font-medium transition-colors hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 group-[.destructive]:hover:bg-red-700",
      className
    )}
    {...props}
  />
));
ToastAction.displayName = RadixToast.Action.displayName;

// Close button (top-right "X")
const ToastClose = React.forwardRef(({ className, ...props }, ref) => (
  <RadixToast.Close
    ref={ref}
    className={cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-white group-[.destructive]:hover:text-red-100",
      className
    )}
    toast-close=""
    {...props}
  >
    <X className="h-4 w-4" />
  </RadixToast.Close>
));
ToastClose.displayName = RadixToast.Close.displayName;

// Toast Title
const ToastTitle = React.forwardRef(({ className, ...props }, ref) => (
  <RadixToast.Title
    ref={ref}
    className={cn("text-base font-bold tracking-tight", className)}
    {...props}
  />
));
ToastTitle.displayName = RadixToast.Title.displayName;

// Toast Description
const ToastDescription = React.forwardRef(({ className, ...props }, ref) => (
  <RadixToast.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
ToastDescription.displayName = RadixToast.Description.displayName;

// Export all components
export {
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
};

