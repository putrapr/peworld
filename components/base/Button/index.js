
const index = ({ bgColor = 'purple', className,  children, ...props }) => {
  if (bgColor == 'purple') bgColor = 'bg-[#5E50A1] hover:bg-[#53478c]'
  else if (bgColor == 'yellow') bgColor = 'bg-[#FBB017] hover:bg-[#EAA61B]'

  return (
    <button {...props} className={`rounded text-white font-semibold tracking-wider active:ring-2 ${bgColor} ${className}`}
    >{children}</button>    
  )
}

export default index