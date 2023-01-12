import React from 'react'
import SVG from 'react-inlinesvg'
import {toAbsoluteUrl} from '../AssetHelpers'
type Props = {
  className?: string
  path: string
  svgClassName?: string,
  id?: string
}

const KTSVG: React.FC<Props> = ({className = '', path, svgClassName = 'mh-50px', id}) => {
  return (
    <span id={id} className={`svg-icon ${className}`}>
      <SVG src={toAbsoluteUrl(path)} className={svgClassName} />
    </span>
  )
}

export {KTSVG}
