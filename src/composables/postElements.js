const postElements = async (skitSomSkaMed) => {
    await fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: { 'Content-type': application/json },
        body: JSON.stringify(skitSomSkaMed)
    })
}