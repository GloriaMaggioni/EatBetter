export default async (req) => {
    const url = new URL(req.url);
    const target = url.searchParams.get('url');


    if(!target){
        return new Response(JSON.stringify({error : 'Missing url parameter'}), {
            status: 400,
            headers : {'Content-Type': 'application/json'}
        })
    }


    const response = await fetch(target);
    const data = await response.json();

    return new Response(JSON.stringify(data), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
    });

}

   export const config = {
        path: "/api/fruit-proxy"
    }