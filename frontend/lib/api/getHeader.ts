export async function getHeader(){
    try {
        const response = await fetch('https://content.maposia.ru/api/main-header', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ee4c5a52627415d8d610289435ae5ac25c3e8ad7cc5e7a82ed145e72d00de05f37b6c35b60ef2ccb443ac7d64d5f2ba3030a77c94e74cd3900a41d5ceacdb0ef71f38e7222d47ef938ce730e8c9881a9114941fa66530acd94d247fa4ddc40ef5e48a718ea6cbf927694cc946ef5c5f0cf86696cce85de1b0f22bcb93eb33ea7',
            },
            cache: 'no-store'
        })
        const result = await response.json()
        return result.data.attributes.header
    } catch (error) {
        console.error('Failed to fetch header data:', error);
        throw new Error('Failed to fetch header data.');
    }
}
