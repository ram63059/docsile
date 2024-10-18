
function Input({label, type} : any) {

    return (
      <div className="w-full max-w-sm min-w-[200px] mt-5">
              <label htmlFor="email" className="mb-10 font-medium text-slate-600">
  
                  {label}
              </label>
              <input
                className="w-full bg-transparent  placeholder:text-slate-400 text-slate-700 text-sm border border-main rounded-lg px-3 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder=""
                type= {type}
              />
            </div>
    )
  }
  
  export default Input