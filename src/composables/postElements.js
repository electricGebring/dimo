const endpoint = 'http://localhost:3001/'

const postElements = async (skitSomSkaMed) => {
    console.log(skitSomSkaMed, 'skitSomSkaMed i postElements')
    
    await fetch(`${endpoint}`, {
        method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(skitSomSkaMed)
    })
}

export default postElements