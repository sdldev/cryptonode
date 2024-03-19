import clsx from 'clsx'

export function Container({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={clsx('container mx-auto max-w-7xl px-4 md:px-3 lg:px-3', className)}
      {...props}
    />
  )
}
