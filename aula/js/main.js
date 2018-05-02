console.log('main');

let criaexcluiblocos = function(e) {
    if (e.target.tagName === 'DIV'){
        e.target.remove();
    } else {
        const novadiv = document.createElement('div');
        novadiv.textContent = 'div js';
        document.body.appendChild(novadiv);    
    }
};

document.addEventListener('click', criaexcluiblocos);

// screen.width
// screen.height 
