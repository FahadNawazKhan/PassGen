import React from 'react'

const Actions = ({
    lowercaseAllowed,
    setLowercaseAllowed,

    uppercaseAllowed,
    setUppercaseAllowed,

    numbersAllowed,
    setNumbersAllowed,

    symbolsAllowed,
    setSymbolsAllowed
}) => {

    let checklist =
        uppercaseAllowed +
        lowercaseAllowed +
        numbersAllowed +
        symbolsAllowed

    return (
        <div className='flex flex-wrap justify-center gap-4 text-white font-bold'>
            <label className='flex items-center gap-2'>
                <input
                    type="checkbox"
                    className='accent-mauve-600 h-5 w-5'
                    id="uppercase"
                    checked={uppercaseAllowed}
                    onChange={() => {
                        if (checklist == 1 && uppercaseAllowed) {
                            return
                        }
                        setUppercaseAllowed(prev => !prev)
                    }}
                />
                Uppercase
            </label>

            <label className='flex items-center gap-2'>
                <input
                    type="checkbox"
                    className='accent-mauve-600 h-5 w-5'
                    id="lowercase"
                    checked={lowercaseAllowed}
                    onChange={() => {
                        if (checklist == 1 && lowercaseAllowed) {
                            return
                        }
                        setLowercaseAllowed(prev => !prev)
                    }}
                />
                Lowercase
            </label>

            <label className='flex items-center gap-2'>
                <input
                    type="checkbox"
                    className='accent-mauve-600 h-5 w-5'
                    id="numbers"
                    checked={numbersAllowed}
                    onChange={() => {
                        if (checklist == 1 && numbersAllowed) {
                            return
                        }
                        setNumbersAllowed(prev => !prev)
                    }}
                />
                Numbers
            </label>

            <label className='flex items-center gap-2'>
                <input
                    type="checkbox"
                    className='accent-mauve-600 h-5 w-5'
                    id="symbols"
                    checked={symbolsAllowed}
                    onChange={() => {
                        if (checklist == 1 && symbolsAllowed) {
                            return
                        }
                        setSymbolsAllowed(prev => !prev)
                    }}
                />
                Symbols
            </label>
        </div>
    )
}

export default Actions