import React from 'react'

const Slider = ({ passwordLength, setpasswordlength }) => {
    return (
        <div className='flex flex-col gap-3 items-center sm:flex-row sm:justify-center sm:items-center'>
            <label className="text-white font-bold" htmlFor="slider">Password Length: {passwordLength}</label>
            <input type="range" id="slider"
                min={4}
                max={15}
                value={passwordLength} className='w-full sm:w-72 accent-mauve-500'
                onChange={(e) => setpasswordlength(e.target.value)} />
        </div>
    )
}

export default Slider