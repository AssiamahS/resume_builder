document.getElementById('resume-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const summary = document.getElementById('summary').value;
    
    const resumeOutput = `
        <h2>${name}</h2>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <h3>Summary</h3>
        <p>${summary}</p>
    `;
    
    document.getElementById('resume-output').innerHTML = resumeOutput;
});
