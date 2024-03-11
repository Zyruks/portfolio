export enum TagVariant {
  primary = 'primary',
  secondary = 'secondary',
  neutral = 'neutral',
  success = 'success',
  warning = 'warning',
  error = 'error',
  special = 'special',
}

export const Variants: Record<TagVariant, string> = {
  [TagVariant.primary]: 'bg-primary-400/10 text-primary-500 ring-1 ring-inset ring-primary-400/30',
  [TagVariant.secondary]: 'bg-secondary-400/10 text-secondary-300 dark:text-secondary-200 ring-1 ring-inset ring-secondary-300/30',
  [TagVariant.neutral]: 'bg-slate-400/10 text-slate-600 dark:text-slate-300 ring-1 ring-inset ring-slate-400/20',
  [TagVariant.success]: 'bg-blue-500/10 text-blue-500 dark:text-blue-400 ring-1 ring-inset ring-blue-500/20',
  [TagVariant.warning]: 'bg-yellow-400/10 text-yellow-600 dark:text-yellow-500 ring-1 ring-inset ring-yellow-400/20',
  [TagVariant.error]: 'bg-red-400/10 text-red-400 ring-1 ring-inset ring-red-400/20',
  [TagVariant.special]:
    'bg-gradient-to-r from-rose-800/80 dark:from-rose-800/60 to-secondary-600/80 dark:to-secondary-600/60 text-white ring-1 ring-inset ring-secondary-500/70',
};
