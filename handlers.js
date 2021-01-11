

export function testHandler(event){
    alert('hello welcome to your test');
    const firstName = prompt('So nice to meet you, whats your name?');
    const lastName = prompt(`Hello ${firstName} what is your last name?`);
    const confirmation = confirm(`Alright ${firstName}  + ' '+ ${lastName} are you ready for a quiz? yes, no:`);

    if (!confirmation) return;

}