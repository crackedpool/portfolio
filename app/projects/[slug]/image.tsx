'use client'

import { useState } from "react"
import Image from "next/image"

interface ImgProps {
  src: string;
  name: string;
  index: number
}
const IMG: React.FC<ImgProps> = ({ src, name, index }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative">
      {loading && (
        <div className="absolute inset-y-0 bg-[var(--snd-bg)] min-h-[265px] w-full flex items-center justify-center">
          <div className='h-[27px] w-[27px] animate-spin'>
            <svg height="100%" viewBox="0 0 32 32" width="100%">
              <circle cx="16" cy="16" fill="none" r="14" strokeWidth="2" style={{ stroke: 'var(--cement)', opacity: '0.2' }}></circle>
              <circle cx="16" cy="16" fill="none" r="14" strokeWidth="2" style={{
                stroke: 'var(--cement)',
                strokeDasharray: '80', strokeDashoffset: '60'
              }}></circle>
            </svg >
          </div>
        </div>
      )}
      <Image
        key={index}
        src={src}
        alt={`${name} src ${index + 1}`}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        className="object-cover"
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  )
}

export default IMG; 
