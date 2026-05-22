const Input = ({ password, generatePassword, copied, copyPassword }) => {
    return (
        <div className='flex flex-wrap gap-3 items-center justify-center w-full'>
            <button
                className='flex-shrink-0 bg-purple-600 hover:bg-purple-500 transition duration-300 text-white px-5 py-2 rounded-lg cursor-pointer'
                onClick={generatePassword}
            >
                generate
            </button>
            <input
                type="text"
                readOnly
                className='bg-mauve-300 outline-0 rounded-lg px-3 py-2 flex-shrink-0 min-w-[220px] max-w-[320px] text-black'
                value={password}
            />
            <button
                className={`${copied ? 'bg-pink-700 hover:bg-pink-900' : 'bg-purple-800 hover:bg-purple-900'} flex-shrink-0 transition duration-300 text-white px-5 py-2 rounded-lg cursor-pointer`}
                onClick={copyPassword}
            >
                {copied ? 'copied' : 'copy'}
            </button>
        </div>
    )
}

export default Input