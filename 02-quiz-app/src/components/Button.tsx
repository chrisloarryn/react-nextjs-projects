import { FC, PropsWithChildren } from 'react'

export type ButtonComponentProps = {
  onClick: () => void
  type?: string
  addClassNames?: string
}

const Button: FC<PropsWithChildren<ButtonComponentProps>> = ({
  children = 'children',
  onClick = () => console.log('init'),
  type = 'p',
  addClassNames = ''
}) => {
  const color = type === 'error' ? 'red' : 'purple'
  return (
    <button
      onClick={onClick}
      className={`bg-${color}-500 hover:bg-${color}-700 focus:outline-none py-3 px-6 text-white shadow rounded ${addClassNames}`}
    >
      {children}
    </button>
  )
}

export default Button
