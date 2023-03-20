import { useRef, useState } from "react";


function App() {
  const [output, setOutput] = useState('')
  const inputRef = useRef(null)

  function getCelsius() {
    const input = inputRef.current.value
    const tempC = `${(Math.floor(5/9*(input - 32)))} ºC`
    // alert(`The temperature in Celsius is ${tempC} ºC`)
    setOutput(tempC)
  }

  function getFarenheit() {
    const input = inputRef.current.value
    const tempF = `${(Math.floor(input * (9/5) + 32))} ºF`
    setOutput(tempF)
  }


  return (
    <div className="">
      <div className="m-4 border-4 rounded-xl h-[90vh] bg-gradient-to-br from-blue-400/60 to-orange-600/40 shadow-lg">
        <div className="mt-20">
          <div className="flex flex-col  justify-center items-center mx-4 sm:mx-0">
            <h1 className="text-5xl mb-4">Simple Temperature Converter</h1>
            <p className="sm:text-lg">
              Convert temps easily from Farenheit to Celsius or vice-versa
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-8 mt-20 ">
      
            <input
              type="text"
              id="tempInput"
              ref={inputRef}
              placeholder="Temp in ºC or ºF"
              className="border-2 border-black px-2 py-1 bg-gray-50/60 text-lg  focus:border-transparent w-[80%]"
            />
           <span className="text-5xl font-bold text-red-500 h-10 drop-shadow-lg ">{output}</span>
          </div>
          <div className="flex flex-col gap-10 sm:flex-row sm:justify-between w-[60%] items-center  mx-auto mt-12">
            <p className="border-2 border-black rounded p-4 text-lg hover:cursor-pointer hover:bg-gray-200 " id="convertC" onClick={getCelsius}>
              Convert to Celsius
            </p>
            <p className="border-2 border-black rounded p-4 text-lg hover:cursor-pointer hover:bg-gray-200" id="convertF" onClick={getFarenheit}>
              Convert to Farenheit
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
