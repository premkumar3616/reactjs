import React from 'react'
import QRCode from 'react-qr-code'

function Qrcode() {
    const [qrCodeValue, setQrCodeValue] = React.useState('');
    const [input, setInput] = React.useState('');
function Generateqrcode() {
    setQrCodeValue(input);
    setInput(''); // Clear input after generating QR code
}


    return (
        <div>
            <h1>Qr code generator</h1>
            <div>
                <input type="text" value={input} placeholder="Enter text to generate QR code" name='qr-code'
                onChange={(e)=>setInput(e.target.value)} />
                <button disabled={input && input.trim() !== ""? false :true} onClick={()=>Generateqrcode()}>Generate QR Code</button>
            </div>
            <div>
                <QRCode
                    id='qr-code'
                    value={qrCodeValue}
                    size={400}
                    bgColor='#ffffff'
                />
            </div>
        </div>
    )
}

export default Qrcode