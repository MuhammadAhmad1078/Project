interface Props {
    label: string | null
    name?: string 
    value: string | null
    placeholder?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    required?: boolean
    message?: string
    searchBarWidth?: string
}   
  
export const InputSearch: React.FC<Props> = ({label, name, value, placeholder, onChange, required, message, searchBarWidth}) =>  {
    return (
        <>
            {
                !label ?
                <div 
                    className="flex items-center gap-2 px-3 bg-[#23262F] rounded-lg" 
                    style={{width: searchBarWidth ? searchBarWidth : '100%'}}
                >
                    <img 
                        src="/assets/icons/search.png" 
                        width={24} 
                        alt="underground-empire-search-icon" 
                    />
                    <input 
                        type="text" 
                        className="rounded-xl p-3 ps-0 w-full bg-[#23262F] text-[#B1B5C3] focus:outline-none" 
                        value={value || ""}
                        onChange={onChange}
                        placeholder= {placeholder || ""}
                    />
                </div>
                :
                <div className='mb-3'>
                    <label htmlFor={name} className='block mb-2 text-[#FCFCFD] text-sm'>
                        {label} {required && <span className="text-[red]">*</span>}
                    </label>
                    <div 
                        className="flex items-center gap-2 px-3 bg-[#23262F] rounded-lg" 
                        style={{width: searchBarWidth ? searchBarWidth : '100%'}}
                    >
                        <img 
                            src="/assets/icons/search.png" 
                            width={24} 
                            alt="underground-empire-search-icon" 
                        />
                        <input 
                            type="text" 
                            className="rounded-xl p-3 ps-0 w-full bg-[#23262F] text-[#B1B5C3] focus:outline-none" 
                            value={value || ""}
                            onChange={onChange}
                            placeholder= {placeholder || ""}
                            name={name}
                        />
                    </div>
                    <small>
                        {message}
                    </small>
                </div>
            }
        </>
    )
}
