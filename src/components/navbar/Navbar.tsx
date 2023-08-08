import React, { FormEvent, useState } from 'react';
import "./navbar.css"

export interface INavbarProps {
  onSearch: (text: string) => {},
}

export default function Navbar({ onSearch }: INavbarProps) {
  const [input, setInput] = useState<string>("")

  function onChange(e) {
    setInput(e.target.value)
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    onSearch(input)
  }
  
  return (
    <nav className='nav' >
      <form onSubmit={onSubmit} className='search-container' >
        <button type="submit" className='submit-btn' >
          <svg width="32" height="32" className="search-icon" viewBox="0 0 24 24" version="1.1" aria-hidden="false"><desc lang="en-US">A magnifying glass</desc><path d="M16.5 15c.9-1.2 1.5-2.8 1.5-4.5C18 6.4 14.6 3 10.5 3S3 6.4 3 10.5 6.4 18 10.5 18c1.7 0 3.2-.5 4.5-1.5l4.6 4.5 1.4-1.5-4.5-4.5zm-6 1c-3 0-5.5-2.5-5.5-5.5S7.5 5 10.5 5 16 7.5 16 10.5 13.5 16 10.5 16z"></path></svg>
        </button>
        <input autoComplete='off' type="text" name="search" id="search" placeholder='Search high-resolution images' value={input} onChange={(e) => onChange(e)} />
      </form>
    </nav>
  )
}
