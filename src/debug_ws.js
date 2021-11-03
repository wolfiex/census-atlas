/* Debug module 
Lazy mans perf wrapper for functions
Sends the results over a websocket to the complementary python program in ./templates.
*/

const ws = new WebSocket('ws://localhost:5001')

let connection_resolvers = [];
export let connect = () => {
    return new Promise((resolve, reject) => {
        if (ws.readyState === WebSocket.OPEN) {
            resolve();
        }
        else {
            connection_resolvers.push({resolve, reject});
        }
    });
}

ws.addEventListener('open', () => {
    connection_resolvers.forEach(r => r.resolve())
});

console.log(ws)



export async function timer_as(fn,args){
    // async timer
    args = args || []
    const start = performance.now()
    const res = await fn(...args)
    const end = performance.now()

    ws.send(`${fn.name}: ${end-start}`)
    console.warn('DEBUG profile',`${fn.name}: ${end-start}`)
    return res
}

export function timer(fn,args){
    // function profiler
    args = args || []
    const start = performance.now()
    const res = fn(...args)
    const end = performance.now()

    ws.send(`${fn.name}: ${end-start}`)
    console.warn('DEBUG profile',`${fn.name}: ${end-start}`)
    return res
}