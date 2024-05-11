import React from 'react'

const Dropdown = ({ title, options }) => {
    return (
        <div>
            <select className='text-zinc-300 bg-zinc-600' name="format" id="format" defaultValue='0'>
                <option value="0" disabled>{title}</option>
                {options.map((o, i) => (
                    <option key={i} value={0} > {o.toUpperCase()}</option>
                ))}
            </select>
        </div>
    )
}

export default Dropdown